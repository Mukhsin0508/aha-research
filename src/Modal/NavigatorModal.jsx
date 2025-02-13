// import { useState } from "react";
import { PiXBold } from "react-icons/pi";
import LogoWhite from '../assets/logo/LogoWhite.png'

function NavigatorModal({ isOpen, setIsOpen }) {
    //   const [isOpen, setIsOpen] = useState(false);

    return (
        <div >

            {isOpen && (
                <div
                    className="fixed z-[990] inset-0 bg-black bg-opacity-50 transition-opacity"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            <div
                className={` z-[999] fixed top-0 right-0 flex flex-col  xl:flex-row h-full w-full bg-blue text-white p-6 xl:p-0 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >



                <div className=" sm:hidden xl:flex w-full h-full bg-blue flex flex-col items-start  py-10 px-20 justify-between">
                    <img src={LogoWhite} className=' w-[126px] h-[41px]  xl:' alt="" />
                    <h1 className='   text-lg leading-[21px]  text-[#F7F7FF]  mt-1'>© AHA RESEARCH 2025. All rights reserved Privacy Policy</h1>

                </div>
                <div className=" w-full h-full  gap-[40px] flex flex-col xl:w-[948px] xl:min-w-[948px] xl:bg-[#4541F1] xl:px-[80px] xl:py-10 ">

                    <div className=" w-full flex  flex-row items-center gap-5 justify-end">

                        <h1 className=" sm:hidden xl:flex text-[24px] leading-[28px] font-medium  text-white w-full text-end ">Navigation</h1>

                        <button className=" w-[189px] xl:min-w-[200px] h-[46px] bg-white text-black rounded-full px-[10px] py-2 text-sm leading-[16px] font-medium">Звонок + Консультация</button>

                        <button
                            className=" w-[46px] h-[46px] min-w-[46px] flex items-center justify-center rounded-full bg-[#ffffff75] "
                            onClick={() => setIsOpen(false)}
                        >
                            <PiXBold className="w-[42px] h-[42px]" />


                        </button>
                    </div>
                    <h1 className=" xl:hidden text-[24px] leading-[28px] font-medium  text-white w-full text-end ">Navigation</h1>
                    <ul className="  w-full  h-[286px] flex flex-col items-end  xl:items-start  gap-[24px] ">
                        <li><a href="#" className="block hover:underline text-[32px] leading-[38px]  xl:text-[64px] xl:leading-[76px] ">О компании</a></li>
                        <li><a href="#" className="block hover:underline text-[32px] leading-[38px] xl:text-[64px] xl:leading-[76px]">Наши услуги</a></li>
                        <li><a href="#" className="block hover:underline text-[32px] leading-[38px] xl:text-[64px] xl:leading-[76px]">Партнеры</a></li>
                        <li><a href="#" className="block hover:underline text-[32px] leading-[38px] xl:text-[64px] xl:leading-[76px]">История</a></li>
                        <li><a href="#" className="block hover:underline text-[32px] leading-[38px] xl:text-[64px] xl:leading-[76px]">Контакты</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default NavigatorModal
