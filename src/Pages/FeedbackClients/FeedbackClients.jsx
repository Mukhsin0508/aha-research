// import React from 'react';
import TextBackroundM from '../../assets/img/TextBackroundM.png'
import TextBackround from '../../assets/img/TextBackround.png'
import O1 from '../../assets/img/O1.png'
import O2 from '../../assets/img/O2.png'
import O3 from '../../assets/img/O3.png'
import O4 from '../../assets/img/O4.png'
import O5 from '../../assets/img/O5.png'
import O6 from '../../assets/img/O6.png'

const FeedbackClients = () => {
  return (
    <div className=" w-full h-[650px] xl:h-[715px] relative flex  justify-center bg-blue200 ">

      <img className=' xl:hidden w-full absolute z-10 top-8 ' src={TextBackroundM} alt="" />
      <img className=' sm:hidden xl:flex w-full  max-w-[1560px] absolute z-10  ' src={TextBackround} alt="" />

<div className='   xl:w-[1200px]  xl:h-full  relative  '>


      <div className=" w-[330px]  h-full xl:w-full  relative   xl:flex xl:justify-center xl:pt-[130px] ">
        <div className=" w-full h-[193px] xl:w-[522px]  xl:h-[224px] xl:items-center flex flex-col items-start gap-[15px]">

          <h1 className="  text-[32px] leading-[44.8px] xl:text-center xl:text-[48px] xl:leading-[67px]  text-[#161616]  ">Отзывы наших клиентов</h1>
          <p className="  text-[16px]  leading-[22px] xl:text-center xl:text-lg xl:leading-[25px] xl:w-[480px] text-gray500  ">Мы гордимся тем, что помогаем бизнесу принимать обоснованные решения, находить ключевые инсайты и достигать успеха.</p>
        </div>

        <div className=' right-0 top-[325px]   w-[156px] h-[156px] xl:right-[350px] xl:top-[370px] flex  absolute items-center  justify-center rounded-full  bg-[#CAF0F84D]'>
          <div className='  w-[117px] h-[117px] flex  items-center  justify-center rounded-full  bg-[#90E0EF33]'>
            <img src={O2} className=' w-[78px] h-[78px] rounded-full bg-cover  object-cover ' alt="" />
          </div>
        </div>
      </div>

      <div className=' sm:hidden xl:flex   right-[105px] top-[120px] z-10 absolute  w-[127px] h-[127px] flex  items-center  justify-center rounded-full  '>
        <img src={O1} className=' w-[119px] h-[119px]  rounded-full bg-cover  object-cover ' alt="" />
      </div>

      <div className='   right-0 top-[200px] xl:right-[315px] xl:top-[15px] absolute  w-[117px] h-[117px] flex  items-center  justify-center rounded-full  '>
        <img src={O3} className=' w-[80px] h-[80px] xl:w-[102px] xl:h-[102px] rounded-full bg-cover  object-cover ' alt="" />
      </div>



      <div className=' left-1 top-[240px] xl:left-[227px] xl:top-[115px] absolute  w-[117px] h-[117px] flex  items-center  justify-center rounded-full  '>
        <img src={O4} className=' w-[102px] h-[102px] rounded-full bg-cover  object-cover ' alt="" />
      </div>

      <div className='  sm:hidden xl:flex  left-2 top-[320px]  absolute  w-[117px] h-[117px] flex  items-center  justify-center rounded-full  '>
        <img src={O5} className=' w-[102px] h-[102px] rounded-full bg-cover  object-cover ' alt="" />
      </div>


      <div className=' left-0 top-[430px] xl:left-[65px] xl:top-[5px] z-10 absolute  w-[117px] h-[117px] flex  items-center  justify-center rounded-full  '>
        <img src={O6} className=' w-[80px] h-[80px] rounded-full bg-cover  object-cover ' alt="" />
      </div>

      </div>


    </div>
  );
};

export default FeedbackClients;