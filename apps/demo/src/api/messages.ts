import { HelloWorldMessage, Message, MESSAGE_TYPE } from '@chefguevara/types';
import { useQuery } from '@tanstack/react-query';

const useFetchMessage =  () => useQuery({
  queryKey: ['message'],
  queryFn: async ():Promise<Message> => {
    try {
      const response = await fetch('http://localhost:3000/message', {
        method: 'GET',
      });
   
      if (!response.ok) {
        return { message: 'Error fetching message', type: MESSAGE_TYPE.ERROR };
      }
      const message = await response.json();
      return message as HelloWorldMessage;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        message: 'Error fetching message',
        type: MESSAGE_TYPE.ERROR,
      } as HelloWorldMessage;
    }
  },
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  retry: false,
  staleTime: 1000 * 60 * 5, // 5 minutes
});
export  { useFetchMessage };
