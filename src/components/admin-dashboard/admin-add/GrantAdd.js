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




function GrantAdd(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    if (props.item === undefined) {
        window.localStorage.removeItem('admin')
        return (
            <NotFound />
        )
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (state.title !== '' && state.number !== '') {

            props.addProduct('quotas', state)
        }
        dispatch({ type: 'CLEAR' })
        dispatch({ type: 'CLICKED' })

    }
    const addLocal = () => {
        window.localStorage.setItem('admin', '12211221')
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
                    <h1>Added Successfully</h1>
                    <button><Link to='/admin' onClick={addLocal}>Back</Link></button>
                </div>
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        item: state.selected[0]
    }
}

export default connect(mapStateToProps, { addProduct })(GrantAdd)
