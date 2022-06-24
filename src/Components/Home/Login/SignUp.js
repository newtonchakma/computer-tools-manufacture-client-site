import React from 'react';
import { useCreateUserWithEmailAndPassword,useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../SharePages/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
    const [token]= useToken(user || gUser)
    const navigate = useNavigate();
      let signInError;
      if( loading || gLoading || updating){
        return <Loading></Loading>
    }
    if(token){
        navigate('/home')  
    }
    const onSubmit = async data => {
        console.log(data);
       await createUserWithEmailAndPassword(data.email,data.password)
        await updateProfile({ displayName: data.name });
        console.log('update done');
        
    }
   

    if(error || gError || updateError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }
    return (
        <div className='flex justify-center items-center min-h-screen py-5 my-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
             <div className="card-body">
               <h2 className="text-center ftext-2xl font-bold">SignUp</h2>

               <form onSubmit={handleSubmit(onSubmit)}>


               <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

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
                <input className='btn w-full max-w-xs text-white btn-warning' type="submit" value="SignUp" />
                 </form>
                 <p><small>Already have an account? <Link className='text-primary' to="/login">Please login</Link></small></p>
                 
               <div className="divider">OR</div>
               <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline btn-warning"
                >Contunie with google</button>
      </div>
  </div>
</div> 
    );
};

export default SignUp;