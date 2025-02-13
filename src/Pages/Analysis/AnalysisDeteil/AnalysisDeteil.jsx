import { useEffect } from 'react';
import True from '../../../assets/img/True.png';
import DeteilPageImg from '../../../assets/img/DeteilPageImg.png';

function AnalysisDeteil() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='w-full h-auto relative flex flex-col items-center bg-blue200 pt-32 xl:pt-[150px] -mt-20 xl:-mt-32 pb-5'>
            <img src={DeteilPageImg} className='absolute left-0 top-0' alt="" />

            <div className="w-[328px] h-[731px] xl:w-[1200px] xl:h-[564px] flex flex-col items-start xl:items-end gap-[30px] relative">
                <div className="flex flex-col items-start gap-[15px] w-full h-[126px] xl:items-center">
                    <h1 className="text-[32px] leading-[44px] xl:text-[48px] xl:leading-[67px] text-center text-[#161616]">
                        Сегментация рынка
                    </h1>
                    <p className="xl:hidden text-[16px] leading-[22px] text-gray500">
                        Цель: Определение различных групп потребителей и их характеристик для таргетированной работы.
                    </p>
                </div>

                <p className="sm:hidden xl:flex text-[18px] leading-[25px] text-gray500 w-[384px] absolute left-36 top-28">
                    Цель: Определение различных групп потребителей и их характеристик для таргетированной работы.
                </p>

                <div className="w-full h-[575px] xl:w-[612px] xl:h-[447px] flex flex-col items-start gap-[28px]">
                    <h1 className="w-full h-[46px] xl:h-[53px] border-b border-blue px-2 py-3 xl:px-3 text-blue text-lg leading-[21px] font-medium xl:text-[24px] xl:leading-[28px]">
                        Услуги:
                    </h1>
                    <div className="w-full h-[501px] xl:h-[366px] flex flex-col items-start gap-[15px]">
                        <div className='flex flex-row items-start gap-3 py-3 px-2 xl:px-3'>
                            <img src={True} className='w-[32px] h-[32px]' alt="" />
                            <h1 className='text-[16px] leading-[19px] text-gray500 xl:text-lg xl:leading-[21px]'>
                                Классификация потребителей: Создание профилей клиентов по полу, возрасту, доходу, месту жительства и другим параметрам.
                                Пример использования: Таргетированная реклама.
                            </h1>
                        </div>
                        <div className='flex flex-row items-start gap-3 py-3 px-2'>
                            <img src={True} className='w-[32px] h-[32px]' alt="" />
                            <h1 className='text-[16px] leading-[19px] text-gray500 xl:text-lg xl:leading-[21px]'>
                                Поведенческая сегментация: Определение групп клиентов по их покупательскому поведению, частоте и объемам покупок.
                                Пример использования: Разработка лояльностных программ.
                            </h1>
                        </div>
                        <div className='flex flex-row items-start gap-3 py-3 px-2'>
                            <img src={True} className='w-[32px] h-[32px]' alt="" />
                            <h1 className='text-[16px] leading-[19px] text-gray500 xl:text-lg xl:leading-[21px]'>
                                Психографическая сегментация: Исследование ценностей, интересов и стиля жизни аудитории.
                                Пример использования: Определение месседжей рекламной кампании.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnalysisDeteil;
