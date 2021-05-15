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
    numberOfAllQuotasUzb: '',
    numberOfAllQuotasRus: '',
    numberOfAllQuotasEng: '',
    numberOfStudentsAllUzb: '',
    numberOfStudentsAllRus: '',
    numberOfStudentsAllEng: '',
    numberOfStudentsDailyUzb: '',
    numberOfStudentsDailyRus: '',
    numberOfStudentsDailyEng: '',
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
        case 'ALL_QUOTAS_UZB':
            return {
                ...state, numberOfAllQuotasUzb: action.payload
            }
        case 'ALL_QUOTAS_RUS':
            return {
                ...state, numberOfAllQuotasRus: action.payload
            }
        case 'ALL_QUOTAS_ENG':
            return {
                ...state, numberOfAllQuotasEng: action.payload
            }
        case 'DAILY_STUDENTS_UZB':
            return {
                ...state, numberOfStudentsDailyUzb: action.payload
            }
        case 'DAILY_STUDENTS_RUS':
            return {
                ...state, numberOfStudentsDailyRus: action.payload
            }
        case 'DAILY_STUDENTS_ENG':
            return {
                ...state, numberOfStudentsDailyEng: action.payload
            }
        case 'ALL_STUDENTS_UZB':
            return {
                ...state, numberOfStudentsAllUzb: action.payload
            }
        case 'ALL_STUDENTS_RUS':
            return {
                ...state, numberOfStudentsAllRus: action.payload
            }
        case 'ALL_STUDENTS_ENG':
            return {
                ...state, numberOfStudentsAllEng: action.payload
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

function GrantEdit(props) {
    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        dispatch({ type: 'TITLE_UZB', payload: props.item?.titleUzb })
        dispatch({ type: 'TITLE_RUS', payload: props.item?.titleRus })
        dispatch({ type: 'TITLE_ENG', payload: props.item?.titleEng })
        dispatch({ type: 'ALL_QUOTAS_UZB', payload: props.item?.numberOfAllQuotasUzb })
        dispatch({ type: 'ALL_QUOTAS_RUS', payload: props.item?.numberOfAllQuotasRus })
        dispatch({ type: 'ALL_QUOTAS_ENG', payload: props.item?.numberOfAllQuotasEng })
        dispatch({ type: 'DAILY_STUDENTS_UZB', payload: props.item?.numberOfStudentsDailyUzb })
        dispatch({ type: 'DAILY_STUDENTS_RUS', payload: props.item?.numberOfStudentsDailyRus })
        dispatch({ type: 'DAILY_STUDENTS_ENG', payload: props.item?.numberOfStudentsDailyEng })
        dispatch({ type: 'ALL_STUDENTS_UZB', payload: props.item?.numberOfStudentsAllUzb })
        dispatch({ type: 'ALL_STUDENTS_RUS', payload: props.item?.numberOfStudentsAllRus })
        dispatch({ type: 'ALL_STUDENTS_ENG', payload: props.item?.numberOfStudentsAllEng })
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
                numberOfAllQuotasUzb: state.numberOfAllQuotasUzb,
                numberOfAllQuotasRus: state.numberOfAllQuotasRus,
                numberOfAllQuotasEng: state.numberOfAllQuotasEng,
                numberOfStudentsAllUzb: state.numberOfStudentsAllUzb,
                numberOfStudentsAllRus: state.numberOfStudentsAllRus,
                numberOfStudentsAllEng: state.numberOfStudentsAllEng,
                numberOfStudentsDailyUzb: state.numberOfStudentsDailyUzb,
                numberOfStudentsDailyRus: state.numberOfStudentsDailyRus,
                numberOfStudentsDailyEng: state.numberOfStudentsDailyEng,
            }
            props.editProduct('quotas', props.item.id, item)
        }
        dispatch({ type: 'CLEAR' })
        dispatch({ type: 'CLICKED' })

    }
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>News Quotas</h1>
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
                            <h2>Kvotalar soni</h2>
                            <textarea
                                required
                                value={state.numberOfAllQuotasUzb}
                                type="text"
                                onChange={e => dispatch({ type: 'ALL_QUOTAS_UZB', payload: e.target.value })}
                            />
                            <h2>Kunlik qabul soni</h2>
                            <textarea
                                required
                                value={state.numberOfStudentsDailyUzb}
                                type="text"
                                onChange={e => dispatch({ type: 'DAILY_STUDENTS_UZB', payload: e.target.value })}
                            />
                            <h2>Barcha qabul soni</h2>
                            <input
                                required
                                value={state.numberOfStudentsAllUzb}
                                type="text"
                                onChange={e => dispatch({ type: 'ALL_STUDENTS_UZB', payload: e.target.value })}
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
                            <h2>Number of Quotas</h2>
                            <textarea
                                required
                                value={state.numberOfAllQuotasEng}
                                type="text"
                                onChange={e => dispatch({ type: 'ALL_QUOTAS_ENG', payload: e.target.value })}
                            />
                            <h2>Number of admissions per day</h2>
                            <textarea
                                required
                                value={state.numberOfStudentsDailyEng}
                                type="text"
                                onChange={e => dispatch({ type: 'DAILY_STUDENTS_ENG', payload: e.target.value })}
                            />
                            <h2>Number of all admissions </h2>
                            <input
                                required
                                value={state.numberOfStudentsAllEng}
                                type="text"
                                onChange={e => dispatch({ type: 'ALL_STUDENTS_ENG', payload: e.target.value })}
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
                            <h2>Обшие число квот</h2>
                            <textarea
                                required
                                value={state.numberOfAllQuotasRus}
                                type="text"
                                onChange={e => dispatch({ type: 'ALL_QUOTAS_RUS', payload: e.target.value })}
                            />
                            <h2>Число прием документов за день </h2>
                            <textarea
                                required
                                value={state.numberOfStudentsDailyRus}
                                type="text"
                                onChange={e => dispatch({ type: 'DAILY_STUDENTS_RUS', payload: e.target.value })}
                            />
                            <h2>Обшие число приема документов </h2>
                            <input
                                required
                                value={state.numberOfStudentsAllRus}
                                type="text"
                                onChange={e => dispatch({ type: 'ALL_STUDENTS_RUS', payload: e.target.value })}
                            />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            {
                state.clicked && <div className={style.modal}>
                    <h1>Changed Successfully</h1>
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

export default connect(mapStateToProps, { editProduct })(GrantEdit)
