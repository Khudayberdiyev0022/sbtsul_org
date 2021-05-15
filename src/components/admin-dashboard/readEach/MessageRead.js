import React from 'react'
import style from './Style.module.css'
import { connect } from 'react-redux'
import NotFound from '../main-parts/404';
import { Link } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { MdDateRange } from 'react-icons/md'
import { ImParagraphLeft } from 'react-icons/im'

function MessageRead(props) {
    console.log(props.information);

    if (!props.admin) {
        // window.localStorage.removeItem('admin')
        return (
            <NotFound />
        )
    }

    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>Admin Bo`yicha ma`lumotlar</h1>
                <div className={style.contentMessage}>
                    <h1>Main Informations</h1>
                    <div>
                        <BsPersonFill />
                        <h2>{props.information.name}</h2>
                    </div>
                    <div>
                        <AiOutlineMail />
                        <h2>{props.information.email}</h2>
                    </div>
                    <div>
                        <MdDateRange />
                        <h2>{props.information.date}</h2>
                    </div>
                    <div>
                        <ImParagraphLeft />
                        <p>{props.information.paragraph}</p>
                    </div>
                </div>
                <Link to='/admin'>Main Page</Link>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        information: state.read[0],
        admin: state.admin[0]
    }
}

export default connect(mapStateToProps, null)(MessageRead)
