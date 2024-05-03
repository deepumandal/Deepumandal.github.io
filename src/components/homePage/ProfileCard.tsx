import React from 'react'

const ProfileCard: React.FC = () => {
    return (
        <div className="p-5 rounded-2xl my-5 h-[85%] bg-l-primary">
            {/* <----- Profile Image -----> */}
            <div className='aspect-square laptop:max-w-[230px]'>
                <img src="./ProfilePhoto.jpg" alt="" />
            </div>
            {/* <----- Profile Image -----> */}
            {/* <----- Profile Details -----> */}
            <div className=''>
                <h1 className=" text-2xl font-bold">Full Stack developer</h1>
            </div>
            {/* <----- Profile Details -----> */}
        </div>
    )
}

export default ProfileCard