import React from 'react'
import Pic from "./photo.avif"
import ProjectCard from "./ProectCard.jsx"



const HomeProject = () => {
  return (
    <div>
<a
  href="#"
  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 mt-24"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
        Building a SaaS Product as a Web App developer
      </h3>

      <p className="mt-1 text-xs font-medium text-gray-600">By Manish Prajapati</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      <img
        alt=""
        src={Pic}
        className="size-16 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  {/* <div className="mt-4">
    <p className="text-pretty text-sm text-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
      maiores deleniti consectetur nobis et eaque.
    </p>
  </div> */}

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">Published</dt>
      <dd className="text-xs text-gray-500">30st June, 2024</dd>
    </div>

    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">Reading time</dt>
      <dd className="text-xs text-gray-500">3 minute</dd>
    </div>
  </dl>
</a>
<ProjectCard/>
    </div>
  )
}

export default HomeProject