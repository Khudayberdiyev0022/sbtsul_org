import React, { Fragment, useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BiNews, BiMessageDots } from 'react-icons/bi'
import { BsBuilding } from 'react-icons/bs'
import { IoPeople } from 'react-icons/io5'
import style from './Sidebar.module.css'

import image from '../../../assets/images/logo.png'


function Sidebar({ clicked }) {
    const [sidebarOpen, setSidebarOpen] = useState(window.self.innerWidth > 800 ? true : false)
    useEffect(() => {
        const interval = setInterval(() => {
            if (window.self.innerWidth > 800) {
                setSidebarOpen(true)
            }
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    })


    return (
        <Fragment>
            <div className={sidebarOpen ? `${style.main} ${style.mainOpen}` : `${style.main} ${style.mainClose}`}  >
                <div className={style.container}>
                    <AiOutlineClose onClick={() => setSidebarOpen(false)} />
                    <div className={style.image} style={{ backgroundImage: `url(${image})` }}>
                        <h4
                            onClick={() => {
                                window.self.innerWidth < 800 && setSidebarOpen(false)
                                clicked('Main')
                            }}
                        >

                        </h4>
                    </div>
                    <div className={style.links}>
                        <div className={style.link}>
                            <BiNews />
                            <h4
                                onClick={() => {
                                    window.self.innerWidth < 800 && setSidebarOpen(false)
                                    clicked('News')
                                }}
                            >
                                News
                            </h4>
                        </div>
                        <div className={style.link}>
                            <BiMessageDots />
                            <h4
                                onClick={() => {
                                    window.self.innerWidth < 800 && setSidebarOpen(false)
                                    clicked('Message')
                                }}
                            >
                                Messages
                            </h4>
                        </div>
                        <div className={style.link}>
                            <IoPeople />
                            <h4
                                onClick={() => {
                                    window.self.innerWidth < 800 && setSidebarOpen(false)
                                    clicked('Students')
                                }}
                            >
                                Students
                            </h4>
                        </div>
                        <div className={style.link}>
                            <BsBuilding />
                            <h4
                                onClick={() => {
                                    window.self.innerWidth < 800 && setSidebarOpen(false)
                                    clicked('Grants')
                                }}
                            >
                                Grants
                            </h4>
                        </div>
                        <div className={style.link}>
                            <BsBuilding />
                            <h4
                                onClick={() => {
                                    window.self.innerWidth < 800 && setSidebarOpen(false)
                                    clicked('Images')
                                }}
                            >
                                Images
                            </h4>
                        </div>
                        <div className={style.link}>
                            <BsBuilding />
                            <h4
                                onClick={() => {
                                    window.self.innerWidth < 800 && setSidebarOpen(false)
                                    clicked('Vacancy')
                                }}
                            >
                                Vacancy
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className={!sidebarOpen ? `${style.visibleLink} ${style.visibleLinkOpen}` : `${style.visibleLink} ${style.visibleLinkClose}`}>
                <AiOutlineMenu onClick={() => setSidebarOpen(true)} />
            </div>
        </Fragment>
    )
}

export default Sidebar
