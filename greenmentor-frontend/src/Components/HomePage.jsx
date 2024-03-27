import React from 'react'


const HomePage = () => {
  return (
    <div className="flex items-center justify-center ">
    <div className="mt-16 text-center">
        {/* <h2 className="text-xl font-serif  text-custom-green md:text-4xl lg:text-5xl font-bold mb-16">Manage Your Tasks with Our Task Management App</h2> */}
        <img
            src="https://blog.planview.com/wp-content/uploads/2017/08/Tip_1_Juggling-too-many-task-Gif_Twitter.gif"
            alt="Your Website Image"
            className="mx-auto mb-16 shadow-md"
            style={{ maxWidth: '100%', height: 'auto' }}
        />
        <p className="text-lg font-serif md:text-xl lg:text-2xl">Welcome to our website, your go-to task management solution designed to elevate your productivity to new heights.
        Say goodbye to scattered to-do lists and hello to a streamlined workflow. Sign up today and experience the next level of task management efficiency!
        </p>
    </div>
</div>
  )
}

export default HomePage