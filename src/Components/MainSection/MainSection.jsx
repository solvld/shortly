import React from 'react'
import iWorking from '../../assets/images/illustration-working.svg'
import Button from '../Button/Button'

function MainSection() {
  return (
		<section className='w-full flex mt-6'>
			<div className='relative w-3/4 text-left mt-12'>
				<h1 className='text-7xl text-very-dark-violet whitespace-pre-line leading-tight font-bold'>{`More then just \n shorter links`}</h1>
        <p className="mb-8 text-grayish-violet text-xl whitespace-pre-line leading-normal">{`Build your brand's recognition and get detailed \n insight on how your links are performing.`}</p>
        <Button>Get Started</Button>
			</div>
			<img className='w-2/4' src={iWorking} alt='' />
		</section>
	)
}

export default MainSection