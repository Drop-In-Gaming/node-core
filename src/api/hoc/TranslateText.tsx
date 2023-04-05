import { TranslateClient, TranslateTextCommand } from "@aws-sdk/client-translate";
import {ReactElement, useEffect, useState} from "react";
import DigApi from "DigApi";

// @link https://stackoverflow.com/questions/69734293/aws-sdk-js-for-translate-client-results-an-error-cannot-read-property-byteleng/69879101#69879101
// @link https://stackoverflow.com/questions/69979295/how-to-translate-axios-responses-using-amazon-translate-or-google-translate-in-r/75584431#75584431
const client = new TranslateClient({
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
    }
});


interface iTranslateText {
    original: string,
    originalLanguageCode: string,
    translated: string|undefined
    translatedLanguageCode: string|undefined,
}

let cache : iTranslateText[] = []

const buildLanguage = "en";

export default function TranslateText({children = "StackOverflow is very good."}: {
    children: string
}) : ReactElement<any, any> {

    const {translateToLanguage} = DigApi.digApi.state
    const [translation, setTranslation] = useState<string>(children)


    useEffect(() => {

        if (buildLanguage === translateToLanguage?.code) {

            if (translation !== children) {

                setTranslation(children)

            }

            return;

        }

        if (undefined ===translateToLanguage) {

            return;

        }

        (async () => {

            // @link https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html
            const command = new TranslateTextCommand({
                Text: children,
                SourceLanguageCode: buildLanguage,
                TargetLanguageCode: translateToLanguage.code
            })

            const data = await client.send(command);

            cache.push({
                original: children,
                originalLanguageCode: buildLanguage,
                translated: data.TranslatedText,
                translatedLanguageCode: translateToLanguage?.code
            })

            if (data.TranslatedText) {

                setTranslation(data?.TranslatedText)

            }

        })()

    }, [translateToLanguage])

    const cacheResult = cache.find(results => results.original === children)

    if (undefined !== cacheResult) {

        return <>{cacheResult.translated}</>

    }

    return <>{translation}</>

}
