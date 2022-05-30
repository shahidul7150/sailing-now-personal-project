import React from 'react';
import landing from '../../images/landing.jpg';
import { useForm } from 'react-hook-form';
const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return ( 
    <div className= 'sm:grid grid-cols-1 grid lg:grid-cols-2'>
      <div className='w-2/4 mx-auto mt-28 py-12'>
        <form onSubmit={handleSubmit(onSubmit)}>
          

        <div className="form-control w-full py-12">
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
             <input
              className="btn btn-primary w-full mt-3 "
              type="submit"
              value="Login"
            />
              
            </div>




      {/* <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" /> */}
    </form>
      </div>
      <div className='text-end'>
        <img src={landing} alt="" />
      </div>
    </div>
  );
};

export default Login;
