import React, { useEffect, useState } from 'react'
import style from './News.module.css'
import { fetchStudentProducts, selectedAnyItem, ReadQuota } from '../../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import LoaderComponent from '../main-parts/Loader'


function Students(props) {
    const [name, setName] = useState('')

    console.log(props);
    useEffect(() => {
        props.fetchStudentProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const listRender = () => {
        if (name.length > 0) {
            return (
                props.students
                    ? props.students.map((student, id) => student.nameUzb.toLowerCase().includes(name.toLowerCase()) && (
                        <div key={student.id} className={style.tableDetail}>
                            <h2>{id}</h2>
                            <h2>{student.nameUzb.split('').length > 20 ? student.nameUzb.slice(0, 20) : student.nameUzb}</h2>
                            <h2>{student.informationUzb.split('').length > 30 ? student.informationUzb.slice(0, 30) : student.informationUzb}</h2>
                            <h2>{student.email.split('').length > 15 ? student.email.slice(0, 15) : student.email}</h2>
                            <div className={style.twoButtons}>
                                {
                                    props.admin.studentsPermission === 'TRUE' &&
                                    <Link to='/admin/delete/students' onClick={() => props.selectedAnyItem(student)}>Delete</Link>
                                }
                                {
                                    props.admin.studentsPermission === 'TRUE' &&
                                    <Link to='/admin/edit/students' onClick={() => props.selectedAnyItem(student)}> Edit</Link>
                                }
                                {
                                    props.admin.studentsPermission === 'TRUE' &&
                                    <Link to='/admin/read/students' onClick={() => props.ReadQuota(student)}> Read</Link>
                                }
                            </div>
                        </div>
                    ))
                    : <LoaderComponent />
            )
        } else {
            return (
                props.students
                    ? props.students?.map((student, id) => {
                        if (student.id) {
                            return (
                                <div key={student.id} className={style.tableDetail}>
                                    <h2>{id}</h2>
                                    <h2>{student.nameUzb.split('').length > 20 ? student.nameUzb.slice(0, 20) : student.nameUzb}</h2>
                                    <h2>{student.informationUzb.split('').length > 30 ? student.informationUzb.slice(0, 30) : student.informationUzb}</h2>
                                    <h2>{student.email.split('').length > 15 ? student.email.slice(0, 15) : student.email}</h2>
                                    <div className={style.twoButtons}>
                                        {
                                            props.admin.studentsPermission === 'TRUE' &&
                                            <Link to='/admin/delete/students' onClick={() => props.selectedAnyItem(student)}>Delete</Link>
                                        }
                                        {
                                            props.admin.studentsPermission === 'TRUE' &&
                                            <Link to='/admin/edit/students' onClick={() => props.selectedAnyItem(student)}> Edit</Link>
                                        }
                                        {
                                            props.admin.studentsPermission === 'TRUE' &&
                                            <Link to='/admin/read/students' onClick={() => props.ReadQuota(student)}> Read</Link>
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
                <h4>Students Tabel</h4>
                <div className={style.searcher}>
                    <h2>Students</h2>
                    <div className={style.buttons}>
                        <input
                            type="text"
                            placeholder='Search by name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {
                            props.admin.studentsPermission === 'TRUE' &&
                            <button
                                type="button"
                            >
                                <Link to='/admin/add/students' onClick={() => props.selectedAnyItem('yesss')}>Add new student</Link>
                            </button>
                        }
                    </div>
                </div>
                <div className={style.table}>
                    <h2>Id</h2>
                    <h2>Name</h2>
                    <h2>Informations</h2>
                    <h2>Number</h2>
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
        students: state.productsStudents[0],
        admin: state.admin[0]
    }
}
export default connect(mapStateToProps, { fetchStudentProducts, selectedAnyItem, ReadQuota })(Students)


