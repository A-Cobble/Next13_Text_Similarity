'use client'

import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { useTheme } from 'next-themes';
import { FC } from 'react';
import { DropdownMenu } from './ui/DropdownMenu';
import { Moon, Sun } from 'lucide-react';
import Button from './ui/Button';

interface ThemeToggleProps {
   
}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {

  const { setTheme } = useTheme()


   return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm'>
          <Sun className='rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100' />
          <Moon className='absolue rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
   )
}

export default ThemeToggle