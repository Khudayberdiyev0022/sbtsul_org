import React, { useEffect, useReducer } from 'react'
import { editProduct } from '../../../actions'
import { connect } from 'react-redux'
import style from './GrantEdit.module.css'
import { Link } from 'react-router-dom'
import NotFound from '../main-parts/404'

const initialState = {
    name: '',
    paragraph: '',
    date: '',
    clicked: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'NAME':
            return {
                ...state, name: action.payload
            }
        case 'PARAGRAPH':
            return {
                ...state, paragraph: action.payload
            }
        case 'DATE':
            return {
                ...state, date: action.payload
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


function MessageEdit(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addLocal = () => {
        window.localStorage.setItem('admin', '12211221')
    }
    useEffect(() => {
        dispatch({ type: 'NAME', payload: props.item?.name })
        dispatch({ type: 'PARAGRAPH', payload: props.item?.paragraph })
        dispatch({ type: 'DATE', payload: props.item?.date })
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
        if (state.name !== '' && state.paragraph !== '' && state.date !== '') {
            const item = {
                name: state.name,
                paragraph: state.paragraph,
                date: state.date
            }
            props.editProduct('messages', props.item.id, item)
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
                    <h2>Paragraph</h2>
                    <input
                        required
                        value={state.paragraph}
                        type="text"
                        onChange={e => dispatch({ type: 'PARAGRAPH', payload: e.target.value })}
                    />
                    <h2>Date</h2>
                    <input
                        required
                        value={state.date}
                        type="text"
                        onChange={e => dispatch({ type: 'DATE', payload: e.target.value })}
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

export default connect(mapStateToProps, { editProduct })(MessageEdit)
