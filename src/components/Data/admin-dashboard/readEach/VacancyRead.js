import React, { useState } from 'react'
import style from './Style.module.css'
import { connect } from 'react-redux'
import NotFound from '../main-parts/404';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';


function VacancyRead(props) {
    const [language, setLanguage] = useState('UZB')
    if (!props.admin) {
        // window.localStorage.removeItem('admin')
        return (
            <NotFound />
        )
    }
    console.log(props)

    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>Vakansiyalar  Bo`yicha ma`lumotlar</h1>
                <div className={style.language}>
                    <h1 onClick={() => setLanguage('UZB')}>UZB</h1>
                    <h1 onClick={() => setLanguage('RUS')}>RUS</h1>
                    <h1 onClick={() => setLanguage('ENG')}>ENG</h1>
                </div>
                <div className={style.grantInformation}>
                    {
                        language === 'UZB' &&
                        <Fragment>
                            <h1>{props.information.titleUzb}</h1>
                            <p>{props.information.subTitleUzb}</p>
                            <p>{props.information.paragraphUzb}</p>
                            <p>{props.information.subTitleUzb}</p>
                        </Fragment>
                    }
                    {
                        language === 'ENG' &&
                        <Fragment>
                            <h1>{props.information.titleEng}</h1>
                            <p>{props.information.subTitleEng}</p>
                            <p>{props.information.paragraphEng}</p>
                            <p>{props.information.subTitleEng}</p>
                        </Fragment>
                    }
                    {
                        language === 'RUS' &&
                        <Fragment>
                            <h1>{props.information.titleRus}</h1>
                            <p>{props.information.subTitleEng}</p>
                            <p>{props.information.paragraphRus}</p>
                            <p>{props.information.subTitleRus}</p>
                        </Fragment>
                    }
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

export default connect(mapStateToProps, null)(VacancyRead)
