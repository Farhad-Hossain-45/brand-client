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
                element: <AddProduct></AddProduct>,
                loader: ()=>fetch('http://localhost:5000/product')
            },
            {
                path: '/cart',
                element: <MyCart></MyCart>
            },
            {
                path: '/cards/:id',
                element: <CardDetails></CardDetails>,
                loader: ()=>fetch("http://localhost:5000/brands"),
                
            },
            // {
            //     path: '/product/:id',
            //     element: <CardDetails></CardDetails>,
            //     loader: ()=>fetch('')
            // }
            {
                path: '/productdetails/:id',
                element: <PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            },
        
        
        ]
    }
])

export default Router;