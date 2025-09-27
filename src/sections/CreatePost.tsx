'use client'

import { LoaderCircle, PenLine, X } from 'lucide-react'
import React, { ChangeEvent, useRef } from 'react'
import Image from 'next/image'
import avatar from 'public/avatar.webp'
import { Image as ImageSvg } from 'lucide-react'
import { useFormik } from 'formik'
import { useMutation } from '@tanstack/react-query'
import { post } from '@/helps/api'
import { toast } from 'react-toastify'
import { TitleSection } from '@/components/TitleSection'
import { PrimaryButton } from '@/components/Button'

type IInitialValues = {
    content: string,
    media: File | undefined,
    image: string,
    mediaType: string
}

const initialValues: IInitialValues = {
    content: "",
    media: undefined,
    image: "",
    mediaType: ""
}

export default function CreatePost() {
    const inputRef = useRef<HTMLInputElement>(null)

    const createPost = useMutation({
        mutationFn: (values: any) => post('/post/create', values),
        onSuccess: (res) => {
            if (res.status) {
                formik.resetForm()
                toast.success('Create post success !!!', { position: 'top-center' })
            } else toast.error('Create post fail !!!', { position: "top-center" })
        }
    })

    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            const formData = new FormData()

            formData.append('content', values.content)
            formData.append('media', values.media ? values.media : '')
            formData.append('mediaType', values.mediaType)

            createPost.mutate(formData)
        }
    })

    const handleFocusInput = () => {
        inputRef.current?.click()
    }

    const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = e.target.files

        if (!files || files.length === 0) return;

        const typeFile = files[0].type.split('/')[0]

        formik.setValues({
            ...formik.values,
            image: URL.createObjectURL(files[0]),
            media: files[0],
            mediaType: typeFile
        })
    }

    const handleDeleteImage = () => {
        formik.setValues({
            ...formik.values,
            image: "",
            media: undefined
        })
    }

    return (
        <section className='bg-white rounded-8 py-16 px-20 shadow-sidebar flex flex-col gap-12'>
            <div className='flex items-center gap-6'>
                <div className='bg-gray rounded-full p-6 text-blue'><PenLine size={15} /></div>
                <TitleSection title='Create Post' />
            </div>

            <div className='rounded-8 border-gray border-[2px] p-6 flex gap-16'>
                <Image src={avatar} alt='user name' className='w-20 h-20 rounded-full object-contain shrink' />
                <textarea name='content' value={formik.values.content} onChange={formik.handleChange} className='w-full resize-y outline-0 text-12 font-medium text-gray60' rows={6} placeholder="What's on your mind?"></textarea>
            </div>
            {
                formik.values.image
                &&
                <div className='relative w-fit'>
                    <button className='absolute top-4 right-4 bg-white rounded-full p-4 cursor-pointer' onClick={handleDeleteImage}><X size={14} /></button>
                    <Image src={formik.values.image} width={2000} height={2000} alt={formik.values.image} className='w-[200px] object-contain' />
                </div>
            }

            <div className='flex justify-between items-center'>
                <button type='button' className='text-12 flex items-center gap-8 font-semibold cursor-pointer' onClick={handleFocusInput}>
                    <ImageSvg className='text-success' size={20} /> <span>Photo/Video</span>
                    <input ref={inputRef} type="file" name="media" hidden accept='image/png, image/jpg' onChange={(e) => handleChangeFile(e)} />
                </button>
                <PrimaryButton padding='small' className='text-12 w-[100px] flex justify-center' onClick={formik.handleSubmit}>
                    {
                        createPost.isPending ? <LoaderCircle size={18} className='animate-spin' /> : 'Confirm'
                    }
                </PrimaryButton>
            </div>
        </section>
    )
}
