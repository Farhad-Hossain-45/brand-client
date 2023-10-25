/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AddProduct from '../Pages/AddProduct/AddProduct';
import MyCart from '../Pages/MyCart/MyCart';
import Error from '../components/Error/Error';
import CardDetails from '../components/CardDetails/CardDetails';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import PrivetRoute from '../components/PrivetRoute/PrivetRoute';
import ProductUpdate from '../components/ProductUpdate/ProductUpdate';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addproduct',
                element: <PrivetRoute><AddProduct></AddProduct></PrivetRoute>,
                // loader: ()=>fetch('https://tenth-assignment-server-800sj5qtn.vercel.app/product')
            },
            {
                path: '/cart',
                element: <PrivetRoute><MyCart></MyCart></PrivetRoute>
            },
            {
                path: '/cards/:id',
                element: <CardDetails></CardDetails>,
                loader: ()=>fetch("https://tenth-assignment-server-800sj5qtn.vercel.app/brands"),
                
            },
            
            {
                path: '/productdetails/:id',
                element: <PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>,
                loader: ({params}) => fetch(`https://tenth-assignment-server-800sj5qtn.vercel.app/product/${params.id}`)
            },
            {
                path: '/updateProduct/:id',
                element: <PrivetRoute><ProductUpdate></ProductUpdate></PrivetRoute>,
                loader: ({params}) => fetch(`https://tenth-assignment-server-800sj5qtn.vercel.app/product/${params.id}`)
            }
        
        ]
    }
])

export default Router;