/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createSMSQueue = /* GraphQL */ `mutation CreateSMSQueue($input: CreateSMSQueueInput!) {
  createSMSQueue(input: $input) {
    id
    body
    des
    created_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSMSQueueMutationVariables,
  APITypes.CreateSMSQueueMutation
>;
export const updateSMSQueue = /* GraphQL */ `mutation UpdateSMSQueue($input: UpdateSMSQueueInput!) {
  updateSMSQueue(input: $input) {
    id
    body
    des
    created_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSMSQueueMutationVariables,
  APITypes.UpdateSMSQueueMutation
>;
export const deleteSMSQueue = /* GraphQL */ `mutation DeleteSMSQueue($input: DeleteSMSQueueInput!) {
  deleteSMSQueue(input: $input) {
    id
    body
    des
    created_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSMSQueueMutationVariables,
  APITypes.DeleteSMSQueueMutation
>;
