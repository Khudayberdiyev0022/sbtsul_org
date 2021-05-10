import React, { Fragment, useState, useEffect } from 'react'
import style from './News.module.css'
import { fetchVacancysProducts, selectedAnyItem } from '../../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import LoaderComponent from '../main-parts/Loader'


function Vacancys(props) {
    const [name, setName] = useState('')
    console.log(props);

    useEffect(() => {
        props.fetchVacancysProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const listRender = () => {
        if (name.length > 0) {
            return (
                props.vacancys
                    ? props.vacancys.map((vacancy, id) => vacancy.titleUzb.toLowerCase().includes(name.toLowerCase()) && (
                        <div key={vacancy.id} className={style.tableDetail}>
                            <h2>{id}</h2>
                            <h2>{vacancy.titleUzb.split('').length > 20 ? vacancy.titleUzb.slice(0, 20) : vacancy.titleUzb}</h2>
                            <h2>{vacancy.paragraphUzb.split('').length > 30 ? vacancy.paragraphUzb.slice(0, 30) : vacancy.paragraphUzb}</h2>
                            <h2>{vacancy.date.split('').length > 15 ? vacancy.date.slice(0, 15) : vacancy.date}</h2>
                            <div className={style.twoButtons}>
                                <Link to='/admin/delete/vacancys' onClick={() => props.selectedAnyItem(vacancy)}>Delete</Link>
                                <Link to='/admin/edit/vacancys' onClick={() => props.selectedAnyItem(vacancy)}> Edit</Link>
                            </div>
                        </div>
                    ))
                    : <LoaderComponent />

            )
        } else {
            return (
                props.vacancys
                    ? props.vacancys.map(vacancy => {
                        if (vacancy.id) {
                            return (
                                <div key={vacancy.id} className={style.tableDetail}>
                                    <h2>{vacancy.id}</h2>
                                    <h2>{vacancy.titleUzb.split('').length > 20 ? vacancy.titleUzb.slice(0, 20) : vacancy.titleUzb}</h2>
                                    <h2>{vacancy.paragraphUzb.split('').length > 30 ? vacancy.paragraphUzb.slice(0, 30) : vacancy.paragraphUzb}</h2>
                                    <h2>{vacancy.date.split('').length > 15 ? vacancy.date.slice(0, 15) : vacancy.date}</h2>
                                    <div className={style.twoButtons}>
                                        <Link to='/admin/delete/vacancys' onClick={() => props.selectedAnyItem(vacancy)}>Delete</Link>
                                        <Link to='/admin/edit/vacancys' onClick={() => props.selectedAnyItem(vacancy)}> Edit</Link>
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
                <Fragment>
                    <h4>vacancys Tabel</h4>
                    <div className={style.searcher}>
                        <h2>vacancys</h2>
                        <div className={style.buttons}>
                            <input
                                type="text"
                                placeholder='Search by title'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <button
                                type="button"
                            >
                                <Link to='/admin/add/vacancys' onClick={() => props.selectedAnyItem('yesss')}>Add new vacancy</Link>
                            </button>
                        </div>
                    </div>
                    <div className={style.table}>
                        <h2>Id</h2>
                        <h2>Title</h2>
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
                </Fragment>

            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        vacancys: state.productsVacancys[0]
    }
}
export default connect(mapStateToProps, { fetchVacancysProducts, selectedAnyItem })(Vacancys)


