import React, { useEffect, useReducer } from 'react'
import { editProduct } from '../../../actions'
import { connect } from 'react-redux'
import style from './GrantEdit.module.css'
import { Link } from 'react-router-dom'
import NotFound from '../main-parts/404'

const initialState = {
    titleUzb: '',
    titleRus: '',
    titleEng: '',
    paragraphUzb: '',
    paragraphRus: '',
    paragraphEng: '',
    subTitleUzb: '',
    subTitleRus: '',
    subTitleEng: '',
    costUzb: '',
    costRus: '',
    costEng: '',
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
        case 'COST_UZB':
            return {
                ...state, costUzb: action.payload
            }
        case 'COST_RUS':
            return {
                ...state, costRus: action.payload
            }
        case 'COST_ENG':
            return {
                ...state, costEng: action.payload
            }
        case 'SUBTITLE_UZB':
            return {
                ...state, subTitleUzb: action.payload
            }
        case 'SUBTITLE_RUS':
            return {
                ...state, subTitleRus: action.payload
            }
        case 'SUBTITLE_ENG':
            return {
                ...state, subTitleEng: action.payload
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

function VacancyEdit(props) {
    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        dispatch({ type: 'TITLE_UZB', payload: props.item?.titleUzb })
        dispatch({ type: 'TITLE_RUS', payload: props.item?.titleRus })
        dispatch({ type: 'TITLE_ENG', payload: props.item?.titleEng })
        dispatch({ type: 'PARAGRAPH_UZB', payload: props.item?.paragraphUzb })
        dispatch({ type: 'PARAGRAPH_RUS', payload: props.item?.paragraphRus })
        dispatch({ type: 'PARAGRAPH_ENG', payload: props.item?.paragraphEng })
        dispatch({ type: 'SUBTITLE_UZB', payload: props.item?.subTitleUzb })
        dispatch({ type: 'SUBTITLE_RUS', payload: props.item?.subTitleRus })
        dispatch({ type: 'SUBTITLE_ENG', payload: props.item?.subTitleEng })
        dispatch({ type: 'COST_UZB', payload: props.item?.costUzb })
        dispatch({ type: 'COST_RUS', payload: props.item?.costRus })
        dispatch({ type: 'COST_ENG', payload: props.item?.costEng })
        dispatch({ type: 'DATE', payload: props.item?.date })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (!props.admin) {
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
                costUzb: state.costUzb,
                costRus: state.costRus,
                costEng: state.costEng,
                subTitleUzb: state.subTitleUzb,
                subTitleRus: state.subTitleRus,
                subTitleEng: state.subTitleEng,
            }
            props.editProduct('vacancy', props.item.id, item)
        }
        dispatch({ type: 'CLEAR' })
        dispatch({ type: 'CLICKED' })

    }
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>News Vacancys</h1>
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
                            <h2>Ikkinchi Sarlavha</h2>
                            <input
                                required
                                value={state.subTitleUzb}
                                type="text"
                                onChange={e => dispatch({ type: 'SUBTITLE_UZB', payload: e.target.value })}
                            />
                            <h2>Matn</h2>
                            <textarea
                                required
                                value={state.paragraphUzb}
                                type="text"
                                onChange={e => dispatch({ type: 'PARAGRAPH_UZB', payload: e.target.value })}
                            />
                            <h2>Narx</h2>
                            <textarea
                                required
                                value={state.costUzb}
                                type="text"
                                onChange={e => dispatch({ type: 'COST_UZB', payload: e.target.value })}
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
                            <h2>Sub Title </h2>
                            <input
                                required
                                value={state.subTitleEng}
                                type="text"
                                onChange={e => dispatch({ type: 'SUBTITLE_ENG', payload: e.target.value })}
                            />
                            <h2>Paragraph</h2>
                            <textarea
                                required
                                value={state.paragraphEng}
                                type="text"
                                onChange={e => dispatch({ type: 'PARAGRAPH_ENG', payload: e.target.value })}
                            />
                            <h2>Cost </h2>
                            <textarea
                                required
                                value={state.costEng}
                                type="text"
                                onChange={e => dispatch({ type: 'COST_ENG', payload: e.target.value })}
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
                            <h2> Подзаголовок</h2>
                            <input
                                required
                                value={state.subTitleRus}
                                type="text"
                                onChange={e => dispatch({ type: 'SUBTITLE_RUS', payload: e.target.value })}
                            />
                            <h2>текст</h2>
                            <textarea
                                required
                                value={state.paragraphRus}
                                type="text"
                                onChange={e => dispatch({ type: 'PARAGRAPH_RUS', payload: e.target.value })}
                            />
                            <h2>оплата труда </h2>
                            <textarea
                                required
                                value={state.costRus}
                                type="text"
                                onChange={e => dispatch({ type: 'COST_RUS', payload: e.target.value })}
                            />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>


            </div>
            {
                state.clicked && <div className={style.modal}>
                    <h1>Added Successfully</h1>
                    <button><Link to='/admin' >Back</Link></button>
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

export default connect(mapStateToProps, { editProduct })(VacancyEdit)
