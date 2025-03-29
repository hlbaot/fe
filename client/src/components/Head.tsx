import React, { useState, useEffect } from "react";
import "../assets/styles/Head.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

type Language = "ENG" | "VIE";

const Head: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isLangOpen, setIsLangOpen] = useState<boolean>(false);
    const [selectedLang, setSelectedLang] = useState<Language>("ENG");
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    useEffect(() => {
        AOS.init({ duration: 1000 });

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const handleLanguageSelect = (lang: Language) => {
        setSelectedLang(lang);
        setIsLangOpen(false);
    };

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsMenuOpen(false);
    };

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const toggleLanguage = () => setIsLangOpen((prev) => !prev);

    return (
        <motion.div
            className="head bg-black bg-opacity-50"
            data-aos="fade-down"
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : "-100%" }}
            transition={{ duration: 0.15 }}
        >
            <div className="logo lg:block hidden">
                <h1 className="font-script text-4xl cursor-pointer" onClick={() => handleScroll("home")}>
                    Booking Photo
                </h1>
            </div>
            <div className="nav_bar">
                <FontAwesomeIcon
                    icon={faBars}
                    className="text-2xl text-white cursor-pointer md:hidden"
                    onClick={toggleMenu}
                />
                <ul className={`nav_list ${isMenuOpen ? "mobile-open" : ""}`}>
                    <li onClick={() => handleScroll("home")}>Home</li>
                    <li onClick={() => handleScroll("explore")}>Explore</li>
                    <li onClick={() => handleScroll("service")}>Service</li>
                    <li onClick={() => handleScroll("reviews")}>Your Reviews</li>
                    <li onClick={() => handleScroll("contact")}>Contact</li>
                </ul>
            </div>
            <div className="flex items-center gap-[1rem]">
                <div className="relative">
                    <FontAwesomeIcon
                        icon={faGlobe}
                        className="text-2xl text-white mr-2 cursor-pointer"
                        onClick={toggleLanguage}
                    />
                    {isLangOpen && (
                        <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2 w-[100px] z-10">
                            <div
                                className={`flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer ${
                                    selectedLang === "ENG" ? "font-bold bg-gray-100" : ""
                                }`}
                                onClick={() => handleLanguageSelect("ENG")}
                            >
                                <img
                                    src="https://flagcdn.com/w20/gb.png"
                                    alt="UK flag"
                                    className="w-7 h-5 mr-2"
                                />
                                <span className="text-black">ENG</span>
                            </div>
                            <div
                                className={`flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer ${
                                    selectedLang === "VIE" ? "font-bold bg-gray-100" : ""
                                }`}
                                onClick={() => handleLanguageSelect("VIE")}
                            >
                                <img
                                    src="https://flagcdn.com/w20/vn.png"
                                    alt="Vietnam flag"
                                    className="w-7 h-5 mr-2"
                                />
                                <span className="text-black">VIE</span>
                            </div>
                        </div>
                    )}
                </div>
                <button onClick={() => handleScroll("service")} className="btn text-white">
                    Book Now !
                </button>
            </div>
        </motion.div>
    );
};

export default Head;
