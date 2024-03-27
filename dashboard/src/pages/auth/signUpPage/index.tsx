import React from 'react'
import BlankLayout from '../../../layouts/BlankLayout'
import { Box, Container, Avatar } from '@mui/material'
import Typography from '@mui/material/Typography';

function SignUpPage() {
  return (
    <BlankLayout>
      <Box>
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
                        {/* <LockOutlinedIcon /> */}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    {/* <Box>
                        <RegisterForm onSubmit={handleRegisterSubmit} />
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box> */}
                </Box>
                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Container>
        </Box>
    </BlankLayout>
  )
}

export default SignUpPage