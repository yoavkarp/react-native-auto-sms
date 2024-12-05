import { AuthOptions, createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    HttpLink,
    ApolloLink,
} from "@apollo/client";
import { PropsWithChildren } from "react";

/* The HTTPS endpoint of the AWS AppSync API 
(e.g. *https://aaaaaaaaaaaaaaaaaaaaaaaaaa.appsync-api.us-east-1.amazonaws.com/graphql*). 
[Custom domain names](https://docs.aws.amazon.com/appsync/latest/devguide/custom-domain-name.html) can also be supplied here (e.g. *https://api.yourdomain.com/graphql*). 
Custom domain names can have any format, but must end with `/graphql` 
(see https://graphql.org/learn/serving-over-http/#uris-routes). */

const url = "https://pygspgmmarbv3ceilht6euzjgm.appsync-api.eu-central-1.amazonaws.com/graphql";
const region = "eu-central-1";

const auth: AuthOptions = {
    type: "API_KEY",
    apiKey: 'da2-5bmhcu4cdven7dyqqbhkicrkqq'
};

const httpLink = new HttpLink({
    uri: url, fetchOptions: {
        reactNative: { textStreaming: true }
    }
});

const link = ApolloLink.from([
    createAuthLink({ url, region, auth }),
    createSubscriptionHandshakeLink({ url, region, auth }, httpLink),
]);

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});

export const AppSyncProvider = ({ children }: PropsWithChildren) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};