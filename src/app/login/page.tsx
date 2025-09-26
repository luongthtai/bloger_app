import { LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import logo from 'public/loginBg.svg';
import { SecondaryButton } from "../components/Button";
import AuthLayout from "../layouts/AuthLayout";
import { FormInput } from "../components/Input";

export default function LoginPage() {
  return (
    <AuthLayout image={logo}>
      <h1 className="text-4xl font-bold mb-16">Login into <br /> your account</h1>

      <form className="grid gap-12">
        <div className="grid gap-8">
          <FormInput icon={<Mail className="text-gray50" />} placeholder="Your Email Address" />
          <FormInput icon={<LockKeyhole className="text-gray50" />} placeholder="Password" />
        </div>

        <SecondaryButton rounded="small" className="w-full">Login</SecondaryButton>
      </form>

      <div className="font-semibold mt-12">
        <span className="text-gray50">Dont have account</span>
        <Link href="/sign-up" className="ml-8 text-blue">Register</Link>
      </div>
    </AuthLayout>
  );
}
