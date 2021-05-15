import React, { useState, useEffect } from 'react'
import style from './News.module.css'
import { fetchMessagesProducts, selectedAnyItem, ReadQuota } from '../../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import LoaderComponent from '../main-parts/Loader'


function Message(props) {
    const [name, setName] = useState('')


    useEffect(() => {
        props.fetchMessagesProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const listRender = () => {
        if (name.length > 0) {
            return (
                props.messages
                    ? props.messages.map((message, id) => message.name.toLowerCase().includes(name.toLowerCase()) && (
                        <div key={message.id} className={style.tableDetail}>
                            <h2>{id}</h2>
                            <h2>{message.name.split('').length > 20 ? message.name.slice(0, 20) : message.name}</h2>
                            <h2>{message.paragraph.split('').length > 30 ? message.paragraph.slice(0, 30) : message.paragraph}</h2>
                            <h2>{message.date.split('').length > 15 ? message.date.slice(0, 15) : message.date}</h2>
                            <div className={style.twoButtons}>
                                {
                                    props.admin.messagesPermission === 'TRUE' &&
                                    <Link to='/admin/delete/messages' onClick={() => props.selectedAnyItem(message)}>Delete</Link>
                                }
                                {
                                    props.admin.messagesPermission === 'TRUE' &&
                                    <Link to='/admin/edit/messages' onClick={() => props.selectedAnyItem(message)}> Edit</Link>
                                }
                                {
                                    props.admin.messagesPermission === 'TRUE' &&
                                    <Link to='/admin/read/messages' onClick={() => props.ReadQuota(message)}> Read</Link>
                                }
                            </div>
                        </div>
                    ))
                    : <LoaderComponent />
            )
        } else {
            return (
                props.messages
                    ? props.messages?.map((message, id) => {
                        if (message.id) {
                            return (
                                <div key={message.id} className={style.tableDetail}>
                                    <h2>{id}</h2>
                                    <h2>{message.name.split('').length > 20 ? message.name.slice(0, 20) : message.name}</h2>
                                    <h2>{message.paragraph.split('').length > 30 ? message.paragraph.slice(0, 30) : message.paragraph}</h2>
                                    <h2>{message.date.split('').length > 15 ? message.date.slice(0, 15) : message.date}</h2>
                                    <div className={style.twoButtons}>
                                        {
                                            props.admin.messagesPermission === 'TRUE' &&
                                            <Link to='/admin/delete/messages' onClick={() => props.selectedAnyItem(message)}>Delete</Link>
                                        }
                                        {
                                            props.admin.messagesPermission === 'TRUE' &&
                                            <Link to='/admin/edit/messages' onClick={() => props.selectedAnyItem(message)}> Edit</Link>
                                        }
                                        {
                                            props.admin.messagesPermission === 'TRUE' &&
                                            <Link to='/admin/read/messages' onClick={() => props.ReadQuota(message)}> Read</Link>
                                        }
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <h1 style={{ position: 'absolute' }}>No Students yet</h1>
                            )
                        }
                    })
                    : <LoaderComponent />
            )
        }
    }



    return (
        <div className={style.main}>
            <div className={style.container}>
                <h4>Messages Tabel</h4>
                <div className={style.searcher}>
                    <h2>Messages</h2>
                    <div className={style.buttons}>
                        <input
                            type="text"
                            placeholder='Search by name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {
                            props.admin.messagesPermission === 'TRUE' &&
                            <button
                                type="button"
                            >
                                <Link to='/admin/add/messages' onClick={() => props.selectedAnyItem('yesss')}>Add new message</Link>
                            </button>
                        }
                    </div>
                </div>
                <div className={style.table}>
                    <h2>Id</h2>
                    <h2>Name</h2>
                    <h2>Paragraph</h2>
                    <h2>Date</h2>
                    <div className={style.twoButtons}>
                        <h2>Delete</h2>
                        <h2>Edit</h2>
                    </div>
                </div>
                {
                    listRender()
                }
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        messages: state.productsMessages[0],
        admin: state.admin[0]
    }
}

export default connect(mapStateToProps, { fetchMessagesProducts, selectedAnyItem, ReadQuota })(Message)

