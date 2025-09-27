'use client'

import { PrimaryButton, SecondaryButton } from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { ToastContainer } from "react-toastify";

type Props = {
  children: React.ReactNode;
  image: HTMLImageElement | string;
};


export default function AuthLayout({ children, image }: Props) {
  const router = useRouter()

  const navigateToLogin = () => {
    router.push('/login')
  }

  const navigateToSignUp = () => {
    router.push('/sign-up')
  }

  return (
    <body className="flex h-screen items-center">
      <Image src={image} alt="" className="w-5/12 object-contain bg-lightBlue h-full" />
      <div className="w-7/12 h-full flex justify-center items-center">
        <div className="flex justify-end gap-2.5 fixed top-6 right-6">
          <PrimaryButton className="w-[100px] text-sm" onClick={navigateToLogin}>Login</PrimaryButton>
          <SecondaryButton className="w-[100px] text-sm" onClick={navigateToSignUp}>Sign Up</SecondaryButton>
        </div>

        <section className="max-w-[390px] w-full">
          {children}
        </section>
      </div>
      <ToastContainer hideProgressBar={true} />
    </body>
  )
}
