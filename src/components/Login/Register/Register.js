import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import landing from '../../../images/landing.jpg';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="sm:grid grid-cols-1 grid lg:grid-cols-2">
      <div className="lg:w-2/4 mx-auto mt-20 py-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full pb-12">
            <h2 className="text-xl pt-1">Please Registration </h2>
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <input
              type="email"
              placeholder="Your Name"
              className="input input-bordered w-full "
              {...register('name', {
                required: {
                  value: true,
                  message: 'Name is Required',
                },
              })}
            />
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
              value="Join Now"
            />
            <small>
              Already have an account ?{' '}
              <Link to="/login" className="text-primary">
                please login
              </Link>
            </small>
            
          </div>
        </form>
        <div className="w-28 mx-auto mt-2 text-center">
              <button class="btn btn-secondary btn-circle btn-outline ">
                <img
                  width="40px"
                  src="https://i.ibb.co/Qf57nvp/googl.png"
                  alt=""
                />
              </button>
            </div>
      </div>
      <div className="text-end">
        <img src={landing} alt="" />
      </div>
    </div>
  );
};

export default Register;
