import React, { useState } from 'react'
import Sidebar from './Sidebar'
import News from '../admin-links/News'
import Grants from '../admin-links/Grants'
import Messages from '../admin-links/Messages'
import Students from '../admin-links/Students'
import style from './Main.module.css'
import MainPage from '../admin-links/MainPage'
import Image from '../admin-links/Image'
import Vacancy from '../admin-links/Vacancy'
import Admin from '../admin-links/Admin'
import { CurentAdmin } from '../../../actions'
import { connect } from 'react-redux'

function Main(props) {
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
            case 'Images':
                return (
                    <Image />
                )
            case 'Vacancy':
                return (
                    <Vacancy />
                )
            case 'Admin':
                return (
                    <Admin />
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
                    <h1>TOSHKENT DAVLAT YURIDIK UNIVERSITETINING IXTISOSLASHTIRILGAN FILIALI</h1>
                    <div className={style.logOut}>
                        <button onClick={() => window.location.reload()} type="button">Log Out</button>
                    </div>
                </div>
                {linkRender(nameOfLink)}
            </div>
        </div>
    )
}


export default connect(null, { CurentAdmin })(Main)
