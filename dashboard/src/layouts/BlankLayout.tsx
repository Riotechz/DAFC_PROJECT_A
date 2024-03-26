import React, { PropsWithChildren } from 'react'
import Topbar from '../components/global/Topbar'
import { Box } from '@mui/material'

function BlankLayout({children}: PropsWithChildren) {
  return (
    <Box 
      height={"100%"}
      width={"100%"}
    >
      <main>
            <Topbar isAuth={false} />
            {children}
      </main>
    </Box>
  )
}

export default BlankLayout