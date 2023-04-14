'use client'

import { FC, useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/ui/DropdownMenu';
import { Button } from '@/ui/Button';
import { Loader2 } from 'lucide-react';
import { toast } from './ui/Toast';

interface ApiKeyOptionsProps {
  apiKeyId: string,
  apiKeyKey: string,
}

const ApiKeyOptions: FC<ApiKeyOptionsProps> = ({apiKeyId, apiKeyKey}) => {
  const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false);
  const [isRevoking, setIsRevoking] = useState<boolean>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isCreatingNew || isRevoking} asChild>
        <Button variant='ghost' className='flex gap-2 items-center'>
          <p>
            {isCreatingNew? (
              'Creating a new key'
            ):isRevoking? (
              'Revoking Key'
            ):(
              'Options'
            )}
          </p>
          {isCreatingNew || isRevoking? (
            <Loader2 className='animate-spin h-4 w-4' />
          ): null}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => {
          navigator.clipboard.writeText(apiKeyKey)

          toast({
            title: 'Copied',
            message: 'API key copied to clipboard',
            type: 'success',
          })
        }}>
          Copy
        </DropdownMenuItem>

        <DropdownMenuItem>
          Create new key
        </DropdownMenuItem>

        <DropdownMenuItem>
          Revoke Key
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ApiKeyOptions