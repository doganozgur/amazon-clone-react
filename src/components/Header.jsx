import Logo from '../assets/logo.png'
import { FaSearch, FaBars } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

export default function Header() {
  const count = useSelector((state) => state.basket.items)

  return (
    <header className="flex flex-col">
      {/* Top */}
      <div className="flex sm:items-center flex-col sm:flex-row py-2 px-4 sm:space-x-6 bg-amazonDarkBlue">
        {/* Left */}
        <Link to="/" className='hoverOutline'>
          <img src={Logo} alt="Logo" className='h-7' />
        </Link>
        {/* Center */}
        <div className='flex flex-grow sm:mx-3'>
          {/* Searchbar */}
          <input type="text" className='flex-auto h-10 rounded-tl-md rounded-bl-md p-3' />
          <button className='bg-amazonOrange flex items-center rounded-tr-md rounded-br-md px-3'>
            <FaSearch className='text-lg' />
          </button>
        </div>
        {/* Right */}
        <div className='flex items-center space-x-4'>
          {/* Sign In */}
          <Link to="/" className='flex flex-col text-white hoverOutline'>
            <span className='text-xs font-medium'>Hello, Sign in</span>
            <span className='text-sm font-bold'>Account & Lists</span>
          </Link>
          {/* Returns & Orders */}
          <Link to="/" className='flex flex-col text-white hoverOutline'>
            <span className='text-xs font-medium'>Returns</span>
            <span className='text-sm font-bold'>&amp; Orders</span>
          </Link>
          {/* Cart */}
          <Link to="/checkout" className='flex items-end text-white hoverOutline relative'>
            <span className='absolute top-0 left-3 bg-yellow-500 text-black rounded-full w-5 h-5 text-xs flex items-center justify-center'>{count.length}</span>
            <span className='text-xs font-medium'><BsCart3 className='text-3xl' /></span>
            <span className='text-sm font-bold'>Cart</span>
          </Link>
        </div>
      </div>
      {/* Bottom */}
      <div className='bg-amazonLightBlue py-1 px-3'>
        <ul className='flex items-center space-x-3 text-white text-sm'>
          <li className='hoverOutline'><Link className='flex items-center' to="/"><FaBars className='mr-1 text-lg' /> All</Link></li>
          <li className='hoverOutline'><Link to="/">Today's Deals</Link></li>
          <li className='hoverOutline'><Link to="/">Customer Service</Link></li>
          <li className='hoverOutline'><Link to="/">Registry</Link></li>
          <li className='hoverOutline'><Link to="/">Gift Cards</Link></li>
          <li className='hoverOutline'><Link to="/">Sell</Link></li>
        </ul>
      </div>
    </header>
  )
}
