import React, { useReducer } from 'react'
import style from './GrantAdd.module.css'
import { addProduct } from '../../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NotFound from '../main-parts/404'

const initialState = {
    titleUzb: '',
    titleRus: '',
    titleEng: '',
    pictureURL: '',
    clicked: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'TITLE_UZB':
            return {
                ...state, titleUzb: action.payload
            }
        case 'TITLE_RUS':
            return {
                ...state, titleRus: action.payload
            }
        case 'TITLE_ENG':
            return {
                ...state, titleEng: action.payload
            }
        case 'URL':
            return {
                ...state, pictureURL: action.payload
            }
        case 'CLEAR':
            return initialState
        case 'CLICKED':
            return {
                ...state, clicked: true
            }
        default:
            return state
    }
}




function ImageAdd(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    if (!props.admin) {
        return (
            <NotFound />
        )
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (state.title !== '' && state.paragraph !== '' && state.date !== '') {
            props.addProduct('images', state)
        }
        dispatch({ type: 'CLEAR' })
        dispatch({ type: 'CLICKED' })

    }
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>News Images</h1>
                <form
                    onSubmit={submitHandler}
                >
                    <div className={style.forms}>
                        <div className={style.block}>
                            <h2>Sarlavha</h2>
                            <input
                                required
                                value={state.titleUzb}
                                type="text"
                                onChange={e => dispatch({ type: 'TITLE_UZB', payload: e.target.value })}
                            />
                            <h2>Rasm manzili</h2>
                            <input
                                required
                                value={state.pictureURL}
                                type="text"
                                onChange={e => dispatch({ type: 'URL', payload: e.target.value })}
                                placeholder='https://www.picture.com'
                            />


                            {/* <button value='Enabled'>Submit</button> */}
                        </div>
                        <div className={style.block}>
                            <h2>Title</h2>
                            <input
                                required
                                value={state.titleEng}
                                type="text"
                                onChange={e => dispatch({ type: 'TITLE_ENG', payload: e.target.value })}
                            />
                            <h2>URL</h2>
                            <input
                                required
                                value={state.pictureURL}
                                type="text"
                                onChange={e => dispatch({ type: 'URL', payload: e.target.value })}
                                placeholder='https://www.picture.com'
                            />


                            {/* <button value='Enabled'>Submit</button> */}
                        </div>
                        <div className={style.block}>
                            <h2>Заголовок</h2>
                            <input
                                required
                                value={state.title}
                                type="text"
                                onChange={e => dispatch({ type: 'TITLE_RUS', payload: e.target.value })}
                            />
                            <h2>Адресс картинки</h2>
                            <input
                                required
                                value={state.pictureURL}
                                type="text"
                                onChange={e => dispatch({ type: 'URL', payload: e.target.value })}
                                placeholder='https://www.picture.com'
                            />


                        </div>

                    </div>
                    <button type="submit">Submit</button>
                </form>

            </div>
            {
                state.clicked && <div className={style.modal}>
                    <h1>Added Successfully</h1>
                    <button><Link to='/admin'>Back</Link></button>
                </div>
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        item: state.selected[0],
        admin: state.admin[0]
    }
}

export default connect(mapStateToProps, { addProduct })(ImageAdd)
