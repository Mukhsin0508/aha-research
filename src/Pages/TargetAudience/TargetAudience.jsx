// import React from 'react'
import Linsm from '../../assets/img/linesm.png'
import Lins from '../../assets/img/lines.png'
import BackrounImgYarim from '../../assets/img/BackrounImgYarim.png'
import T1 from '../../assets/icons/T1.svg'
import T2 from '../../assets/icons/T2.svg'
import T3 from '../../assets/icons/T3.svg'
import T4 from '../../assets/icons/T4.svg'
function TargetAudience() {
    return (
        <div className=" w-full  h-auto flex   flex-col items-center bg-blue200 rounded-b-[40px] pb-24 relative ">
             
            <img className=' w-[620px] h-[940px] min-w-[566px] min-h-[892px] left-0 -top-52 absolute   sm:hidden xl:flex ' src={BackrounImgYarim} alt="" />
            <div className=" w-[329px]  h-[785px] xl:w-[1200px] xl:h-[800px] relative flex flex-col      gap-3 ">
               
               
                <img className=' xl:hidden w-[329px] max-w-[329px] h-[620px]  top-[166px] left-0  absolute   ' src={Linsm} alt="" />
                <img className=' sm:hidden xl:flex w-[451px] max-w-[451px] h-[620px]  top-[166px] left-0  absolute  xl:left-[550px]  ' src={Lins} alt="" />

                <h1 className=" text-[32px] leading-[44px]  text-[#161616] text-start xl:text-[48px] xl:leading-[67px] xl:text-center  ">Целевая аудитория</h1>
                <p className=" text-[16px] leading-[22px] text-[#494949]  text-start   xl:leading-[25px]  xl:w-[334px] xl:absolute xl:left-3 xl:top-[270px]">Aha Research работает с компаниями, которые хотят лучше понять свои рынки, клиентов и конкурентов.</p>

                <div className=' flex flex-col  w-[329px] h-[560px] gap-[43px]   mt-[52px] relative z-[1] xl:left-[550px] xl:w-[650px]  xl:pt-16  xl:h-[600px]'>

                    <div className=' flex flex-row items-center  gap-3 w-[327px] h-[105px] rounded-[12px]  ml-[1px] bg-[#F7F7FF] py-2  px-3 xl:w-[592px]  xl:ml-[3px] xl:h-[122px] xl:rounded-[32px] xl:py-[18px] xl:px-[30px] xl:gap-[30px]'>
                        <button><img className=' w-[37px] h-[33px] xl:w-[64px]  xl:h-[56px] ' src={T1} alt="" /></button>
                        <div className=' flex flex-col items-start gap-2 w-[222px] xl:w-[416px] xl:h-[84px]   '>
                            <h1 className=' text-lg  leading-[25.2px] font-semibold  text-blue  xl:text-lg xl:font-semibold '>Локальный бизнес</h1>
                            <h2 className=' text-[12px] leading-[14.2px]  text-[#494949]  font-medium xl:text-sm xl:leading-[17px]   '>Компании из Узбекистана, желающие оптимизировать ассортимент, повысить узнаваемость бренда или улучшить клиентский опыт.</h2>
                        </div>

                    </div>

                    <div className=' flex flex-row items-center  gap-3 w-[273px] h-[130px] rounded-[12px]  ml-[55px] bg-[#F7F7FF] py-2  px-3 xl:w-[496px]  xl:ml-[155px] xl:h-[122px] xl:rounded-[32px] xl:py-[18px] xl:px-[30px] xl:gap-[30px]'>
                        <button><img className=' w-[50px] h-[50px]  xl:w-[86px] xl:h-[86px] ' src={T2} alt="" /></button>
                        <div className=' flex flex-col items-start gap-2 w-[195px]  h-[114px]  xl:w-[416px] xl:h-[84px]  '>
                            <h1 className=' text-lg  leading-[25.2px] font-semibold  text-blue  xl:text-lg xl:font-semibold '>Средний и крупный бизнес</h1>
                            <h2 className=' text-[12px] leading-[14.2px]  text-[#494949]  font-medium xl:text-sm xl:leading-[17px]  '>Организации, которые планируют расширяться и хотят обоснованно оценить рынки и конкуренцию.</h2>
                        </div>

                    </div>


                    <div className=' flex flex-row items-center  gap-3 w-[327px] h-[91px] rounded-[12px]  ml-[1px] bg-[#F7F7FF] py-2  px-3 xl:w-[479px]  xl:h-[120px] xl:ml-[55px] xl:rounded-[32px] xl:py-[18px] xl:px-[30px] xl:gap-[30px]'>
                        <button><img className=' w-[50px] h-[50px]  xl:w-[86px] xl:h-[86px]' src={T3} alt="" /></button>
                        <div className=' flex flex-col items-start gap-2 w-[248px] xl:w-[416px] xl:h-[84px]  '>
                            <h1 className=' text-lg  leading-[25.2px] font-semibold  text-blue xl:text-lg xl:font-semibold  '>Международные компании</h1>
                            <h2 className=' text-[12px] leading-[14.2px]  text-[#494949]  font-medium w-[200px] xl:w-auto  xl:text-sm xl:leading-[17px] '>Бренды, заходящие на рынок Узбекистана и нуждающиеся в адаптации к локальной аудитории.</h2>
                        </div>

                    </div>


                    <div className=' flex flex-row items-center  gap-3 w-[267px] h-[105px] rounded-[12px]  ml-[55px] bg-[#F7F7FF] py-2  px-3 xl:w-[534px] xl:ml-[110px]  xl:h-[122px] xl:rounded-[32px] xl:py-[18px] xl:px-[30px] xl:gap-[30px]'>
                        <button><img className=' w-[50px] h-[50px] xl:w-[86px] xl:h-[86px] ' src={T4} alt="" /></button>
                        <div className=' flex flex-col items-start gap-2 w-[189px]  h-[89px] xl:w-[416px] xl:h-[84px] '>
                            <h1 className=' text-lg  leading-[25.2px] font-semibold  text-blue  xl:text-lg xl:font-semibold'>Стартапы</h1>
                            <h2 className=' text-[12px] leading-[14.2px]  text-[#494949]  font-medium xl:text-sm xl:leading-[17px] '>Молодые компании, которым нужно изучить рыночные ниши, протестировать идеи или стратегию.</h2>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default TargetAudience
