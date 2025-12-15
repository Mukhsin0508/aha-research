import {PiXBold} from "react-icons/pi";
import {CONTACTS} from "../config/contacts";

function NavigatorModal({isOpen, setIsOpen}) {
    const itemClass =
        "block hover:underline text-[32px] leading-[38px] xl:text-[64px] xl:leading-[76px]";

    const handleNavigate = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }

        setTimeout(() => setIsOpen(false), 200);
    };

    return (
        <div>
            {isOpen && (
                <div
                    className="fixed z-[990] inset-0 bg-black bg-opacity-50 transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div
                className={`z-[999] fixed top-0 right-0 flex flex-col xl:flex-row h-full w-full bg-blue text-white p-6 xl:p-0 shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {}
                <div
                    className="sm:hidden xl:flex w-full h-full bg-blue flex flex-col items-start py-10 px-20 justify-between">
                    <img src={"logo_white.svg"} className="w-[126px] h-[41px]" alt=""/>
                    <h1 className="text-lg leading-[21px] text-[#F7F7FF] mt-1">
                        {CONTACTS.copyright}
                    </h1>
                </div>

                {}
                <div
                    className="w-full h-full gap-[40px] flex flex-col xl:w-[948px] xl:min-w-[948px] xl:bg-[#4541F1] xl:px-[80px] xl:py-10">
                    <div className="w-full flex flex-row items-center gap-5 justify-end">
                        <h1 className="sm:hidden xl:flex text-[24px] leading-[28px] font-medium text-white w-full text-end">
                            Меню
                        </h1>

                        <a
                            href={CONTACTS.telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[189px] xl:min-w-[200px] h-[46px] bg-white text-black rounded-full px-[10px] py-2 text-sm leading-[16px] font-medium flex items-center justify-center"
                        >
                            Звонок + Консультация
                        </a>

                        <button
                            className="w-[46px] h-[46px] min-w-[46px] flex items-center justify-center rounded-full bg-[#ffffff75]"
                            onClick={() => setIsOpen(false)}
                        >
                            <PiXBold className="w-7 h-7"/>
                        </button>
                    </div>

                    <h1 className="xl:hidden text-[24px] leading-[28px] font-medium text-white w-full text-end">
                        Меню
                    </h1>

                    <ul className="w-full h-[286px] flex flex-col items-end xl:items-start gap-[24px]">
                        <li>
                            <button onClick={() => handleNavigate("about_company")} className={itemClass}>
                                О компании
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleNavigate("services")} className={itemClass}>
                                Наши услуги
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleNavigate("partners")} className={itemClass}>
                                Партнеры
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleNavigate("history")} className={itemClass}>
                                История
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleNavigate("contacts")} className={itemClass}>
                                Контакты
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavigatorModal;