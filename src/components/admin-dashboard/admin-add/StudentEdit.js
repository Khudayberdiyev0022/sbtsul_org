import React, { useEffect, useReducer } from 'react'
import { editProduct } from '../../../actions'
import { connect } from 'react-redux'
import style from './GrantEdit.module.css'
import { Link } from 'react-router-dom'
import NotFound from '../main-parts/404'

const initialState = {
    name: '',
    information: '',
    number: '',
    clicked: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'NAME':
            return {
                ...state, name: action.payload
            }
        case 'INFORMATION':
            return {
                ...state, information: action.payload
            }
        case 'NUMBER':
            return {
                ...state, number: action.payload
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


function StudentEdit(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addLocal = () => {
        window.localStorage.setItem('admin', '12211221')
    }
    useEffect(() => {
        dispatch({ type: 'NAME', payload: props.item?.name })
        dispatch({ type: 'INFORMATION', payload: props.item?.information })
        dispatch({ type: 'NUMBER', payload: props.item?.number })
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
        if (state.name !== '' && state.information !== '' && state.number !== '') {
            const item = {
                name: state.name,
                information: state.information,
                number: state.number
            }
            props.editProduct('students', props.item.id, item)
        }
        dispatch({ type: 'CLEAR' })
        dispatch({ type: 'CLICKED' })

    }
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1>News Message</h1>
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
                    <h2>Information</h2>
                    <input
                        required
                        value={state.information}
                        type="text"
                        onChange={e => dispatch({ type: 'INFORMATION', payload: e.target.value })}
                    />
                    <h2>Number</h2>
                    <input
                        required
                        value={state.number}
                        type="text"
                        onChange={e => dispatch({ type: 'NUMBER', payload: e.target.value })}
                    />

                    <button type="submit">Submit</button>
                    {/* <button value='Enabled'>Submit</button> */}
                    <button><Link style={{ backgroundColor: 'green' }} to='/admin' onClick={addLocal}>Back</Link></button>
                </form>
            </div>
            {
                state.clicked && <div className={style.modal}>
                    <h1>Changed Successfully</h1>
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

export default connect(mapStateToProps, { editProduct })(StudentEdit)
