import {CodeBlock, dracula, googlecode} from "react-code-blocks";

export function codeBlock(markdown: string, highlight: string = "", language: string = "php", dark: boolean = true) {
    return <CodeBlock
        text={markdown}
        language={language}
        showLineNumbers={true}
        theme={dark ? dracula : googlecode}
        highlight={highlight}
    />
}