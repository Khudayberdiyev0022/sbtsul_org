import React, { useEffect, useReducer } from 'react'
import { editProduct } from '../../../actions'
import { connect } from 'react-redux'
import style from './GrantEdit.module.css'
import { Link } from 'react-router-dom'
import NotFound from '../main-parts/404'

// const initialState = {
//     title: '',
//     paragraph: '',
//     date: '',
//     pictureURL: '',
//     clicked: false
// }
// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'TITLE':
//             return {
//                 ...state, title: action.payload
//             }
//         case 'PARAGRAPH':
//             return {
//                 ...state, paragraph: action.payload
//             }
//         case 'DATE':
//             return {
//                 ...state, date: action.payload
//             }
//         case 'URL':
//             return {
//                 ...state, pictureURL: action.payload
//             }
//         case 'CLEAR':
//             return initialState
//         case 'CLICKED':
//             return {
//                 ...state, clicked: true
//             }
//         default:
//             return state
//     }
// }
const initialState = {
    titleUzb: '',
    titleRus: '',
    titleEng: '',
    paragraphUzb: '',
    paragraphRus: '',
    paragraphEng: '',
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
        case 'PARAGRAPH_UZB':
            return {
                ...state, paragraphUzb: action.payload
            }
        case 'PARAGRAPH_RUS':
            return {
                ...state, paragraphRus: action.payload
            }
        case 'PARAGRAPH_ENG':
            return {
                ...state, paragraphEng: action.payload
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


function NewsEdit(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addLocal = () => {
        window.localStorage.setItem('admin', '12211221')
    }
    useEffect(() => {
        dispatch({ type: 'TITLE_UZB', payload: props.item?.titleUzb })
        dispatch({ type: 'TITLE_RUS', payload: props.item?.titleRus })
        dispatch({ type: 'TITLE_ENG', payload: props.item?.titleEng })
        dispatch({ type: 'PARAGRAPH_UZB', payload: props.item?.paragraphUzb })
        dispatch({ type: 'PARAGRAPH_RUS', payload: props.item?.paragraphRus })
        dispatch({ type: 'PARAGRAPH_ENG', payload: props.item?.paragraphEng })
        dispatch({ type: 'URL', payload: props.item?.pictureURL })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (props.item === undefined) {
        window.localStorage.removeItem('admin')
        return (
            <NotFound />
        )
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (state.title !== '' && state.numberOfQuotas !== '' && state.date !== '') {
            const item = {
                titleUzb: state.titleUzb,
                titleRus: state.titleRus,
                titleEng: state.titleEng,
                paragraphUzb: state.paragraphUzb,
                paragraphRus: state.paragraphRus,
                paragraphEng: state.paragraphEng,
                pictureURL: state.pictureURL,
            }
            props.editProduct('news', props.item.id, item)
        }
        dispatch({ type: 'CLEAR' })
        dispatch({ type: 'CLICKED' })

    }
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>New News</h1>
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
                            <h2>Matn</h2>
                            <textarea
                                required
                                value={state.paragraphUzb}
                                type="text"
                                onChange={e => dispatch({ type: 'PARAGRAPH_UZB', payload: e.target.value })}
                            />
                            <h2>Rasm manzili</h2>
                            <input
                                required
                                value={state.pictureURL}
                                type="text"
                                onChange={e => dispatch({ type: 'URL', payload: e.target.value })}
                                placeholder='https://www.picture.com'
                            />


                        </div>
                        <div className={style.block}>
                            <h2>Title</h2>
                            <input
                                required
                                value={state.titleEng}
                                type="text"
                                onChange={e => dispatch({ type: 'TITLE_ENG', payload: e.target.value })}
                            />
                            <h2>Paragraph</h2>
                            <textarea
                                required
                                value={state.paragraphEng}
                                type="text"
                                onChange={e => dispatch({ type: 'PARAGRAPH_ENG', payload: e.target.value })}
                            />
                            <h2>URL</h2>
                            <input
                                required
                                value={state.pictureURL}
                                type="text"
                                onChange={e => dispatch({ type: 'URL', payload: e.target.value })}
                                placeholder='https://www.picture.com'
                            />


                        </div>
                        <div className={style.block}>
                            <h2>Заголовок</h2>
                            <input
                                required
                                value={state.titleRus}
                                type="text"
                                onChange={e => dispatch({ type: 'TITLE_RUS', payload: e.target.value })}
                            />
                            <h2>Параграф</h2>
                            <textarea
                                required
                                value={state.paragraphRus}
                                type="text"
                                onChange={e => dispatch({ type: 'PARAGRAPH_RUS', payload: e.target.value })}
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
                    <h1>Changed Successfully</h1>
                    <button><Link to='/admin' onClick={addLocal}>Back</Link></button>
                </div>
            }
        </div >
    )
}
const mapStateToProps = state => {
    return {
        item: state.selected[0]
    }
}

export default connect(mapStateToProps, { editProduct })(NewsEdit)
