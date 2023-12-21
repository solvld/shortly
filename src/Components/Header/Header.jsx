import { useState } from "react";
import logo from '../../assets/images/logo.svg'
import bars from '../../assets/images/bars-solid.svg'
import Button from '../Button/Button'
import MobileMenu from "../MobileMenu/MobileMenu";


export const menu = ['Fetuses','About','Components']

function Header() {
const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
		<header className='relative flex text-lg'>
			<img className=' w-fit' src={logo} alt='' />
			<nav className='hidden xl:flex items-center'>
				{menu.map((el, index) => (
					<li key={index} className='list-none ml-8 text-grayish-violet'>
						<a href='#'>{el}</a>
					</li>
				))}
			</nav>
			<div className='hidden ml-auto xl:flex space-x-2'>
				<Button sizeX={5} sizeY={1} isUnFill={true}>Login</Button>
				<Button sizeX={6} sizeY={2} >Sign Up</Button>
			</div>
      <div 
        className="flex xl:hidden ml-auto cursor-pointer z-30"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        <img className='w-6' src={bars} alt="" />
      </div>
      <MobileMenu isOpen={isMobileMenuOpen}/>
		</header>
	)
}

export default Header

