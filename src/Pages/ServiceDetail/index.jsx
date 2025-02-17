import { useParams } from "react-router-dom"

import True from '../../assets/img/True.png';
import DeteilPageImg from '../../assets/img/DeteilPageImg.png';
import { useEffect } from "react";

const services = [
    {
        id: 1,
        title: 'Количественные исследования (Quantitative Research)',
        description: `Понимайте своих клиентов и рынок с точностью цифр!
Узнайте, что думают потребители, какие тренды задают тон и какие стратегии принесут максимальный результат.`,
        items: [
            {
                text: `Определить вашу целевую аудиторию и их предпочтения`
            },
            {
                text: `Проанализировать рынок и конкурентов`
            },
            {
                text: `Измерить эффективность маркетинга и продаж`
            },{
                text: `Прогнозировать спрос и стратегические решения`
            },{
                text: ` Выявить социальные и поведенческие тенденции`
            }
        ]
    },
    {
        id: 2,
        title: 'Качественные исследования (Qualitative Research)',
        description: `Глубже, чем цифры – мы анализируем эмоции, мотивацию и поведение потребителей! Поймите, почему клиенты делают выбор в пользу вашего продукта или уходят к конкурентам.`,
        items: [
            {
                text: `Выявить истинные мотивы потребителей`
            },
            {
                text: `Оптимизировать восприятие бренда`
            },
            {
                text: `Улучшить пользовательский опыт (UX/UI)`
            },{
                text: `Разработать и протестировать новые продукты`
            },{
                text: `Понять барьеры потребления`
            }
        ]
    },
    {
        id: 3,
        title: 'Исследование торговли (Retail & Trade Research)',
        description: `Повысьте продажи, улучшите представленность бренда, управляйте ценами и акциями! Ваши товары могут продаваться лучше – главное, знать, что работает на рынке.`,
        items: [
            {
                text: `Объем рынка и доли конкурентов`
            },
            {
                text: `Дистрибуцию и представленность товара`
            },
            {
                text: `Ценовую стратегию и мониторинг акций`
            },{
                text: `Промоактивность и ее влияние на продажи`
            },{
                text: ` Ассортимент и мерчандайзинг в рознице`
            },{
                text: ` Эффективность точек продаж`
            }
        ]
    },
    {
        id: 4,
        title: 'Сегментация рынка (Market Segmentation)',
        description: ` Кто ваш идеальный клиент?
Разделите рынок на группы и найдите тех, кто готов покупать прямо сейчас!`,
        items: [
            {
                text: `Классификация потребителей – создание клиентских профилей для точного таргетинга`
            },
            {
                text: `Поведенческая сегментация – анализ покупательских привычек для роста продаж`
            },
            {
                text: `Психографическая сегментация – изучение ценностей и интересов для сильного бренда`
            }
        ]
    }
]


const ServiceDetail = () => {
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    const { id } = useParams()
    const {title, description, items} = services.find(item => item.id == id)

    return <div className='w-full h-auto relative flex flex-col items-center bg-blue200 pt-32 xl:pt-[150px] -mt-20 xl:-mt-32 pb-5'>
    <img src={DeteilPageImg} className='absolute left-0 top-0' alt="" />

    <div className="w-[328px] h-[731px] xl:w-[1200px]  flex flex-col items-start xl:items-end gap-[30px] relative">
        <div className="flex flex-col items-start gap-[15px] w-full h-[126px] xl:items-center">
            <h1 className="text-[32px] leading-[44px] xl:text-[48px] xl:leading-[67px] text-center text-[#161616]">
                {title}
            </h1>
            <p className="xl:hidden text-[16px] leading-[22px] text-gray500">
                Цель: {description}
            </p>
        </div>

        <p className="sm:hidden xl:flex text-[18px] leading-[25px] text-gray500 w-[384px] absolute left-36 top-28">
            Цель: {description}
        </p>

        <div className="w-full h-[575px] xl:w-[612px] xl:h-[447px] flex flex-col items-start gap-[28px]">
            <h1 className="w-full h-[46px] xl:h-[53px] border-b border-blue px-2 py-3 xl:px-3 text-blue text-lg leading-[21px] font-medium xl:text-[24px] xl:leading-[28px]">
                Услуги:
            </h1>
            <div className="w-full h-[501px] xl:h-[366px] flex flex-col items-start gap-[15px]">
                {items.map((item, index) => (
                    <div key={index} className='flex flex-row items-start gap-3 py-3 px-2 xl:px-3'>
                    <img src={True} className='w-[32px] h-[32px]' alt="" />
                    <h1 className='text-[16px] leading-[19px] text-gray500 xl:text-lg xl:leading-[21px]'>
                        {item.text}
                    </h1>
                </div>
                ))}
            </div>
        </div>
    </div>
</div>
}

export default ServiceDetail
