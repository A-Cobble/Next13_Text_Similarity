'use client'

import { FC, FormEvent, useState } from 'react';
import { toast } from '@/ui/Toast';
import { createApiKey } from '@/helpers/create-api-key';
import { Key } from 'lucide-react';
import LargeHeading from '@/ui/LargeHeading'


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
  return (
    <div className='container md:max-w-2xl'>
      <div className='flex flex-col gap-6 items-center'>
        <Key className='mx-auto h-12 w-12 text-gray-400' />
        <LargeHeading></LargeHeading>
      </div>
    </div>
  )
}

export default RequestApiKey