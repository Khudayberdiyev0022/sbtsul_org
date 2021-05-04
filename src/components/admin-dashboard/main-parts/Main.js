import React, { useState } from 'react'
import Sidebar from './Sidebar'
import News from '../admin-links/News'
import Grants from '../admin-links/Grants'
import Messages from '../admin-links/Messages'
import Students from '../admin-links/Students'
import style from './Main.module.css'
import MainPage from '../admin-links/MainPage'

function Main() {
    const [nameOfLink, setNameOfLink] = useState('')





    const clicked = linkName => {
        setNameOfLink(linkName)
    }
    const linkRender = (nameOfLink) => {
        switch (nameOfLink) {
            case 'Main':
                return (
                    <MainPage />
                )
            case 'News':
                return (

                    <News />
                )
            case 'Message':
                return (

                    <Messages />
                )
            case 'Students':
                return (
                    <Students />
                )
            case 'Grants':
                return (
                    <Grants />
                )
            default:
                return (
                    <MainPage />
                )
        }
    }


    return (
        <div className={style.main}>
            <Sidebar clicked={clicked} />
            <div className={style.content}>
                <div className={style.searcher}>

                </div>
                {linkRender(nameOfLink)}
            </div>
        </div>
    )
}


export default Main
