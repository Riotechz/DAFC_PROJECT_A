import React, { PropsWithChildren } from 'react'
import Topbar from '../components/global/Topbar'

function MainLayout({children}: PropsWithChildren) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
        <main>
            <Topbar/>
            {children}
        </main>
    </div>
  )
}

export default MainLayout