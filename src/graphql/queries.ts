/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getSMSQueue = /* GraphQL */ `query GetSMSQueue($id: ID!, $created_at: AWSDateTime!) {
  getSMSQueue(id: $id, created_at: $created_at) {
    id
    body
    des
    created_at
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSMSQueueQueryVariables,
  APITypes.GetSMSQueueQuery
>;
export const listSMSQueues = /* GraphQL */ `query ListSMSQueues(
  $filter: TableSMSQueueFilterInput
  $limit: Int
  $nextToken: String
) {
  listSMSQueues(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      body
      des
      created_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSMSQueuesQueryVariables,
  APITypes.ListSMSQueuesQuery
>;
