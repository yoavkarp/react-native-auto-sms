/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSMSQueueInput = {
  id: string,
  body: string,
  des: Array< string | null >,
  created_at: string,
};

export type SMSQueue = {
  __typename: "SMSQueue",
  id: string,
  body: string,
  des: Array< string | null >,
  created_at: string,
};

export type UpdateSMSQueueInput = {
  id: string,
  body?: string | null,
  des?: Array< string | null > | null,
  created_at: string,
};

export type DeleteSMSQueueInput = {
  id: string,
  created_at: string,
};

export type TableSMSQueueFilterInput = {
  id?: TableIDFilterInput | null,
  body?: TableStringFilterInput | null,
  des?: TableStringFilterInput | null,
  created_at?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type SMSQueueConnection = {
  __typename: "SMSQueueConnection",
  items?:  Array<SMSQueue | null > | null,
  nextToken?: string | null,
};

export type CreateSMSQueueMutationVariables = {
  input: CreateSMSQueueInput,
};

export type CreateSMSQueueMutation = {
  createSMSQueue?:  {
    __typename: "SMSQueue",
    id: string,
    body: string,
    des: Array< string | null >,
    created_at: string,
  } | null,
};

export type UpdateSMSQueueMutationVariables = {
  input: UpdateSMSQueueInput,
};

export type UpdateSMSQueueMutation = {
  updateSMSQueue?:  {
    __typename: "SMSQueue",
    id: string,
    body: string,
    des: Array< string | null >,
    created_at: string,
  } | null,
};

export type DeleteSMSQueueMutationVariables = {
  input: DeleteSMSQueueInput,
};

export type DeleteSMSQueueMutation = {
  deleteSMSQueue?:  {
    __typename: "SMSQueue",
    id: string,
    body: string,
    des: Array< string | null >,
    created_at: string,
  } | null,
};

export type GetSMSQueueQueryVariables = {
  id: string,
  created_at: string,
};

export type GetSMSQueueQuery = {
  getSMSQueue?:  {
    __typename: "SMSQueue",
    id: string,
    body: string,
    des: Array< string | null >,
    created_at: string,
  } | null,
};

export type ListSMSQueuesQueryVariables = {
  filter?: TableSMSQueueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSMSQueuesQuery = {
  listSMSQueues?:  {
    __typename: "SMSQueueConnection",
    items?:  Array< {
      __typename: "SMSQueue",
      id: string,
      body: string,
      des: Array< string | null >,
      created_at: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSMSQueueSubscriptionVariables = {
  id?: string | null,
  body?: string | null,
  des?: Array< string | null > | null,
  created_at?: string | null,
};

export type OnCreateSMSQueueSubscription = {
  onCreateSMSQueue?:  {
    __typename: "SMSQueue",
    id: string,
    body: string,
    des: Array< string | null >,
    created_at: string,
  } | null,
};

export type OnUpdateSMSQueueSubscriptionVariables = {
  id?: string | null,
  body?: string | null,
  des?: Array< string | null > | null,
  created_at?: string | null,
};

export type OnUpdateSMSQueueSubscription = {
  onUpdateSMSQueue?:  {
    __typename: "SMSQueue",
    id: string,
    body: string,
    des: Array< string | null >,
    created_at: string,
  } | null,
};

export type OnDeleteSMSQueueSubscriptionVariables = {
  id?: string | null,
  body?: string | null,
  des?: Array< string | null > | null,
  created_at?: string | null,
};

export type OnDeleteSMSQueueSubscription = {
  onDeleteSMSQueue?:  {
    __typename: "SMSQueue",
    id: string,
    body: string,
    des: Array< string | null >,
    created_at: string,
  } | null,
};
