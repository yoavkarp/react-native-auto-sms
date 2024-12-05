import { polyfill as polyfillEncoding } from "react-native-polyfill-globals/src/encoding";
import { polyfill as polyfillReadableStream } from "react-native-polyfill-globals/src/readable-stream";
import { polyfill as polyfillFetch } from "react-native-polyfill-globals/src/fetch";
import { loadErrorMessages, loadDevMessages, loadErrorMessageHandler } from "@apollo/client/dev";
import { Amplify } from "aws-amplify";
import 'react-native-get-random-values'

loadDevMessages();
loadErrorMessages();

polyfillReadableStream();
polyfillEncoding();
polyfillFetch();

loadErrorMessageHandler(console.error)

Amplify.configure({
    API: {
        GraphQL: {
            endpoint: 'https://ep7bpusa5nd4lkdtw2x4acq3ye.appsync-api.eu-central-1.amazonaws.com/graphql',
            region: 'eu-central-1',
            defaultAuthMode: 'apiKey',
            apiKey: 'da2-vntckegxdjcahowa25a3dtdu4u'
        }
    }
});

console.log("Initialized");

export { }