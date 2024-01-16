'use client'
import React from "react";
import { useForm } from 'react-hook-form'
import { InputField } from "../from";
import { Button, Label, Checkbox } from "flowbite-react";
import { CiUser, CiMail } from 'react-icons/ci'
import { PiEyeSlash, PiPhone } from "react-icons/pi";
import { RegisterPayload } from "@/models/auth";
import Link from "next/link";

export interface RegisterFormProps {
    onSubmit?: (payload: RegisterPayload) => void
}

export function RegisterForm({ onSubmit }: RegisterFormProps) {
    const { control, handleSubmit } = useForm<RegisterPayload>({
        defaultValues: {
            username: '',
            email: '',
            mobileNo: '',
            password: '',
            passwordConfirm: '',
        },
    })

    function handleRegisterSubmmit(payload: RegisterPayload) {
        onSubmit?.(payload)
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleRegisterSubmmit)}>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="username" value="Username" />
                </div>
                <InputField name="username" control={control} icon={CiUser} placeholder='username' />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Email" />
                </div>
                <InputField type="email" name="email" control={control} icon={CiMail} placeholder='email' />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="mobileNo" value="Phone" />
                </div>
                <InputField type="mobileNo" name="mobileNo" control={control} icon={PiPhone} placeholder='phone' />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password" value="Password" />
                </div>
                <InputField type="password" name="password" control={control} icon={PiEyeSlash} placeholder='password' />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="passwordConfirm" value="Confirm password" />
                </div>
                <InputField type="password" name="passwordConfirm" control={control} icon={PiEyeSlash} placeholder='confirm password' />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="agree" />
                <Label htmlFor="agree" className="flex">
                    I agree with the&nbsp;
                    <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                        terms and conditions
                    </Link>
                </Label>
            </div>

            <Button type="submit">Register</Button>
        </form >
    )
}