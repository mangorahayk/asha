import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../pages/Home';
import DressesPage from '../pages/DressesPage';


export const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                element: <Home />,
                path: "/"
            },
            {
                element:<DressesPage />,
                path:"/dresses"
            }
        ]
    }

])

