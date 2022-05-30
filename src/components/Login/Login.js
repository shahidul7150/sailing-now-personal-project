import React from 'react';
import landing from '../../images/landing.jpg';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="sm:grid grid-cols-1 grid lg:grid-cols-2">
      <div className=" lg:w-2/4 mx-auto mt-28 py-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full pb-12">
          <h2 className='text-xl pt-1'>Please Login </h2>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full "
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is Required',
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: 'Provide a valid Email',
                },
              })}
            />
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full "
              {...register('password', {
                required: {
                  value: true,
                  message: 'Password is Required',
                },
                minLength: {
                  value: 6,
                  message: 'Must bre 6 characters or longer',
                },
              })}
            />
            <input
                 className="btn border-0 text-[#293E60] bg-[#FADD75] w-full mt-3 "
              type="submit"
              value="Login"
            />
            <small>
              New to Tools User ?{' '}
              <Link to="/register" className="text-primary">
                Create New Account
              </Link>
            </small>
          </div>
        </form>
      </div>
      <div className="text-end">
        <img src={landing} alt="" />
      </div>
    </div>
  );
};

export default Login;
