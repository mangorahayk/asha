import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../pages/Home';
import WeddingsPage from '../pages/WeddingsPage';


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
            }
        ]
    }

])

