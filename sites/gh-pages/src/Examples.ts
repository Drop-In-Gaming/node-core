import RegisterCode from '!!raw-loader!./examples/RegisterApi';
import RegisterApi from './examples/RegisterApi';
import {FunctionComponent} from "react";


export interface iComponentProps {
    organization_id: number
}


interface iExample {
    exampleCode: string,
    component: FunctionComponent<iComponentProps>
}

const Examples : iExample[] = [
    {
        exampleCode: RegisterCode,
        component: RegisterApi
    }
]


export default Examples;