import RegisterCode from '!!raw-loader!./examples/RegisterApi';
import RegisterApi from './examples/RegisterApi';


interface iExample {
    exampleCode: string,
    component: any
}

const Examples : iExample[] = [
    {
        exampleCode: RegisterCode,
        component: RegisterApi
    }
]


export default Examples;