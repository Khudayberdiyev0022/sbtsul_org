import React from 'react'
import style from './Style.module.css'
import { connect } from 'react-redux'
import NotFound from '../main-parts/404';
import { Link } from 'react-router-dom';


function ImageRead(props) {

    if (!props.admin) {
        // window.localStorage.removeItem('admin')
        return (
            <NotFound />
        )
    }
    console.log(props);

    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>Rasm Bo`yicha ma`lumotlar</h1>
                <div className={style.content}>
                    <h1>Main Informations</h1>
                    <div className={style.image} style={{ backgroundImage: `url(${props.information.pictureURL})` }}>

                    </div>
                    <h3>DATE: {props.information.date}</h3>
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

export default connect(mapStateToProps, null)(ImageRead)
