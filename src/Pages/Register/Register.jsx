/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Register = () => {

    const handelRegister = e => {
      e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password')
    console.log(name,photo,email,password)
    } 
    return (
        <div className=" bg-amber-100-100 mt-3">
        <h3 className='text-center text-4xl font-semibold my-2'>Please Register!!!</h3>
        <div className="hero-content">
          
          <div className="static card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <form onSubmit={handelRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
              </div>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="url" placeholder="photo URL" name='photo' className="input input-bordered" required />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  
                </label>
                {/* {
                  error && <p className="text-xl text-red-700">{error}</p>
                } */}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-pink-300 text-white">Register</button>
              </div>
            </form>
                <ToastContainer></ToastContainer>
            <p className="text-center mb-10">Do not Have An Account ?<Link  className="text-blue-500 underline" to="/login" >Login</Link></p>
          </div>
        </div>
       
      </div>
    );
};

export default Register;