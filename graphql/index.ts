import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AWSDateTime: { input: string; output: string; }
};

export type CreateSmsQueueInput = {
  body: Scalars['String']['input'];
  created_at: Scalars['AWSDateTime']['input'];
  des: Array<InputMaybe<Scalars['String']['input']>>;
  id: Scalars['ID']['input'];
};

export type DeleteSmsQueueInput = {
  created_at: Scalars['AWSDateTime']['input'];
  id: Scalars['ID']['input'];
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createSMSQueue?: Maybe<SmsQueue>;
  deleteSMSQueue?: Maybe<SmsQueue>;
  updateSMSQueue?: Maybe<SmsQueue>;
};


export type MutationCreateSmsQueueArgs = {
  input: CreateSmsQueueInput;
};


export type MutationDeleteSmsQueueArgs = {
  input: DeleteSmsQueueInput;
};


export type MutationUpdateSmsQueueArgs = {
  input: UpdateSmsQueueInput;
};

export type Query = {
  __typename?: 'Query';
  getSMSQueue?: Maybe<SmsQueue>;
  listSMSQueues?: Maybe<SmsQueueConnection>;
};


export type QueryGetSmsQueueArgs = {
  created_at: Scalars['AWSDateTime']['input'];
  id: Scalars['ID']['input'];
};


export type QueryListSmsQueuesArgs = {
  filter?: InputMaybe<TableSmsQueueFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type SmsQueue = {
  __typename?: 'SMSQueue';
  body: Scalars['String']['output'];
  created_at: Scalars['AWSDateTime']['output'];
  des: Array<Maybe<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
};

export type SmsQueueConnection = {
  __typename?: 'SMSQueueConnection';
  items?: Maybe<Array<Maybe<SmsQueue>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateSMSQueue?: Maybe<SmsQueue>;
  onDeleteSMSQueue?: Maybe<SmsQueue>;
  onUpdateSMSQueue?: Maybe<SmsQueue>;
};


export type SubscriptionOnCreateSmsQueueArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['AWSDateTime']['input']>;
  des?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionOnDeleteSmsQueueArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['AWSDateTime']['input']>;
  des?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionOnUpdateSmsQueueArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['AWSDateTime']['input']>;
  des?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TableBooleanFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TableFloatFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
};

export type TableIdFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  beginsWith?: InputMaybe<Scalars['ID']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  ge?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  le?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type TableIntFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export type TableSmsQueueFilterInput = {
  body?: InputMaybe<TableStringFilterInput>;
  created_at?: InputMaybe<TableStringFilterInput>;
  des?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
};

export type TableStringFilterInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type UpdateSmsQueueInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  created_at: Scalars['AWSDateTime']['input'];
  des?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: Scalars['ID']['input'];
};

export type CreateSmsQueueMutationVariables = Exact<{
  input: CreateSmsQueueInput;
}>;


export type CreateSmsQueueMutation = { __typename?: 'Mutation', createSMSQueue?: { __typename?: 'SMSQueue', id: string, body: string, des: Array<string | null>, created_at: string } | null };

export type DeleteSmsQueueMutationVariables = Exact<{
  input: DeleteSmsQueueInput;
}>;


export type DeleteSmsQueueMutation = { __typename?: 'Mutation', deleteSMSQueue?: { __typename?: 'SMSQueue', id: string, body: string, des: Array<string | null>, created_at: string } | null };

export type ListSmsQueuesQueryVariables = Exact<{
  filter?: InputMaybe<TableSmsQueueFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListSmsQueuesQuery = { __typename?: 'Query', listSMSQueues?: { __typename?: 'SMSQueueConnection', nextToken?: string | null, items?: Array<{ __typename?: 'SMSQueue', id: string, created_at: string, body: string, des: Array<string | null> } | null> | null } | null };

export type OnCreateSmsQueueSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCreateSmsQueueSubscription = { __typename?: 'Subscription', onCreateSMSQueue?: { __typename?: 'SMSQueue', id: string, body: string, des: Array<string | null>, created_at: string } | null };


export const CreateSmsQueueDocument = gql`
    mutation CreateSMSQueue($input: CreateSMSQueueInput!) {
  createSMSQueue(input: $input) {
    id
    body
    des
    created_at
  }
}
    `;
export type CreateSmsQueueMutationFn = Apollo.MutationFunction<CreateSmsQueueMutation, CreateSmsQueueMutationVariables>;

/**
 * __useCreateSmsQueueMutation__
 *
 * To run a mutation, you first call `useCreateSmsQueueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSmsQueueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSmsQueueMutation, { data, loading, error }] = useCreateSmsQueueMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSmsQueueMutation(baseOptions?: Apollo.MutationHookOptions<CreateSmsQueueMutation, CreateSmsQueueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSmsQueueMutation, CreateSmsQueueMutationVariables>(CreateSmsQueueDocument, options);
      }
export type CreateSmsQueueMutationHookResult = ReturnType<typeof useCreateSmsQueueMutation>;
export type CreateSmsQueueMutationResult = Apollo.MutationResult<CreateSmsQueueMutation>;
export type CreateSmsQueueMutationOptions = Apollo.BaseMutationOptions<CreateSmsQueueMutation, CreateSmsQueueMutationVariables>;
export const DeleteSmsQueueDocument = gql`
    mutation DeleteSMSQueue($input: DeleteSMSQueueInput!) {
  deleteSMSQueue(input: $input) {
    id
    body
    des
    created_at
  }
}
    `;
export type DeleteSmsQueueMutationFn = Apollo.MutationFunction<DeleteSmsQueueMutation, DeleteSmsQueueMutationVariables>;

/**
 * __useDeleteSmsQueueMutation__
 *
 * To run a mutation, you first call `useDeleteSmsQueueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSmsQueueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSmsQueueMutation, { data, loading, error }] = useDeleteSmsQueueMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteSmsQueueMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSmsQueueMutation, DeleteSmsQueueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSmsQueueMutation, DeleteSmsQueueMutationVariables>(DeleteSmsQueueDocument, options);
      }
export type DeleteSmsQueueMutationHookResult = ReturnType<typeof useDeleteSmsQueueMutation>;
export type DeleteSmsQueueMutationResult = Apollo.MutationResult<DeleteSmsQueueMutation>;
export type DeleteSmsQueueMutationOptions = Apollo.BaseMutationOptions<DeleteSmsQueueMutation, DeleteSmsQueueMutationVariables>;
export const ListSmsQueuesDocument = gql`
    query ListSMSQueues($filter: TableSMSQueueFilterInput, $limit: Int, $nextToken: String) {
  listSMSQueues(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      created_at
      body
      des
    }
    nextToken
  }
}
    `;

/**
 * __useListSmsQueuesQuery__
 *
 * To run a query within a React component, call `useListSmsQueuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSmsQueuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSmsQueuesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListSmsQueuesQuery(baseOptions?: Apollo.QueryHookOptions<ListSmsQueuesQuery, ListSmsQueuesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListSmsQueuesQuery, ListSmsQueuesQueryVariables>(ListSmsQueuesDocument, options);
      }
export function useListSmsQueuesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListSmsQueuesQuery, ListSmsQueuesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListSmsQueuesQuery, ListSmsQueuesQueryVariables>(ListSmsQueuesDocument, options);
        }
export function useListSmsQueuesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListSmsQueuesQuery, ListSmsQueuesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListSmsQueuesQuery, ListSmsQueuesQueryVariables>(ListSmsQueuesDocument, options);
        }
export type ListSmsQueuesQueryHookResult = ReturnType<typeof useListSmsQueuesQuery>;
export type ListSmsQueuesLazyQueryHookResult = ReturnType<typeof useListSmsQueuesLazyQuery>;
export type ListSmsQueuesSuspenseQueryHookResult = ReturnType<typeof useListSmsQueuesSuspenseQuery>;
export type ListSmsQueuesQueryResult = Apollo.QueryResult<ListSmsQueuesQuery, ListSmsQueuesQueryVariables>;
export const OnCreateSmsQueueDocument = gql`
    subscription OnCreateSMSQueue {
  onCreateSMSQueue {
    id
    body
    des
    created_at
  }
}
    `;

/**
 * __useOnCreateSmsQueueSubscription__
 *
 * To run a query within a React component, call `useOnCreateSmsQueueSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateSmsQueueSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateSmsQueueSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnCreateSmsQueueSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCreateSmsQueueSubscription, OnCreateSmsQueueSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnCreateSmsQueueSubscription, OnCreateSmsQueueSubscriptionVariables>(OnCreateSmsQueueDocument, options);
      }
export type OnCreateSmsQueueSubscriptionHookResult = ReturnType<typeof useOnCreateSmsQueueSubscription>;
export type OnCreateSmsQueueSubscriptionResult = Apollo.SubscriptionResult<OnCreateSmsQueueSubscription>;