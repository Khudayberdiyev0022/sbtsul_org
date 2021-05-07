import React, { Fragment, useState, useEffect } from 'react'
import style from './News.module.css'
import { fetchQuotasProducts, selectedAnyItem } from '../../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import LoaderComponent from '../main-parts/Loader'


function Grants(props) {
    const [name, setName] = useState('')
    console.log(props);

    useEffect(() => {
        props.fetchQuotasProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const listRender = () => {
        if (name.length > 0) {
            return (
                props.quotas
                    ? props.quotas.map((quota, id) => quota.titleUzb.toLowerCase().includes(name.toLowerCase()) && (
                        <div key={quota.id} className={style.tableDetail}>
                            <h2>{id}</h2>
                            <h2>{quota.titleUzb.split('').length > 20 ? quota.titleUzb.slice(0, 20) : quota.titleUzb}</h2>
                            <h2>{quota.numberOfAllQuotasUzb.split('').length > 30 ? quota.numberOfAllQuotasUzb.slice(0, 30) : quota.numberOfAllQuotasUzb}</h2>
                            {/* <h2>{quota.numberOfStudentsAllUzb.split('').length > 30 ? quota.numberOfStudentsAllUzb.slice(0, 30) : quota.numberOfStudentsAllUzb}</h2> */}
                            {/* <h2>{quota.numberOfStudentsDailyUzb.split('').length > 30 ? quota.numberOfStudentsDailyUzb.slice(0, 30) : quota.numberOfStudentsDailyUzb}</h2> */}
                            <h2>{quota.date.split('').length > 15 ? quota.date.slice(0, 15) : quota.date}</h2>
                            <div className={style.twoButtons}>
                                <Link to='/admin/delete/quotas' onClick={() => props.selectedAnyItem(quota)}>Delete</Link>
                                <Link to='/admin/edit/quotas' onClick={() => props.selectedAnyItem(quota)}> Edit</Link>
                            </div>
                        </div>
                    ))
                    : <LoaderComponent />

            )
        } else {
            return (
                props.quotas
                    ? props.quotas.map(quota => {
                        if (quota.id) {
                            return (
                                <div key={quota.id} className={style.tableDetail}>
                                    <h2>{quota.id}</h2>
                                    <h2>{quota.titleUzb.split('').length > 20 ? quota.titleUzb.slice(0, 20) : quota.titleUzb}</h2>
                                    <h2>{quota.numberOfAllQuotasUzb.split('').length > 30 ? quota.numberOfAllQuotasUzb.slice(0, 30) : quota.numberOfAllQuotasUzb}</h2>
                                    {/* <h2>{quota.numberOfStudentsAllUzb.split('').length > 30 ? quota.numberOfStudentsAllUzb.slice(0, 30) : quota.numberOfStudentsAllUzb}</h2> */}
                                    {/* <h2>{quota.numberOfStudentsDailyUzb.split('').length > 30 ? quota.numberOfStudentsDailyUzb.slice(0, 30) : quota.numberOfStudentsDailyUzb}</h2> */}
                                    <h2>{quota.date.split('').length > 15 ? quota.date.slice(0, 15) : quota.date}</h2>
                                    <div className={style.twoButtons}>
                                        <Link to='/admin/delete/quotas' onClick={() => props.selectedAnyItem(quota)}>Delete</Link>
                                        <Link to='/admin/edit/quotas' onClick={() => props.selectedAnyItem(quota)}> Edit</Link>
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
                    <h4>Quotas Tabel</h4>
                    <div className={style.searcher}>
                        <h2>Quotas</h2>
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
                                <Link to='/admin/add/quotas' onClick={() => props.selectedAnyItem('yesss')}>Add new quota</Link>
                            </button>
                        </div>
                    </div>
                    <div className={style.table}>
                        <h2>Id</h2>
                        <h2>Title</h2>
                        <h2>Number</h2>
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
        quotas: state.productsQuotas[0]
    }
}
export default connect(mapStateToProps, { fetchQuotasProducts, selectedAnyItem })(Grants)


