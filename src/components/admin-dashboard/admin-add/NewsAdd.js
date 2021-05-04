import React, { useReducer } from 'react'
import style from './GrantAdd.module.css'
import { addProduct } from '../../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NotFound from '../main-parts/404'

const initialState = {
    title: '',
    paragraph: '',
    date: '',
    pictureURL: '',
    clicked: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'TITLE':
            return {
                ...state, title: action.payload
            }
        case 'PARAGRAPH':
            return {
                ...state, paragraph: action.payload
            }
        case 'DATE':
            return {
                ...state, date: action.payload
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




function MessageAdd(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    if (props.item === undefined) {
        window.localStorage.removeItem('admin')
        return (
            <NotFound />
        )
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (state.title !== '' && state.paragraph !== '' && state.date !== '') {

            props.addProduct('news', state)
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
                <h1>News NEWS</h1>
                <form
                    onSubmit={submitHandler}
                >
                    <h2>Title</h2>
                    <input
                        required
                        value={state.title}
                        type="text"
                        onChange={e => dispatch({ type: 'TITLE', payload: e.target.value })}
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
                    <h2>URL</h2>
                    <input
                        required
                        value={state.pictureURL}
                        type="text"
                        onChange={e => dispatch({ type: 'URL', payload: e.target.value })}
                        placeholder='https://www.picture.com'
                    />

                    <button type="submit">Submit</button>
                    {/* <button value='Enabled'>Submit</button> */}

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

export default connect(mapStateToProps, { addProduct })(MessageAdd)
