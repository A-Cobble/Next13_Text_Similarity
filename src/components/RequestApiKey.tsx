'use client'

import { FC, FormEvent, useState } from 'react';
import { toast } from './ui/Toast';
import { createApiKey } from '@/helpers/create-api-key';


const RequestApiKey: FC = () => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsCreating(true)
    
    try{
      const generatedApiKey = await createApiKey()
      setApiKey(generatedApiKey)
    }catch(err){
      if(err instanceof Error){
        toast({
          title: 'Error',
          message: err.message,
          type: 'error',
        })
        return
      }

      toast({
        title: 'Error',
        message: 'Something went wrong.',
        type: 'error',
      })
    } finally{
      setIsCreating(false)
    }
  }
   return <div>RequestApiKey</div>
}

export default RequestApiKey