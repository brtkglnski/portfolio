import React, {useEffect, useState } from "react";
import lightModeIcon from "../assets/icons/lightModeIcon.svg";
import darkModeIcon from "../assets/icons/darkModeIcon.svg";
import i18n from 'i18next';
import { useTranslation, } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation(); 

    const [language, setLanguage] = useState(i18n.language);

    useEffect(() => {
        const handleLanguageChange = (language) => {
            setLanguage(language);
            localStorage.setItem("language", language);
        };

        i18n.changeLanguage(language).then(() => {
            localStorage.setItem("language", language);
        });

        i18n.on('languageChanged', handleLanguageChange);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [language]);

    const switchLanguage = () => {
        const newLang = language === "en" ? "pl" : "en";
        setLanguage(newLang);
    };

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            return savedTheme;
        }
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? "dark" : "light";
    });
    

    useEffect(()=>{
        const root = window.document.documentElement;
        if (theme==="dark"){
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);
    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <div className="fixed z-40 p-4 lg:p-8 w-full max-w-3xl h-16 flex flex-row items-center justify-between 
         font-semibold dark:text-white text-xs md:text-base transition-colors duration-300
        filter backdrop-blur-3xl border border-t-0 border-gray-300 dark:border-gray-700 rounded-b-lg
        animate-fade-down animate-once animate-duration-[600ms] animate-delay-[200ms]
        ">
            <div className="flex flex-row justify-between w-4/5 lg:w-3/5 scroll-smooth">
                <a href="#about" className="hover:cursor-pointer">{t('navbar.section1')}</a>
                <a href="#experience" className="hover:cursor-pointer">{t('navbar.section2')}</a>
                <a href="#skills" className="hover:cursor-pointer">{t('navbar.section3')}</a>
                <a href="#projects" className="hover:cursor-pointer">{t('navbar.section4')}</a>
            </div>
            <div className="flex flex-row items-center justify-end lg:justify-end w-1/5 lg:w-2/5">
            <button onClick={switchLanguage}>
                    {language === "en" ? "PL" : "EN"}
                </button>
                <button onClick={toggleTheme}>
                    <img className="ml-5 w-6 h-6 filter dark:invert" src={theme === "light" ? darkModeIcon : lightModeIcon} alt="toggle color" /></button>
            </div>
        </div>
    )
}
export default Navbar;