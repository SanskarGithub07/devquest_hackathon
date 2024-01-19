import React from 'react'

export const DivComp = (props) => {
  return (
    <div className="lg:w-1/3 mb-8 lg:mb-0 flex flex-col gap-5">
          <h3 className="text-2xl font-semibold mb-4">{props.name}</h3> 
          <p className="text-gray-600">{props.first}</p>
          <p className="text-gray-600">{props.second}</p>
          <p className="text-gray-600">{props.third}</p>
          <p className="text-gray-600">{props.fourth}</p>
        </div>
  )
}

export default DivComp