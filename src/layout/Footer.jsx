function Footer() {
  return (
    <div className="  w-full h-[791px] xl:h-[470px]  pt-[60px] xl:pt-[90px] flex  flex-col items-center bg-blue -mt-[40px] ">

      <div className=" w-[328px] h-full flex flex-col items-start gap-[40px]  xl:w-[1200px] xl:flex-row xl:justify-between   ">
        <img src={'logo_white.svg'} className=' w-[126px] h-[41px]  xl:' alt="" />

        <div className=' w-full h-[526px] flex flex-col items-start gap-10 xl:flex-row xl:w-[495px] xl:h-[267px]  '>
          <div className=' w-full  flex flex-col items-start gap-[32px] '>
            <h1 className=' text-[24px] leading-[28px] font-medium text-[#FEFEFE]'>Услуги</h1>
            <h2 className=' text-lg leading-[21px]  text-[#FEFEFE]'>О компании</h2>
            <h2 className=' text-lg leading-[21px]  text-[#FEFEFE]'>Наши услуги </h2>
            <h2 className=' text-lg leading-[21px]  text-[#FEFEFE]'>Партнеры</h2>
            <h2 className=' text-lg leading-[21px]  text-[#FEFEFE]'>История</h2>
            <h2 className=' text-lg leading-[21px]  text-[#FEFEFE]'>Контакты</h2>
          </div>


          <div className=' w-full  flex flex-col items-start gap-[32px] xl:min-w-[255px] '>
            <h1 className=' text-[24px] leading-[28px] font-medium text-[#FEFEFE]'>Связаться с нами</h1>
            <h2 className=' text-lg leading-[21px]  text-[#FEFEFE]'>Номер: +998 97 007 71 39</h2>
            <h2 className=' text-lg leading-[21px]  text-[#FEFEFE]'>Email: info@aha-research.uz </h2>
            <h2 className=' text-lg leading-[21px]  text-[#FEFEFE]'>Адрес: Ташкент, Мирзо-Улугбекский район, проспект Мустакиллик, 59</h2>
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
