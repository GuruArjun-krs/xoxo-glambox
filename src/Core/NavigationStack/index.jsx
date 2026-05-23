import { lazy } from 'react';

const HomePage = lazy(() => import('../../Pages/Home'));

export const NavigationStack = [
    {
        name:'Home',
        path:'/',
        component:HomePage,
    }
]