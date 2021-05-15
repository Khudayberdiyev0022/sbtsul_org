import React, { useEffect, useState } from 'react'
import style from './News.module.css'
import { fetchNewsProducts, selectedAnyItem, ReadQuota } from '../../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import LoaderComponent from '../main-parts/Loader'

function News(props) {
    const [name, setName] = useState('')

    useEffect(() => {
        props.fetchNewsProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const listRender = () => {
        if (name.length > 0) {
            return (
                props.news
                    ? props.news.map((newList, id) => newList.titleUzb.toLowerCase().includes(name.toLowerCase()) && (
                        <div key={newList.id} className={style.tableDetail}>
                            <h2>{id}</h2>
                            <h2>{
                                newList.titleUzb.split('').length > 20
                                    ? newList.titleUzb.slice(0, 20)
                                    : newList.titleUzb
                            }</h2>
                            <h2>{
                                newList.paragraphUzb.split('').length > 30
                                    ? newList.paragraphUzb.slice(0, 30)
                                    : newList.paragraphUzb
                            }</h2>
                            <h2>{
                                newList.date.split('').length > 10
                                    ? newList.date.slice(0, 10)
                                    : newList.date
                            }</h2>
                            <div className={style.twoButtons}>
                                {
                                    props.admin.newsPermission === 'TRUE' &&
                                    <Link to='/admin/delete/news' onClick={() => props.selectedAnyItem(newList)}>Delete</Link>
                                }
                                {
                                    props.admin.newsPermission === 'TRUE' &&
                                    <Link to='/admin/edit/news' onClick={() => props.selectedAnyItem(newList)}> Edit</Link>
                                }
                                {
                                    props.admin.newsPermission === 'TRUE' &&
                                    <Link to='/admin/read/news' onClick={() => props.ReadQuota(newList)}> Read</Link>
                                }
                            </div>
                        </div>
                    ))
                    : <LoaderComponent />
            )
        } else {
            return (
                props.news
                    ? props.news?.map((newList, id) => {
                        if (newList.id) {
                            return (
                                <div key={newList.id} className={style.tableDetail}>
                                    <h2>{id}</h2>
                                    <h2>{
                                        newList.titleUzb.split('').length > 20
                                            ? newList.titleUzb.slice(0, 20)
                                            : newList.titleUzb
                                    }</h2>
                                    <h2>{
                                        newList.paragraphUzb.split('').length > 30
                                            ? newList.paragraphUzb.slice(0, 30)
                                            : newList.paragraphUzb
                                    }</h2>
                                    <h2>{
                                        newList.date.split('').length > 10
                                            ? newList.date.slice(0, 10)
                                            : newList.date
                                    }</h2>
                                    <div className={style.twoButtons}>
                                        {
                                            props.admin.newsPermission === 'TRUE' &&
                                            <Link to='/admin/delete/news' onClick={() => props.selectedAnyItem(newList)}>Delete</Link>
                                        }
                                        {
                                            props.admin.newsPermission === 'TRUE' &&
                                            <Link to='/admin/edit/news' onClick={() => props.selectedAnyItem(newList)}> Edit</Link>
                                        }
                                        {
                                            props.admin.newsPermission === 'TRUE' &&
                                            <Link to='/admin/read/news' onClick={() => props.ReadQuota(newList)}> Read</Link>
                                        }
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <h1 style={{ position: 'absolute' }}>No newLists yet</h1>
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
                <h4>News Tabel</h4>
                <div className={style.searcher}>
                    <h2>News</h2>
                    <div className={style.buttons}>
                        <input
                            value={name}
                            type="text"
                            placeholder='Search by title'
                            onChange={(e) => setName(e.target.value)}
                        />
                        {
                            props.admin.newsPermission === 'TRUE' &&
                            <button
                                type="button"
                            >
                                <Link to='/admin/add/news' onClick={() => props.selectedAnyItem('yesss')}>Add new newList</Link>
                            </button>
                        }
                    </div>
                </div>
                <div className={style.table}>
                    <h2>Id</h2>
                    <h2>Titile</h2>
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
        news: state.productsNews[0],
        admin: state.admin[0]
    }
}

export default connect(mapStateToProps, { fetchNewsProducts, selectedAnyItem, ReadQuota })(News)
