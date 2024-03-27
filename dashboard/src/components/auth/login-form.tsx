import { LoginPayload } from '../../models'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, CircularProgress, IconButton, InputAdornment } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from '../form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';


export interface LoginFormProps {
    onSubmit?: (payload: LoginPayload) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
    const schema = yup.object().shape({
        username: yup
            .string()
            .required('Please enter username')
            .min(4, 'Username is required to have at least 4 characters'),

        password: yup
            .string()
            .required('Please enter password')
            .min(6, 'Password is required to have at least 6 characters'),
    })

    const [showPassword, setShowPassword] = useState(false)
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<LoginPayload>({
        defaultValues: {
            username: '',
            password: '',
        },
        resolver: yupResolver(schema),
    })

    async function handleLoginSubmit(payload: LoginPayload) {
        await onSubmit?.(payload)
    }

    return (
        <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <InputField name="username" label="Username" control={control} />

                    <InputField
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        label="Password"
                        control={control}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword((x) => !x)}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        disabled={isSubmitting}
                        startIcon={isSubmitting ? <CircularProgress color="inherit" size="1em" /> : null}
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 3}}
                        color='secondary'
                    >
                        Login
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}