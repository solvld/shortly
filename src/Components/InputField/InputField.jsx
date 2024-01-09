import React from 'react'
import Button from '../Button/Button'

function InputField() {
  return (
		<div className=' bg-slate-200 p-4 h-screen'>
			<div className=' flex justify-center bg-very-dark-blue p-8'>
				<input
					className='p-2 rounded-lg mr-4'
					type='text'
					placeholder='Shorten a link here...'
				/>
				<Button roundBorder={false}>Shorten it!</Button>
			</div>
		</div>
	)
}

export default InputField