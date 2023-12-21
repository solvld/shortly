import React from 'react'
import iWorking from '../../assets/images/illustration-working.svg'
import Button from '../Button/Button'

function MainSection() {
  return (
		<section className='w-full flex-col-reverse xl:flex-row flex mt-6'>
			<div className='flex-col text-center mt-12 xl:w-3/4 xl:text-left'>
				<h1 className='text-3xl text-very-dark-violet xl:whitespace-pre-line xl:text-left xl:text-7xl xl:leading-tight font-bold'>{`More then just \n shorter links`}</h1>
				<p className='mt-2 mb-8 text-sm text-grayish-violet xl:whitespace-pre-line leading-normal xl:text-lg xl:text-left'>{`Build your brand's recognition and get detailed \n insight on how your links are performing.`}</p>
				<Button>Get Started</Button>
			</div>
			<img className='w-full xl:w-2/4' src={iWorking} alt='' />
		</section>
	)
}

export default MainSection