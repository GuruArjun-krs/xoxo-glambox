import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import { NavigationStack } from '../Core/NavigationStack';
import LazyLoader from '../Shared/Components/LazyLoader';
import PrimaryLayout from '../Core/Layout';

const MainRoutes = () => {
    return (
        <Suspense fallback={<LazyLoader />}>
            <Routes>
                <Route element={<PrimaryLayout />}>
                    {NavigationStack.map((route) => (
                        <Route key={route.name} path={route.path} element={<route.component />} />
                    ))}
                </Route>
            </Routes>
        </Suspense>
    )
}

export default MainRoutes