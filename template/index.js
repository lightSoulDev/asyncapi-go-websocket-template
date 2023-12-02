import { File } from '@asyncapi/generator-react-sdk';

export default function({ asyncapi, params }) {
    console.log('asyncapi', asyncapi);
    console.log('params', params);

    return (
        <File name="main.go">
            {`package main`}
        </File>
    )
}