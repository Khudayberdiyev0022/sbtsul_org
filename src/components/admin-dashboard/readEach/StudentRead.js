import React, { useState } from 'react'
import style from './Style.module.css'
import { connect } from 'react-redux'
import NotFound from '../main-parts/404';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';


function StudentRead(props) {
    const [language, setLanguage] = useState('UZB')
    if (!props.admin) {
        return (
            <NotFound />
        )
    }
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>Информация о студенты</h1>
                <div className={style.language}>
                    <h1 onClick={() => setLanguage('UZB')}>UZB</h1>
                    <h1 onClick={() => setLanguage('RUS')}>RUS</h1>
                    <h1 onClick={() => setLanguage('ENG')}>ENG</h1>
                </div>
                <div className={style.grantInformation}>
                    {
                        language === 'UZB' &&
                        <Fragment>
                            <h1>{props.information.nameUzb}</h1>
                            <p>{props.information.informationUzb}</p>
                            <p>{props.information.email}</p>
                            <p>{props.information.date}</p>
                        </Fragment>
                    }
                    {
                        language === 'ENG' &&
                        <Fragment>
                            <h1>{props.information.nameEng}</h1>
                            <p>{props.information.informationEng}</p>
                            <p>{props.information.email}</p>
                            <p>{props.information.date}</p>
                        </Fragment>
                    }
                    {
                        language === 'RUS' &&
                        <Fragment>
                            <h1>{props.information.nameRus}</h1>
                            <p>{props.information.informationRus}</p>
                            <p>{props.information.email}</p>
                            <p>{props.information.date}</p>
                        </Fragment>
                    }
                </div>
                <Link to='/admin'>Главная страница</Link>
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

export default connect(mapStateToProps, null)(StudentRead)
