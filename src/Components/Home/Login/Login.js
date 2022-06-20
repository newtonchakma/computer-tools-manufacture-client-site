
import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      let signInError;
    if(gUser){
        console.log(gUser);
    }
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }
    if(loading || gLoading){
        return <button className=' btn-loading'>loading</button>
    }

    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }
  
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
             <div className="card-body">
               <h2 className="text-center ftext-2xl font-bold">login</h2>

               <form onSubmit={handleSubmit(onSubmit)}>


               <div class="form-control w-full max-w-xs">
                       <label class="label">
                       <span class="label-text">Email</span>
                    </label>
                   <input
                    type="email"
                     placeholder="Your email"
                      class="input input-bordered w-full max-w-xs"
                       {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                     })}/>
               <label className="label">
                      {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                     {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                </label>
                   
        </div>

               <div class="form-control w-full max-w-xs">
                       <label class="label">
                       <span class="label-text">password</span>
                    </label>
                   <input
                    type="password"
                     placeholder="Your password"
                      class="input input-bordered w-full max-w-xs"
                      {...register("password", {
                        required: {
                            value: true,
                            message: 'Password is Required'
                        },
                        minLength: {
                            value: 8,
                            message: 'Must be 8 characters or longer'
                        }
                    })}
                     />
                 <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                </label>
                   
        </div>
        {signInError}
        <input className='btn w-full max-w-xs text-white btn-warning' type="submit" value="Login" />
                 </form>

               <div className="divider">OR</div>
               <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline btn-warning"
                >Contunie with google</button>
      </div>
  </div>
</div> );

} 
export default Login;
