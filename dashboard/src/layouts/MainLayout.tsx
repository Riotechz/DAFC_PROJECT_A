import React, { PropsWithChildren } from 'react'
import Topbar from '../components/global/Topbar'
import { SidebarProvider } from '../components/global/sidebar/Sidebar'
import { Box } from '@mui/material'

function MainLayout({children}: PropsWithChildren) {
  return (
    <SidebarProvider>
    <Box 
      height={"100%"}
      width={"100%"}
    >
      <main>
            <Topbar isAuth/>
            {children}
      </main>
    </Box>
    </SidebarProvider>
  )
}

export default MainLayout