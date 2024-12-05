import { client } from '../components/AppSyncProvider';
import { DeleteSmsQueueDocument, DeleteSmsQueueMutation, DeleteSmsQueueMutationVariables, ListSmsQueuesDocument, OnCreateSmsQueueDocument, OnCreateSmsQueueSubscription, OnCreateSmsQueueSubscriptionVariables, SmsQueue } from '../graphql';
import { SendDirectSms } from 'react-native-send-direct-sms';
import { ListSMSQueuesQuery, ListSMSQueuesQueryVariables } from '../src/API';

export const ApolloSubscriptionTask = async () => {


    const response = await client.query<ListSMSQueuesQuery, ListSMSQueuesQueryVariables>({
        query: ListSmsQueuesDocument,
        variables: {
            limit: 50
        },
        fetchPolicy: 'network-only'
    })

    async function sendSMS(item: SmsQueue) {

        console.log("SENDING SMS TO ", item.des[0])

        const { id, des, body, created_at } = item;
        await client.mutate<DeleteSmsQueueMutation, DeleteSmsQueueMutationVariables>({
            mutation: DeleteSmsQueueDocument,
            variables: { input: { id, created_at } }
        })

        const send = await SendDirectSms(des[0]!, body)
    }


    if (response.data.listSMSQueues?.items?.length) {
        for (let i = 0; i < response.data.listSMSQueues?.items?.length; i++) {
            await sendSMS(response.data.listSMSQueues?.items[i]!);
        }
    }

};