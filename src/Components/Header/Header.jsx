import logo from '../../assets/images/logo.svg'
import Button from '../Button/Button'

const menu = ['Fetuses','About','Components']

function Header() {
  return (
		<header className='flex text-lg'>
			<img src={logo} alt='' />
			<nav className='flex items-center'>
				{menu.map(el => (
					<li className='list-none ml-8 text-grayish-violet'>
						<a href='#'>{el}</a>
					</li>
				))}
			</nav>
			<div className='ml-auto flex space-x-2'>
				<Button isUnFill={true}>Login</Button>
				<Button>Sign Up</Button>
			</div>
		</header>
	)
}

export default Header

