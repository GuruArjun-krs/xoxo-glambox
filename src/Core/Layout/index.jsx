import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const PrimaryLayout = () => {
    return (
        <div className='h-screen bg-tertiary-100'>
            <Header />
            {/* <div className='h-[calc(100%-70px)] overflow-y-scroll'> */}
                <Outlet />
            {/* </div> */}
        </div>
    )
}

export default PrimaryLayout