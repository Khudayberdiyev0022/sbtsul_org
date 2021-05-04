import React from 'react'
import { Link } from 'react-router-dom'
import style from './GrantDelete.module.css'
import { deleteProduct } from '../../../actions'
import { connect } from 'react-redux'
import NotFound from '../main-parts/404'

function GrantDelete(props) {
    if (props.item === undefined) {
        window.localStorage.removeItem('admin')
        return (
            <NotFound />
        )
    }
    const back = () => {
        window.localStorage.setItem('admin', '12211221')
    }
    const del = () => {
        window.localStorage.setItem('admin', '12211221')
        props.deleteProduct('quotas', props.item.id)
    }
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>Do you want to delete?</h1>
                <div className={style.buttons}>
                    <Link to='/admin' onClick={back}>Back</Link>
                    <Link to='/admin' onClick={del}>Delete</Link>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        item: state.selected[0]
    }
}

export default connect(mapStateToProps, { deleteProduct })(GrantDelete)
