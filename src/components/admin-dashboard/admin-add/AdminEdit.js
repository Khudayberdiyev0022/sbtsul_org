import React, { useEffect, useReducer } from 'react'
import { editProduct } from '../../../actions'
import { connect } from 'react-redux'
import style from './GrantEdit.module.css'
import { Link } from 'react-router-dom'
import NotFound from '../main-parts/404'


const initialState = {
    name: '',
    password: '',
    adminsPermission: "",
    imagesPermission: "",
    messagesPermission: "",
    newsPermission: "",
    quotasPermission: "",
    studentsPermission: "",
    vacancysPermission: "",
    clicked: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'NAME':
            return {
                ...state, name: action.payload
            }
        case 'PASSWORD':
            return {
                ...state, password: action.payload
            }

        case 'ADMIN':
            return {
                ...state, adminsPermission: action.payload
            }
        case 'NEW':
            return {
                ...state, newsPermission: action.payload
            }
        case 'IMAGE':
            return {
                ...state, imagesPermission: action.payload
            }
        case 'MESSAGE':
            return {
                ...state, messagesPermission: action.payload
            }
        case 'QUOTA':
            return {
                ...state, quotasPermission: action.payload
            }
        case 'STUDENT':
            return {
                ...state, studentsPermission: action.payload
            }
        case 'VACANCY':
            return {
                ...state, vacancysPermission: action.payload
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


function AdminEdit(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({ type: 'NAME', payload: props.item?.name })
        dispatch({ type: 'PASSWORD', payload: props.item?.password })
        dispatch({ type: 'ADMIN', payload: props.item?.adminsPermission })
        dispatch({ type: 'NEW', payload: props.item?.newsPermission })
        dispatch({ type: 'IMAGE', payload: props.item?.imagesPermission })
        dispatch({ type: 'STUDENT', payload: props.item?.studentsPermission })
        dispatch({ type: 'MESSAGE', payload: props.item?.messagesPermission })
        dispatch({ type: 'QUOTA', payload: props.item?.quotasPermission })
        dispatch({ type: 'VACANCY', payload: props.item?.vacancysPermission })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (!props.admin) {
        return (
            <NotFound />
        )
    }
    const submitHandler = (e) => {
        e.preventDefault()
        props.editProduct('admin', props.item.id, state)

        dispatch({ type: 'CLEAR' })
        dispatch({ type: 'CLICKED' })

    }
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>New Admin</h1>
                <form
                    onSubmit={submitHandler}
                >
                    <h2>Name</h2>
                    <input
                        required
                        value={state.name}
                        type="text"
                        onChange={e => dispatch({ type: 'NAME', payload: e.target.value })}
                    />
                    <h2>Password</h2>
                    <input
                        required
                        value={state.password}
                        type="password"
                        onChange={e => dispatch({ type: 'PASSWORD', payload: e.target.value })}
                    />
                    <h2>Admin Permission</h2>
                    <select value={state.adminsPermission} onChange={(e) => dispatch({ type: 'ADMIN', payload: e.target.value })}>
                        <option value="TRUE">YES</option>
                        <option value="FALSE">NO</option>
                    </select>
                    <h2>Image Permission</h2>
                    <select value={state.imagesPermission} onChange={(e) => dispatch({ type: 'IMAGE', payload: e.target.value })}>
                        <option value="TRUE">YES</option>
                        <option value="FALSE">NO</option>
                    </select>
                    <h2>New Permission</h2>
                    <select value={state.newsPermission} onChange={(e) => dispatch({ type: 'NEW', payload: e.target.value })}>
                        <option value="TRUE">YES</option>
                        <option value="FALSE">NO</option>
                    </select>
                    <h2>Messaga Permission</h2>
                    <select value={state.messagesPermission} onChange={(e) => dispatch({ type: 'MESSAGE', payload: e.target.value })}>
                        <option value="TRUE">YES</option>
                        <option value="FALSE">NO</option>
                    </select>
                    <h2>Quota Permission</h2>
                    <select value={state.quotasPermission} onChange={(e) => dispatch({ type: 'QUOTA', payload: e.target.value })}>
                        <option value="TRUE">YES</option>
                        <option value="FALSE">NO</option>
                    </select>
                    <h2>Vacancy Permission</h2>
                    <select value={state.vacancysPermission} onChange={(e) => dispatch({ type: 'VACANCY', payload: e.target.value })}>
                        <option value="TRUE">YES</option>
                        <option value="FALSE">NO</option>
                    </select>
                    <h2>Student Permission</h2>
                    <select value={state.studentsPermission} onChange={(e) => dispatch({ type: 'STUDENT', payload: e.target.value })}>
                        <option value="TRUE">YES</option>
                        <option value="FALSE">NO</option>
                    </select>

                    {/* <h2>Password confirm</h2>
                    <input
                        required
                        value={state.password_confirm}
                        type="password"
                        onChange={e => dispatch({ type: 'PASSWORD_CONFIRM', payload: e.target.value })}
                    /> */}

                    <button type="submit">Submit</button>
                </form>

            </div>
            {
                state.clicked && <div className={style.modal}>
                    <h1>Changed Successfully</h1>
                    {/* <button><Link to='/admin' onClick={addLocal}>Back</Link></button> */}
                    <button><Link to='/admin'>Back</Link></button>
                </div>
            }
        </div >
    )
}
const mapStateToProps = state => {
    return {
        item: state.selected[0],
        admin: state.admin[0]
    }
}

export default connect(mapStateToProps, { editProduct })(AdminEdit)
