import { Link } from 'react-router-dom';
import TopIcon from '../../assets/icons/IconTop.svg';
import Card from '../../assets/img/card1.jpg';
import Card2 from '../../assets/img/card2.jpg';
import Card3 from '../../assets/img/card3.jpg';
import Card4 from '../../assets/img/card4.jpg';

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


function Analysis() {

    return (
        <div id='services' className='w-full min-h-screen  bg-blue200  flex items-center'>
            {/* Card lar */}
            <div className="grid grid-cols-1 gap-10 xl:gap-6 w-[329px]  h-full xl:w-[1200px] xl:grid-cols-2  mx-auto  pb-28">
                {/* card1 */}
                <div 
                data-aos='fade-right'
                    style={{
                        backgroundImage: `url(${Card})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className="w-full h-[456px]  xl:h-[361px] xl:w-[690px] rounded-2xl flex  justify-center items-end py-2 xl:py-[16px] overflow-hidden"
                >

                    <div data-aos='fade-up' data-aos-delay='300' className=' flex flex-row items-center justify-between w-[314px] h-[127px] rounded-[12px]  bg-[#FCFCFCCC] p-2 xl:p-[18px] xl:w-[654px] xl:h-[118px]'>
                        <div className=' flex flex-col items-start gap-1 w-[216px] xl:w-[470px]  '>
                            <h1 className=' text-lg  leading-[25.2px] font-semibold  text-[#161616] xl:text-2xl xl:leading-[33px] line-clamp-1'>{services[0].title}</h1>
                            <h2 className=' text-[16px] leading-[19.2px]  text-[#494949]  xl:text-lg xl:leading-[21px] line-clamp-2'>{services[0].description}</h2>
                        </div>

                        <Link to={`/service/1`}><img className='w-[50px] h-[50px]  xl:w-[60px] xl:h-[60px] hover:scale-110 duration-200' src={TopIcon} alt="" /></Link>
                    </div>
                </div>
                {/* card2 */}
                <div
                    data-aos='fade-left'
                    style={{
                        backgroundImage: `url(${Card2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className="w-full h-[456px] xl:h-[361px] xl:w-[486px]  rounded-2xl flex  justify-center items-end py-2 xl:py-4 xl:ml-[100px]"
                >

                    <div data-aos='fade-up' data-aos-delay='300' className=' flex flex-row items-center justify-between w-[314px] h-[85px] xl:w-[450px] rounded-[12px]  bg-[#FCFCFCCC] p-2 xl:p-[18px] '>
                        <div className=' flex flex-col items-start gap-1 w-[216px] xl:w-[314px] '>
                            <h1 className=' text-lg leading-[25.2px] font-semibold  text-[#161616] xl:text-2xl xl:leading-[33px] line-clamp-1'>{services[1].title}</h1>
                            <h2 className=' text-[16px] leading-[19.2px]  text-[#494949] line-clamp-1'>{services[1].description}</h2>
                        </div>

                        <Link to={`/service/2`}><img className=' w-[50px] h-[50px]   xl:w-[60px] xl:h-[60px] hover:scale-110 duration-200' src={TopIcon} alt="" /></Link>
                    </div>
                </div>
                {/* card3 */}
                <div 
                data-aos='fade-right'
                    style={{
                        backgroundImage: `url(${Card3})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className="w-full h-[456px] xl:h-[361px] xl:w-[486px]  rounded-2xl flex  justify-center items-end py-2 xl:py-4"
                >

                    <div data-aos='fade-up' data-aos-delay='300' className=' flex flex-row items-center justify-between w-[314px] h-[85px] rounded-[12px]  xl:w-[450px]  bg-[#FCFCFCCC] p-2 xl:p-[18px]'>
                        <div className=' flex flex-col items-start gap-1 w-[216px] xl:w-[450px] '>
                            <h1 className=' text-lg leading-[25.2px] font-semibold  text-[#161616] xl:text-2xl xl:leading-[33px] line-clamp-1'>{services[2].title}</h1>
                            <h2 className=' text-[16px] leading-[19.2px]  text-[#494949] line-clamp-1'>{services[2].description}</h2>
                        </div>

                        <Link to={`/service/3`}><img className=' w-[50px] h-[50px]   xl:w-[60px] xl:h-[60px] hover:scale-110 duration-200' src={TopIcon} alt="" /></Link>
                    </div>
                </div>
                {/* card4 */}
                <div
                data-aos='fade-left'
                    style={{
                        backgroundImage: `url(${Card4})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className="w-full h-[456px] xl:h-[361px] xl:w-[690px] rounded-2xl flex  justify-center items-end py-2 xl:ml-[-102px] xl:py-4"
                >

                    <div data-aos='fade-up' data-aos-delay='300' className=' flex flex-row items-center justify-between w-[314px] h-[90px] rounded-[12px]  bg-[#FCFCFCCC] p-2 xl:p-[18px] xl:w-[654px] xl:h-[118px]'>
                        <div className=' flex flex-col items-start gap-1'>
                            <h1 className=' text-lg leading-[25.2px] font-semibold  text-[#161616] xl:text-2xl xl:leading-[33px] line-clamp-1'>{services[3].title}</h1>
                            <h2 className=' text-[16px] leading-[19.2px]  text-[#494949] line-clamp-2'>{services[3].description}</h2>
                        </div>

                        <Link to={`/service/4`}><img className=' w-[50px] h-[50px]   xl:w-[60px] xl:h-[60px] hover:scale-110 duration-200' src={TopIcon} alt="" /></Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Analysis;
