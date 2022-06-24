import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyReview = () => {
    const { register, handleSubmit,reset } = useForm();


    
    const onSubmit = data => {
        console.log(data);
        const image = data.image[0]
        var formData = new FormData();
        formData.append("image", image)

        axios.post("https://api.imgbb.com/1/upload?key=d7cb843332a0859336d56fe2ea07decf", formData)
            .then(res => {
                if (res.data.success) {
                    const image = res.data.data.display_url
                    const reviewDetails = {
                        name: data.name,
                        comment: data.comment,
                        rating: data.rating,
                        img:image
                    }
                    console.log('review', reviewDetails);
                    axios.post("http://localhost:5000/reviews",reviewDetails)
                    .then(res=>{
                        
                            toast.success("Thanks For Your Review")
                            reset()
                    
                     
                    })
                }

            })
    }
    return (
        <>
          <h2 className=" font-medium text-2xl font-bold text-orange-600 uppercase">please add a review</h2>
        <div className="hero  h-screen">
        
          
     
        <div className="hero-content orderCard" >
        
      
            <div className="card shadow-2xl bg-base-100" style={{ width: "100%" }} data-aos="zoom-out-up">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>

                            </label>
                            <input {...register("name")} type="text" placeholder="Your Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Comment</span>

                            </label>
                            <input {...register("comment")} type="text" placeholder="Comment" className="input input-bordered" required/>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>

                            </label>
                            <input {...register("rating")} type="number" placeholder="rating" className="input input-bordered" required/>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Upload Your Image</span>
                            </label>
                            <input {...register("image")} type="file" placeholder="Upload file" className="input input-bordered" required/>

                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn rounded-full btn-warning  text-white font-bold">Add Review</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
    );
};

export default MyReview;