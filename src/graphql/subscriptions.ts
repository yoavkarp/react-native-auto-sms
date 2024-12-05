/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateSMSQueue = /* GraphQL */ `subscription OnCreateSMSQueue(
  $id: ID
  $body: String
  $des: [String]
  $created_at: AWSDateTime
) {
  onCreateSMSQueue(id: $id, body: $body, des: $des, created_at: $created_at) {
    id
    body
    des
    created_at
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSMSQueueSubscriptionVariables,
  APITypes.OnCreateSMSQueueSubscription
>;
export const onUpdateSMSQueue = /* GraphQL */ `subscription OnUpdateSMSQueue(
  $id: ID
  $body: String
  $des: [String]
  $created_at: AWSDateTime
) {
  onUpdateSMSQueue(id: $id, body: $body, des: $des, created_at: $created_at) {
    id
    body
    des
    created_at
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSMSQueueSubscriptionVariables,
  APITypes.OnUpdateSMSQueueSubscription
>;
export const onDeleteSMSQueue = /* GraphQL */ `subscription OnDeleteSMSQueue(
  $id: ID
  $body: String
  $des: [String]
  $created_at: AWSDateTime
) {
  onDeleteSMSQueue(id: $id, body: $body, des: $des, created_at: $created_at) {
    id
    body
    des
    created_at
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSMSQueueSubscriptionVariables,
  APITypes.OnDeleteSMSQueueSubscription
>;
