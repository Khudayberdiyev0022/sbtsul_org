import React, { useState } from 'react'
import style from './NavbarMobile.module.css'
import { FiMenu } from 'react-icons/fi'
import { VscClose } from 'react-icons/vsc'
import logo from "../../assets/icons/logoFT.svg";
import { Link } from 'react-router-dom';


function NavbarMobile() {
    const [clicked, setClicked] = useState(false)


    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.mainPart}>
                    <Link onClick={() => setClicked(false)} to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    {
                        clicked ? <VscClose onClick={() => setClicked(false)} /> : <FiMenu onClick={() => setClicked(true)} />
                    }
                </div>
                <div className={clicked ? `${style.subPart} ${style.open}` : `${style.subPart} ${style.close}`}>
                    <div className={style.titleName}>
                        <div className={style.navbarLink}>
                            <Link onClick={() => setClicked(false)} datatext='Filial' to="/filial">
                                Filial <span></span>
                            </Link>
                        </div>
                        <div className={style.navbarLink}>
                            <Link onClick={() => setClicked(false)} datatext='Tuzilma' to="/tuzilma">
                                Tuzilma <span></span>
                            </Link>
                        </div>
                        <div className={style.navbarLink}>
                            <Link onClick={() => setClicked(false)} datatext='Faoliyat' to="/faoliyat">
                                Faoliyat <span></span>
                            </Link>
                        </div>
                        <div className={style.navbarLink}>
                            <Link onClick={() => setClicked(false)} datatext='Talabalar' to="/talabalar">
                                Talabalar <span></span>
                            </Link>
                        </div>
                        <div className={style.navbarLink}>
                            <Link onClick={() => setClicked(false)} datatext='Qabul' to="/qabul">
                                Qabul <span></span>
                            </Link>
                        </div>
                        <div className={style.navbarLink}>
                            <Link onClick={() => setClicked(false)} datatext='Biz haqimizda' to="/bizhaqimizda">
                                Biz haqimizda <span></span>
                            </Link>
                        </div>
                        <div className={style.navbarLink}>
                            <Link onClick={() => setClicked(false)} datatext='Aloqa' to="/aloqa">
                                Aloqa <span></span>
                            </Link>
                        </div>
                    </div>
                    <div className={style.languageBlock}>
                        <div className={style.languageBox}>
                            <Link onClick={() => setClicked(false)} to="/uzb">UZB</Link>
                        </div>
                        <div className={style.languageBox}>
                            <Link onClick={() => setClicked(false)} to="/rus">RUS</Link>
                        </div>
                        <div className={style.languageBox}>
                            <Link onClick={() => setClicked(false)} to="eng">ENG</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarMobile
