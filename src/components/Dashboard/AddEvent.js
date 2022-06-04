import React from 'react';
import { useForm } from "react-hook-form";
import './Dashboard.css'

const AddEvent = () => {
    const { register, handleSubmit } = useForm();

    const imgStorageKey = 'd46803d80a057c0ce0603c3a2117c9b1';



    const onSubmit = async data => {
        console.log(data)

        const image = data.image[0];
        const formData = new FormData()
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body:formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const event = {
                        title: data.title,
                        subTitle: data.subTitle,
                        img:img
                    }
                    // send to database
                    fetch('http://localhost:5000/event', {
                        method: 'POST',
                        headers: {
                            'content-type':'application/json'
                        },
                        body:JSON.stringify(event)
                    })
                        .then(res => res.json())
                        .then(eventData => {
                        console.log('Event data',eventData);
                    })
                }
           
        })
    };
    return (
        <div className='w-3/5 mx-auto'>
     
            <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full pb-12">
            <h2 className="text-xl pt-1">Create an Event</h2>
            <label className="label">
              <span className="label-text">Event Heading</span>
            </label>
            <input
              type="text"
              placeholder="Event Heading"
              className="input input-bordered w-full "
              {...register('title', {
                required: {
                  value: true,
                  message: 'Must include event title',
                }
              })}
                    />
                    
         
            <label className="label">
              <span className="label-text">Sub-title</span>
            </label>
            <input
              type="text"
              placeholder="Sub-Title"
              className="input input-bordered w-full "
              {...register('subTitle', {
                required: {
                  value: true,
                 
                }
              })}
            />
            <label className="label">
              <span className="label-text">Event Image</span>
            </label>
            
                    <div className='border border-zinc-300 py-2 rounded-lg w-5/5 '>
                       
                        <input className='file-upload lg:ml-6' {...register("image")} type="file" />
                    </div>

            <input
              className="btn border-0 text-[#293E60] bg-[#FADD75] w-full mt-3 "
              type="submit"
              value="Create Event"
            />
           
          </div>
        </form>








{/* event end */}

        </div>
    );
};

export default AddEvent;