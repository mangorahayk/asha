import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../pages/Home';
import WeddingsPage from '../pages/WeddingsPage';
import BaptismsPage from '../pages/BaptismsPage';
import Preporations from '../pages/PreporationsPage';
import AboutUs from '../pages/Home/AboutUs';
import AboutUsPage from '../pages/AboutUsPage';


export const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                element: <Home />,
                path: "/"
            },
            {
                element:<AboutUsPage />,
                path:"/aboutus"
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

