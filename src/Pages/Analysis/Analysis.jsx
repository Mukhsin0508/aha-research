// import React from 'react'
import { useNavigate } from 'react-router-dom';
import TopIcon from '../../assets/icons/IconTop.svg';
import Card from '../../assets/img/card1.jpg';
import Card2 from '../../assets/img/card2.jpg';
import Card3 from '../../assets/img/card3.jpg';
import Card4 from '../../assets/img/card4.jpg';

function Analysis() {
    const navigate = useNavigate()
    const DeteilNavigate = () => {
navigate("/analysdeteil")
    }
    return (
        <div className='w-full min-h-screen  bg-blue200  flex items-center'>
            {/* Card lar */}
            <div className="grid grid-cols-1 gap-10 xl:gap-6 w-[329px]  h-full xl:w-[1200px] xl:grid-cols-2  mx-auto  pb-28">
                {/* card1 */}
                <div
                    style={{
                        backgroundImage: `url(${Card})`, // URL formatda yozish kerak
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className="w-full h-[456px]  xl:h-[361px] xl:w-[690px] rounded-2xl flex  justify-center items-end py-2 xl:py-[16px]"
                >

                    <div className=' flex flex-row items-center justify-between w-[314px] h-[127px] rounded-[12px]  bg-[#FCFCFCCC] p-2 xl:p-[18px] xl:w-[654px] xl:h-[118px]'>
                        <div className=' flex flex-col items-start gap-1 w-[216px] xl:w-[470px]  '>
                            <h1 className=' text-lg  leading-[25.2px] font-semibold  text-[#161616] xl:text-2xl xl:leading-[33px]'>Количественные исследования</h1>
                            <h2 className=' text-[16px] leading-[19.2px]  text-[#494949]  xl:text-lg xl:leading-[21px]'>Опросы и анкетирование, Тестирование концепций продуктов, Анализ рынка</h2>
                        </div>

                        <button onClick={DeteilNavigate}><img className=' w-[50px] h-[50px]   xl:w-[60px] xl:h-[60px]' src={TopIcon} alt="" /></button>
                    </div>
                </div>
                {/* card2 */}
                <div
                    style={{
                        backgroundImage: `url(${Card2})`, // URL formatda yozish kerak
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className="w-full h-[456px] xl:h-[361px] xl:w-[486px]  rounded-2xl flex  justify-center items-end py-2 xl:py-4 xl:ml-[100px]"
                >

                    <div className=' flex flex-row items-center justify-between w-[314px] h-[85px] xl:w-[450px] rounded-[12px]  bg-[#FCFCFCCC] p-2 xl:p-[18px] '>
                        <div className=' flex flex-col items-start gap-1 w-[216px] xl:w-[314px] '>
                            <h1 className=' text-lg leading-[25.2px] font-semibold  text-[#161616] xl:text-2xl xl:leading-[33px]'>Исследование торговли</h1>
                            <h2 className=' text-[16px] leading-[19.2px]  text-[#494949] '>Аудит бренда, Анализ конкурентов</h2>
                        </div>

                        <button onClick={DeteilNavigate} ><img className=' w-[50px] h-[50px]   xl:w-[60px] xl:h-[60px]' src={TopIcon} alt="" /></button>
                    </div>
                </div>
                {/* card3 */}
                <div
                    style={{
                        backgroundImage: `url(${Card3})`, // URL formatda yozish kerak
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className="w-full h-[456px] xl:h-[361px] xl:w-[486px]  rounded-2xl flex  justify-center items-end py-2 xl:py-4"
                >

                    <div className=' flex flex-row items-center justify-between w-[314px] h-[85px] rounded-[12px]  xl:w-[450px]  bg-[#FCFCFCCC] p-2 xl:p-[18px]'>
                        <div className=' flex flex-col items-start gap-1 w-[216px] xl:w-[450px] '>
                            <h1 className=' text-lg leading-[25.2px] font-semibold  text-[#161616] xl:text-2xl xl:leading-[33px]'>Сегментация рынка</h1>
                            <h2 className=' text-[16px] leading-[19.2px]  text-[#494949] '>Классификация потребителей </h2>
                        </div>

                        <button onClick={DeteilNavigate} ><img className=' w-[50px] h-[50px]   xl:w-[60px] xl:h-[60px]' src={TopIcon} alt="" /></button>
                    </div>
                </div>
                {/* card4 */}
                <div
                    style={{
                        backgroundImage: `url(${Card4})`, // URL formatda yozish kerak
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className="w-full h-[456px] xl:h-[361px] xl:w-[690px] rounded-2xl flex  justify-center items-end py-2 xl:ml-[-102px] xl:py-4"
                >

                    <div className=' flex flex-row items-center justify-between w-[314px] h-[90px] rounded-[12px]  bg-[#FCFCFCCC] p-2 xl:p-[18px] xl:w-[654px] xl:h-[118px]'>
                        <div className=' flex flex-col items-start gap-1 w-[216px] '>
                            <h1 className=' text-lg leading-[25.2px] font-semibold  text-[#161616] xl:text-2xl xl:leading-[33px]'>Исследования</h1>
                            <h2 className=' text-[16px] leading-[19.2px]  text-[#494949] '>Фокус-группы, Глубинные интервью, Этнографические</h2>
                        </div>

                        <button onClick={DeteilNavigate}><img className=' w-[50px] h-[50px]   xl:w-[60px] xl:h-[60px]' src={TopIcon} alt="" /></button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Analysis;
