import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const PrimaryLayout = () => {
    return (
        <div className='h-screen bg-tertiary-100'>
            <Header />
            <Outlet />
        </div>
    )
}

export default PrimaryLayout