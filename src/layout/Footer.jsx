import LogoWhite from '../assets/logo/logo_white.svg'

function Footer() {
  return (
    <div id='contacts' className="  w-full h-[791px] xl:h-[470px]  pt-[60px] xl:pt-[90px] flex  flex-col items-center bg-blue -mt-[40px] ">

      <div className=" w-[328px] h-full flex flex-col items-start gap-[40px]  xl:w-[1200px] xl:flex-row xl:justify-between   ">
        <img src={LogoWhite} className=' w-[126px] h-[41px]  xl:' alt="" />

        <div className=' w-full h-[526px] flex flex-col items-start gap-10 xl:flex-row xl:w-[495px] xl:h-[267px]  '>
          <div className=' w-full  flex flex-col items-start gap-[32px] '>
            <h1 className=' text-[24px] leading-[28px] font-medium text-[#FEFEFE]'>Услуги</h1>
            <a className=' text-lg leading-[21px]  text-[#FEFEFE]' href="#about_company">О компании</a>
            <a className=' text-lg leading-[21px]  text-[#FEFEFE]' href="#services">Наши услуги </a>
            <a className=' text-lg leading-[21px]  text-[#FEFEFE]' href="#partners">Партнеры</a>
            <a className=' text-lg leading-[21px]  text-[#FEFEFE]' href="#history">История</a>
            <a className=' text-lg leading-[21px]  text-[#FEFEFE]' href="#contacts">Контакты</a>
          </div>


          <div className=' w-full  flex flex-col items-start gap-[32px] xl:min-w-[255px] '>
            <h1 className=' text-[24px] leading-[28px] font-medium text-[#FEFEFE]'>Связаться с нами</h1>
            <h2 className=' text-lg leading-[21px]  text-[#FEFEFE]'>Номер: +998 97 007 71 39</h2>
            <h2 className=' text-lg leading-[21px]  text-[#FEFEFE]'>Email: info@aha-research.uz </h2>
            <h2 className=' text-lg leading-[21px]  text-[#FEFEFE]'>Адрес: Ташкент, Мирзо-Улугбекский район, проспект Алпомиш, 38</h2>
          </div>

        </div>

        <h1 className=' xl:hidden  text-lg leading-[21px]  text-[#F7F7FF]  mt-1'>© AHA RESEARCH 2025. All rights reserved Privacy Policy</h1>
      </div>
      <div className= ' sm:hidden xl:block w-[1200px] h-[80px] '>
        <h1 className='   text-lg leading-[21px]  text-[#F7F7FF]  mt-1'>© AHA RESEARCH 2025. All rights reserved Privacy Policy</h1>
      </div>

    </div>
  )
}

export default Footer
