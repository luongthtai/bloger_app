'use client'

import { LockKeyhole, Mail, UserRound } from "lucide-react";
import Link from "next/link";
import logo from "public/signupBg.svg";
import { SecondaryButton } from "../../components/Button";
import { FormInput } from "../../components/Input";
import AuthLayout from "@/layouts/AuthLayout";
import { useFormik } from "formik";
import { post } from "@/helps/api";
import { useMutation } from "@tanstack/react-query";
import { authMessages } from "@/helps/errors";
import * as Yup from 'yup'
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type IInitialValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: IInitialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export default function SignInPage() {
  const router = useRouter()

  const registerMut = useMutation({
    mutationFn: (values: IInitialValues) => post('/auth/register', values),
    onSuccess: (data) => {
      if (!data.status) {
        const errCode: string = data.err_code

        if (errCode === 'existed' || errCode === 'create_fail') formik.setFieldError('email', authMessages[errCode])
        else {
          formik.resetForm()
          toast.success('Register success! Please login to your account.')
          router.push('/login')
        }
      }
    }
  })

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      username: Yup.string().required(authMessages.required),
      email: Yup.string().email(authMessages.invalidEmail).required(authMessages.required),
      password: Yup.string().min(6, authMessages.shortPassword).required(authMessages.required),
      confirmPassword: Yup.string().oneOf([Yup.ref('password')], authMessages.passwordMismatch).required(authMessages.required)
    }),
    onSubmit: values => registerMut.mutate(values)
  })

  return (
    <AuthLayout image={logo}>
      <h1 className="text-4xl font-bold mb-16">Create <br /> your account</h1>

      <form className="grid gap-12" onSubmit={formik.handleSubmit}>
        <div className="grid gap-8">
          <FormInput
            name="username"
            onChange={formik.handleChange}
            icon={<UserRound className="text-gray50" />}
            placeholder="Your Name"
            error={formik.touched.username && formik.errors.username ? formik.errors.username : undefined}
          />
          <FormInput
            name="email"
            onChange={formik.handleChange}
            icon={<Mail className="text-gray50" />}
            placeholder="Your Email Address"
            error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
          />
          <FormInput
            name="password"
            onChange={formik.handleChange}
            type="password"
            icon={<LockKeyhole className="text-gray50" />}
            placeholder="Password"
            error={formik.touched.password && formik.errors.password ? formik.errors.password : undefined}
          />
          <FormInput
            name="confirmPassword"
            onChange={formik.handleChange}
            type="password"
            icon={<LockKeyhole className="text-gray50" />}
            placeholder="Confirm Password"
            error={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : undefined}
          />
        </div>

        <SecondaryButton rounded="small" className="w-full" type="submit" onClick={formik.handleSubmit}>Register</SecondaryButton>
      </form>

      <div className="font-semibold mt-12">
        <span className="text-gray50">Already have account</span>
        <Link href="/login" className="ml-8 text-blue">Login</Link>
      </div>
    </AuthLayout>
  );
}
