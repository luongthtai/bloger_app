'use client'

import { LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import logo from 'public/loginBg.svg';
import { SecondaryButton } from "../../components/Button";
import { FormInput } from "../../components/Input";
import { useFormik } from "formik";
import { post } from "@/helps/api";
import AuthLayout from "@/layouts/AuthLayout";
import { useMutation } from "@tanstack/react-query";
import { authMessages } from "@/helps/errors";
import * as Yup from 'yup'
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type IInitialValues = {
  email: string;
  password: string;
}

const initialValues: IInitialValues = {
  email: '',
  password: ''
}

export default function LoginPage() {
  const router = useRouter()

  const loginMutation = useMutation({
    mutationFn: (values: IInitialValues) => post('/auth/login', values),
    onSuccess: (data) => {
      if (!data.status) {
        const errCode: string = data.err_code

        if (errCode === 'not_email' || errCode === 'acc_block') formik.setFieldError('email', authMessages[errCode])
        if (errCode === 'not_pass') formik.setFieldError('password', authMessages[errCode])
      } else {
        toast.success('Login success!', { hideProgressBar: true })
        setTimeout(() => {
          router.replace('/')
        }, 1500);
      }
    }
  })

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email(authMessages.invalidEmail).required(authMessages.required),
      password: Yup.string().min(6, authMessages.passwordMismatch).required(authMessages.required)
    }),
    onSubmit: values => loginMutation.mutate(values)
  });

  return (
    <AuthLayout image={logo}>
      <h1 className="text-4xl font-bold mb-16">Login into <br /> your account</h1>

      <form className="grid gap-12" onSubmit={formik.handleSubmit}>
        <div className="grid gap-8">
          <FormInput
            name="email"
            onChange={formik.handleChange}
            icon={<Mail
              className="text-gray50" />}
            placeholder="Your Email Address"
            error={formik.errors.email && formik.touched.email ? formik.errors.email : undefined}
          />
          <FormInput
            name="password"
            onChange={formik.handleChange}
            icon={<LockKeyhole className="text-gray50" />}
            placeholder="Password"
            type="password"
            error={formik.errors.password && formik.touched.password ? formik.errors.password : undefined}
          />
        </div>

        <SecondaryButton rounded="small" className="w-full" type="submit" onClick={formik.handleSubmit}>Login</SecondaryButton>
      </form>

      <div className="font-semibold mt-12">
        <span className="text-gray50">Dont have account</span>
        <Link href="/sign-up" className="ml-8 text-blue">Register</Link>
      </div>
    </AuthLayout>
  );
}
