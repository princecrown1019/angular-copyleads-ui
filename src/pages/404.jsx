import React from 'react'
import Image from 'next/image';

export default function Custom404() {
    return (
        <div className="flex flex-col items-center h-screen">
            <Image
                src="/404_Error.svg"
                width={500}
                height={500}
                alt="404 Error"
            />
            <a href="/" className='text-blue-500'>Go Back to Home</a>
        </div>
    )
}
