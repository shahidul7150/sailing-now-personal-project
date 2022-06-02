import React from 'react';
import landing from '../../images/landing.jpg';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let signInError;
  let from = location.state?.from?.pathname || '/';

  if (loading || gLoading) {
    return <Loading></Loading>;
  }
  if (error || gError) {
    signInError = (
      <small className="text-red-500">
        {error?.message || gError?.message}
      </small>
    );
  }
  if (user || gUser) {
    navigate(from, { replace: true });
  }
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="sm:grid grid-cols-1 grid lg:grid-cols-2">
      <div className=" lg:w-2/4 mx-auto mt-28 py-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full pb-12">
            <h2 className="text-xl pt-1">Please Login </h2>
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
              {errors.email?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === 'pattern' && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
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

            <label className="label">
              {errors.password?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === 'minLength' && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
            {signInError}
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
        <div className="w-28 mx-auto mt-2 text-center">
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-secondary btn-circle btn-outline "
          >
            <img width="40px" src="https://i.ibb.co/Qf57nvp/googl.png" alt="" />
          </button>
        </div>
      </div>
      <div className="text-end">
        <img src={landing} alt="" />
      </div>
    </div>
  );
};

export default Login;
