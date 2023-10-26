import React, { useState } from 'react'
import Layout from '../../components/layout'
import useProfile from '../../hooks/useProfile'
import { useForm } from "react-hook-form";
import { useEffect } from 'react';

export default function Profile() {

  const { register, setValue, handleSubmit, formState: { errors } } = useForm();

  const changeProfile = (data) => {
    setValue("firstName", data.firstName);
    setValue("lastName", data.lastName);
    setValue("email", data.email);
  }
  const { email, saveProfile } = useProfile(changeProfile);

  return <Layout>
    <div className='border w-fit p-5 rounded-lg shadow-sm bg-slate-50 mx-auto top-20 relative'>
      <form onSubmit={handleSubmit(saveProfile)}>
        <div className='grid grid-cols-1 gap-2'>
          <div>
            <label className='text-gray-700'>First Name:</label>
            <input type="text" placeholder="Type here" {...register("firstName", { required: true })}
              className="input w-full max-w-xs" />
            {errors.firstName && <p className='text-red-800'>First Name is Required</p>}

          </div>
          <div>
            <label className='text-gray-700'>Last Name:</label>
            <input type="text" placeholder="Type here"  {...register("lastName", { required: true })}
              className="input w-full max-w-xs" />
            {errors.lastName && <p className='text-red-800'>Last Name is Required</p>}
          </div>
          <div>
            <label className='text-gray-700'>Email:</label>
            <input type="text" placeholder="Type here"
              className="input w-full max-w-xs" value={email} disabled />
          </div>
          <div className='flex justify-end'>
            <button className="btn bg-green-700 hover:bg-green-800 border-green-800">Save</button>
          </div>
        </div>
      </form>
    </div>

  </Layout>
}
