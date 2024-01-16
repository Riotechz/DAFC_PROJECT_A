import { TextInput, TextInputProps } from "flowbite-react"
import React, { useContext } from "react"
import { Control, useController } from "react-hook-form"

export type InputFieldProps = TextInputProps & {
    name: string,
    lable?: string,
    control: Control<any>
}

export function InputField({ name, lable, control, ...rest }: InputFieldProps) {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error }
    } = useController({
        name,
        control,
    })

    return (
        <TextInput
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            {...rest}
        />
    )
}