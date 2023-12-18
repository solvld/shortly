import React from 'react'

const roundBorderStyle = 'rounded-2xl'
const unFillStyle = 'text-grayish-violet bg-inherit'
const Button = ({
  children = '',
  roundBorder = true,
  isUnFill = false,
  isActive = false
}) => {
  return (
		<div
			className={`px-5 py-1 cursor-pointer ${isUnFill && unFillStyle} ${!isUnFill && 'text-white'} bg-cyan rounded-lg ${
				roundBorder && roundBorderStyle
			}`}
		>
			{children}
		</div>
	)
}

export default Button