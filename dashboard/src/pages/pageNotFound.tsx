import React from 'react'
import BlankLayout from '../layouts/BlankLayout'
import { Box, Typography } from '@mui/material'

function PageNotFound() {
  return (
    <BlankLayout>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography component="h1" variant='h5'>404 Error. Page not found</Typography>
      </Box>
    </BlankLayout>
  )
}

export default PageNotFound