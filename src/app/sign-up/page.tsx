import { LockKeyhole, Mail, UserRound } from "lucide-react";
import Link from "next/link";
import logo from "public/signupBg.svg";
import { SecondaryButton } from "../components/Button";
import AuthLayout from "../layouts/AuthLayout";
import { FormInput } from "../components/Input";

export default function SignInPage() {
  return (
    <AuthLayout image={logo}>
      <h1 className="text-4xl font-bold mb-16">Create <br /> your account</h1>

      <form className="grid gap-12">
        <div className="grid gap-8">
          <FormInput icon={<UserRound className="text-gray50" />} placeholder="Your Name" />
          <FormInput icon={<Mail className="text-gray50" />} placeholder="Your Email Address" />
          <FormInput icon={<LockKeyhole className="text-gray50" />} placeholder="Password" />
          <FormInput icon={<LockKeyhole className="text-gray50" />} placeholder="Confirm Password" />
        </div>

        <SecondaryButton rounded="small" className="w-full">Register</SecondaryButton>
      </form>

      <div className="font-semibold mt-12">
        <span className="text-gray50">Already have account</span>
        <Link href="/login" className="ml-8 text-blue">Login</Link>
      </div>
    </AuthLayout>
  );
}
