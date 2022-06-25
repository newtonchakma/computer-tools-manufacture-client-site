import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import Loading from '../../SharePages/Loading';

const UpDateProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [profile, setProfie] = useState([])

  const email = user?.email;
  const url = `http://localhost:5000/profile?email=${email}`;
  useEffect(() => {
    const getMyItems = async () => {
      const { data } = await axios.get(url, {
      })
      setProfie(data[0])
    }
    getMyItems();
  }, [])


  if(loading){
    return <Loading></Loading>;
  }
  const handleUpdateProfile = e => {
    e.preventDefault();
    const profile = {
      email: user?.email,
      education: e.target.education.value,
      city: e.target.city.value,
      phone: e.target.phone.value,
      linkedin: e.target.linkedin.value,
    }
    console.log(profile);

    fetch('http://localhost:5000/profile', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(profile)
    })
      .then(res => res.json())
      .then(data => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your profile successfully updated!',
          showConfirmButton: false,
          timer: 1500
        })
      })
  }
  return (
    <>
     <div className='text-center'>
      <h2 className=" font-medium text-2xl font-bold  mb-4 text-orange-600 uppercase">update your profile</h2>
      </div>
    <div className='grid grid-cols-1 md:grid-cols-2  mt-5'>
       
      

      <div>
        <div className="card w-96 bg-base-100 shadow-xl pt-5">
          <div className="avatar flex justify-center">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.lorem.space/image/face?hash=3174"  alt=''/>
            </div>
          </div>
          <div className="card-body">
            <p>Email: {user?.email}</p>
            <p>Education: {profile?.education}</p>
            <p>City: {profile?.city}</p>
            <p>Phone: {profile?.phone}</p>
            <p>Linkedin Account: {profile?.linkedin}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Update your profile</h2>
            <form onSubmit={handleUpdateProfile}>
              <input className='input input-bordered w-full mb-1' type="text" name="education" id="" placeholder='Education' required />

              <input className='input input-bordered w-full mb-1' type="text" name="city" id="" placeholder='City' required />

              <input className='input input-bordered w-full mb-1' type="text" name="phone" id="" placeholder='Phone' required/>

              <input className='input input-bordered w-full mb-1' type="text" name="linkedin" id="" placeholder='Linkedin Account' required />

              <input className='input input-bordered btn w-64 rounded-full btn-warning mt-3 text-white font-bold' type="Submit" value='Update' required/>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UpDateProfile;