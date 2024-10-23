import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../pages/Home';
import WeddingsPage from '../pages/WeddingsPage';
import BaptismsPage from '../pages/BaptismsPage';
import Preporations from '../pages/PreporationsPage';


export const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                element: <Home />,
                path: "/"
            },
            {
                element:<WeddingsPage />,
                path:"/weddings"
            },
            {
                element:<BaptismsPage />,
                path:"/baptisms"
            },
            {
                element:<Preporations />,
                path:"/preporations"
            }
        ]
    }

])

