import React from 'react'
import Button from '../Button/Button'
import { menu } from '../Header/Header'

function MobileMenu({isOpen = false}) {
  return (
		<div
			className={`p-10 text-white absolute top-10 left-0 right-0 text-center justify-around items-center bg-dark-violet opacity-85 min-h-[50vh] flex-col rounded-2xl z-0 ${isOpen? 'flex': 'hidden'}`}
		>
      {menu.map((el, index) => (
					<li key={index} className='list-none'>
						<a href='#'>{el}</a>
					</li>
				))}
			<div className='mt-4 flex flex-col justify-between h-20'>
        <Button sizeX={5} sizeY={1} isUnFill={true}>Login</Button>
			  <Button sizeX={6} sizeY={2} >Sign Up</Button>
      </div>
		</div>
	)
}

export default MobileMenu