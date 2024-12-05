import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: "schema.json",
    documents: ["graphql/documents/**/*.graphql"],
    generates: {
        'graphql/index.ts': {
            plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
            config: {
                withHooks: true,
                scalars: {
                    "AWSDate": "string",
                    "AWSDateTime": "string",
                    "AWSTime": "string",
                    "AWSJSON": "{ [x: string]: any }",
                    "AWSPhone": "string",
                    "AWSURL": "string",
                    "AWSEmail": "string",
                    "AWSTimestamp": "number"
                },
            }
        }
    }
}

export default config