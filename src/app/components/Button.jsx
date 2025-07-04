import React from 'react'

const Button = ({children, className=''}) => {
  return (
    <button className={`text-foreground/90 select-none lg:px-3 lg:py-1 xl:px-3 2xl:px-4 border duration-300 border-black 2xl:py-2 hover:!text-white hover:bg-black !text-black ${className}`}>
        {children}
    </button>
  )
}

export default Button
