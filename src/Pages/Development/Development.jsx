// import React from 'react'
import DevImage from '../../assets/img/Development.jpg'
import Dev from '../../assets/img/Dev2.svg'
import Tochka from '../../assets/icons/Tocka.svg'
function Development() {
    return (
        <div id='' className=" w-full min-h-screen h-[1200px] xl:h-[1200px]   bg-blue200 flex  flex-col  items-center">

            {/* telefon va taxtlar qismi  */}
            <div className=' w-[329px] h-full xl:w-[1200px] relative'>
                <h1 className=' text-[32px] leading-[44px] font-sans font-normal absolute top-6 left-0 xl:tetx-[48px] xl:leading-[67px] xl:text-center xl:w-[350px] xl:font-medium  xl:left-1/2  xl:transform xl:-translate-x-1/2  z-50  xl:top-16 '> Решения для роста вашего бизнеса</h1>
                <p className=' text-[16px] leading-[19px]  font-mono text-[#9A9897] absolute top-32 left-0 xl:text-lg xl:leading-[21px] xl:w-[282px] z-50  xl:top-[340px] xl:left-[146px]'>Индивидуальные решения для каждой компании, основанные на глубоких исследованиях.</p>
                <img className=' absolute  w-[340px] min-w-[340px] top-40 left-[0px] min-h-[462px] xl:hidden' src={Dev} alt="" />
                <img className=' absolute  w-[1200px] h-[1200px] top-0  bg-contain sm:hidden xl:flex ' src={DevImage} alt="" />
                <h1 className=' text-[14px] leading-[16px] font-sans flex flex-row items-center gap-2 absolute top-[226px]  left-[130px] xl:text-lg xl:text-[#161616] xl:font-medium xl:left-[780px] xl:top-[285px]'> <img className=' w-5 h-5 xl:w-10 xl:h-10' src={Tochka} alt="" />Решения</h1>
                <h1 className=' text-[14px] leading-[16px] font-sans flex flex-row items-center gap-2 absolute top-[282px]  left-[110px] xl:text-lg xl:text-[#161616] xl:font-medium xl:left-[695px] xl:top-[365px]'> <img className=' w-5 h-5 xl:w-10 xl:h-10' src={Tochka} alt="" />Инсайты</h1>
                <h1 className=' text-[14px] leading-[16px] font-sans flex flex-row items-center gap-2 absolute top-[365px]  left-[86px] xl:text-lg xl:text-[#161616] xl:font-medium xl:left-[650px] xl:top-[490px]'> <img className=' w-5 h-5 xl:w-10 xl:h-10' src={Tochka} alt="" />Инсайты</h1>
            </div>

            {/*  statistika */}
            <div className=' w-[329px] xl:w-[1200px] h-full xl:h-[320px] xl:-mb-[30px] relative  bg-blue200   flex  flex-col items-start xl:flex-row   xl:justify-between   xl:items-start  -top-7 gap-0 xl:gap-[34px]  '>
                <div className=' flex flex-col  items-start   xl:w-[282px] gap-2 xl:border-r  xl:border-white xl:h-[173px] '> 
                    <h1 className=' text-[64px] leading-[76px] text-[#494949] font-medium  flex flex-col items-start  '>+50</h1>
                    <p className=' text-[18px] leading-[21px]   text-[#9A9897] w-[200px] '>Реализовано более 50 успешных проектов в разных сферах.</p>
                </div>
                <div className=' flex flex-col  items-start   xl:w-[282px] gap-2 xl:border-r  xl:border-white xl:h-[173px] '> 
                    <h1 className=' text-[64px] leading-[76px] text-[#494949] font-medium  flex flex-col items-start '>+100K</h1>
                    <p className=' text-[18px] leading-[21px]   text-[#9A9897] w-[250px] '>Опрошенных респондентов</p>
                </div>
                <div className=' flex flex-col  items-start   xl:w-[282px] gap-2 xl:border-r  xl:border-white xl:h-[173px] '> 
                    <h1 className=' text-[64px] leading-[76px] text-[#494949] font-medium  flex flex-col items-start '>15+</h1>
                    <p className=' text-[18px] leading-[21px]   text-[#9A9897] w-[250px] '>Клиентов в сферах FMCG, банковского дела, финтеха, общественного питания и девелопмента </p>
                </div>
                <div className=' flex flex-col  items-start   xl:w-[282px] gap-2  xl:h-[173px] '> 
                    <h1 className=' text-[64px] leading-[76px] text-[#494949] font-medium  flex flex-col items-start '>+4K</h1>
                    <p className=' text-[18px] leading-[21px]   text-[#9A9897] w-[250px] '>Опрошенных розничных точек по всему Узбекистану </p>
                </div>


            </div>
        </div>
    )
}

export default Development
