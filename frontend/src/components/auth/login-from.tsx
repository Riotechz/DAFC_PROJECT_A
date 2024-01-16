'use client'
import React from "react";
import { useForm } from 'react-hook-form'
import { InputField } from "../from";
import { Button, Label } from "flowbite-react";
import { CiUser } from 'react-icons/ci'
import { PiEyeSlash } from "react-icons/pi";
import { LoginPayload } from "@/models/auth";

export interface LoginFormProps {
    onSubmit?: (payload: LoginPayload) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
    const { control, handleSubmit } = useForm<LoginPayload>({
        defaultValues: {
            username: '',
            password: '',
        },
    })

    function handleLoginSubmmit(payload: LoginPayload) {
        onSubmit?.(payload)
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleLoginSubmmit)}>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="username" value="Username" />
                </div>
                <InputField name="username" control={control} icon={CiUser} placeholder='username' />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password" value="Password" />
                </div>
                <InputField type="password" name="password" control={control} icon={PiEyeSlash} placeholder='password' />
            </div>
            <Button type="submit">Login</Button>
        </form >
    )
}