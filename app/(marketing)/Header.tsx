import Image from 'next/image'
import React from 'react'
import logo from "../../public/mascot.svg"
import { Button } from '@/components/ui/button'
import { ClerkLoaded, ClerkLoading,SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'

export const Header = () => {
  return (
    <div className='h-20 border-b-2 border-slate-200 px-4 w-full'>
        <div className='lg:max-w-screen-lg mx-auto flex items-center justify-between h-full'>
            <div className='pt-8 pb-7 pl-4 flex items-center gap-x-3'>
                <Image src={logo} height={40} width={40} alt='lingo'/>
                <h1 className='text-green-600 text-2xl font-extrabold tracking-wide'>Lingo</h1>
            </div>
            <ClerkLoading>
                <Loader className='text-muted-foreground h-5 w-5 animate-spin'/>
            </ClerkLoading>
            <ClerkLoaded>
                <SignedIn>
                    <UserButton afterSignOutUrl='/'/>
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal" afterSignInUrl='/learn' afterSignUpUrl="/learn" >
                    <Button size="lg" >Login</Button>
                    </SignInButton>
                </SignedOut>
            </ClerkLoaded>
        </div>
    </div>
  )
}
