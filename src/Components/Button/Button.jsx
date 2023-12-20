import React from 'react'

const roundBorderStyle = 'rounded-3xl'
const unFillStyle = 'text-grayish-violet bg-inherit'
const Button = ({
  children = '',
  roundBorder = true,
  isUnFill = false,
  isActive = false,
  sizeX = 6,
  sizeY = 2
}) => {
  return (
		<button
			className={`px-${sizeX} py-${sizeY} text-lg cursor-pointer ${isUnFill && unFillStyle} ${
				!isUnFill && 'text-white'
			} bg-cyan ${roundBorder && roundBorderStyle} hover:opacity-75`}
		>
			{children}
		</button>
	)
}

export default Button