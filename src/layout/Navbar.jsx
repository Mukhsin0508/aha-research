import Burger from '../assets/icons/menu-button.svg'
import NavigatorModal from '../Modal/NavigatorModal'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoSvg from '../assets/logo/logo.svg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className=' z-50 w-[97%]  h-[70px] xl:h-[110px] bg-blue200 rounded-t-[24px]  m-auto mt-2 xl:mt-4 flex  items-center justify-center'>

      <NavigatorModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <nav className=" z-50 w-[328px] h-[46px] xl:w-[1200px]    flex flex-row items-center  justify-between  ">
        {/* mobile */}
        <NavLink to={"/"}>
          <img className=' w-[126px]  h-[41.35px] ' src={LogoSvg} alt="" />
        </NavLink>
        {/*  laptop navigator */}
        <div className=' flex flex-row items-center gap-6 ml-[150px]  '>
          {/* navigator  */}
          <div className='  sm:hidden xl:flex w-[622px] h-[46px] rounded-full flex flex-row items-center justify-center gap-10 px-[14px] bg-white   '>
            <a className=' font-medium cursor-pointer text-sm leading-[16.8px]' href="#about_company"> О компании</a>
            <a className=' font-medium cursor-pointer text-sm leading-[16.8px]' href="#services"> Наши услуги</a>
            <a className=' font-medium cursor-pointer text-sm leading-[16.8px]' href="#partners"> Партнеры</a>
            <a className=' font-medium cursor-pointer text-sm leading-[16.8px]' href="#history"> История</a>
            <a className=' font-medium cursor-pointer text-sm leading-[16.8px]' href="#contacts"> Контакты</a>
          </div>
          {/* button */}
          <a href='https://t.me/aha_research' target='_blank' className='  cursor-pointer sm:hidden xl:flex w-[189px] h-[46px] rounded-full flex flex-row items-center justify-center gap-10 px-[14px] bg-black text-white hover:scale-105 active:scale-95 duration-200'>
            <h1 className=' font-medium text-sm leading-[16.8px]'> Звонок + Консультация</h1>
          </a>

        </div>
        <button onClick={() => setIsOpen(true)}
          className=' active:scale-90  bg-white w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300'><img src={Burger} alt="" /></button>
      </nav>
    </div>
  )
}

export default Navbar
