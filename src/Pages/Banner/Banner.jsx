//   import React from 'react'
// import Container from '../../assets/img/BannerImage/Container.png'
// import Lin from '../../assets/img/BannerImage/Line.png'
// import Contemplative from '../../assets/img/BannerImage/img-Contemplative Man in Suit.png'
// import Girl from '../../assets/img/BannerImage/img-girl.png'
// import Girls from '../../assets/img/BannerImage/img-girls.png'
// import Woman from '../../assets/img/BannerImage/img-Professional Woman.png'
// import Stylish from '../../assets/img/BannerImage/img-Man in Stylish Attire.png'
import ImageContainer from '../../assets/img/Image Container.svg'

function Banner() {
    return (
        <div id='#' className=" w-[97%]  bg-blue200 rounded-b-[24px] pt-[70px]">
            {/* bannet text & image */}
            <div className="  flex flex-col   items-center  justify-between w-[328px] h-[396px] xl:w-[1200px] xl:h-[700px] m-auto   ">
                {/*  banner text  */}
                <div className=" flex flex-col items-center gap-3 w-full h-[163px]">
                    <p className="  font-light text-sm xl:text-lg   leading-[16.8px] xl:leading-[21.6px] text-center w-full text-gray500">Инсайты, которые двигают бизнес вперёд</p>
                    <h1 className="    text-[48px] xl:text-[96px]  xl:leading-[134.4px] leading-[67.2px] text-center ">Команда Aha Research</h1>
                </div>
                {/* banner images */}

                <div className=" relative w-[328px] h-[193.3px]   xl:w-[1060px] xl:h-[700px]  ">

                    <img className='  -mt-[75px] xl:-mt-[63px] w-[328px] min-w-[328px] h-[315px] xl:w-[1060px] xl:h-[700px] ' src={ImageContainer} alt="" />
                    {/* <img className=' w-[138.8px] h-[168.2px] absolute bottom-0 left-[95px] z-[20]' src={Container} alt="" />
                    <img className=' w-[287.5px] h-[119.3px] absolute bottom-0 left-[8px] top-6 z-[0]' src={Lin} alt="" />
                    <img className=' w-[42.7px] h-[42.7px] absolute bottom-0 left-[258.3px] top-[50px] z-[10]' src={Contemplative} alt="" />
                    <img className=' w-[32.7px] h-[32.7px] absolute bottom-0 left-[255.8px] top-[132px] z-[10]' src={Girl} alt="" />
                    <img className=' w-[42.7px] h-[42.7px] absolute bottom-0 left-[295.22px] top-[40px] z-[9]' src={Girls} alt="" />
                    <img className=' w-[22.6px] h-[22.6px] absolute bottom-0 left-[61.2px] top-[18px] z-[10]' src={Woman} alt="" />
                    <img className=' w-[42.6px] h-[42.6px] absolute bottom-0 left-[0px] top-[85px] z-[10]' src={Stylish} alt="" />
                    <img className=' w-[49.9px] h-[49.9px] absolute bottom-0 left-[13.84px] top-[115px] z-[10]' src={Blazer} alt="" /> */}


                    <h1 className=' sm:hidden  xl:flex w-[277px] text-gray500  text-sm leading-[16.8px]  absolute -left-20  top-28 '>Aha Research раскрывает моменты «Ага!», которые вдохновляют на успех.</h1>
                    <h1 className=' sm:hidden xl:flex w-[277px] text-gray500  text-sm leading-[16.8px]  absolute  -right-[60px]   bottom-[225px] '>Мы превращаем данные в стратегические решения, помогая бизнесу расти и процветать.</h1>
                </div>
            </div>

        </div>
    )
}

export default Banner
