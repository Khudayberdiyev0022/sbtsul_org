import React, { Fragment, useState, useEffect } from 'react'
import style from './News.module.css'
import { fetchImagesProducts, selectedAnyItem, ReadQuota } from '../../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import LoaderComponent from '../main-parts/Loader'


function Images(props) {
    const [name, setName] = useState('')

    useEffect(() => {
        props.fetchImagesProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const listRender = () => {
        if (name.length > 0) {
            return (
                props.images
                    ? props.images.map((image, id) => image.titleUzb.toLowerCase().includes(name.toLowerCase()) && (
                        <div key={image.id} className={style.tableDetail}>
                            <h2>{id}</h2>
                            <h2>{image.titleUzb.split('').length > 20 ? image.titleUzb.slice(0, 20) : image.titleUzb}</h2>
                            <h2>{image.pictureURL.split('').length > 30 ? image.pictureURL.slice(0, 30) : image.pictureURL}</h2>
                            <h2>{image.date.split('').length > 30 ? image.date.slice(0, 30) : image.date}</h2>
                            <div className={style.twoButtons}>
                                {
                                    props.admin.imagesPermission === 'TRUE' &&
                                    <Link to='/admin/delete/images' onClick={() => props.selectedAnyItem(image)}>Delete</Link>
                                }
                                {
                                    props.admin.imagesPermission === 'TRUE' &&
                                    <Link to='/admin/edit/images' onClick={() => props.selectedAnyItem(image)}> Edit</Link>
                                }
                                {
                                    props.admin.imagesPermission === 'TRUE' &&
                                    <Link to='/admin/read/images' onClick={() => props.ReadQuota(image)}> Read</Link>
                                }

                            </div>
                        </div>
                    ))
                    : <LoaderComponent />

            )
        } else {
            return (
                props.images
                    ? props.images.map((image, id) => {
                        if (image.id) {
                            return (
                                <div key={image.id} className={style.tableDetail}>
                                    <h2>{id}</h2>
                                    <h2>{image.titleUzb.split('').length > 20 ? image.titleUzb.slice(0, 20) : image.titleUzb}</h2>
                                    <h2>{image.pictureURL.split('').length > 30 ? image.pictureURL.slice(0, 30) : image.pictureURL}</h2>
                                    <h2>{image.date.split('').length > 30 ? image.date.slice(0, 30) : image.date}</h2>
                                    <div className={style.twoButtons}>
                                        {
                                            props.admin.imagesPermission === 'TRUE' &&
                                            <Link to='/admin/delete/images' onClick={() => props.selectedAnyItem(image)}>Delete</Link>
                                        }
                                        {
                                            props.admin.imagesPermission === 'TRUE' &&
                                            <Link to='/admin/edit/images' onClick={() => props.selectedAnyItem(image)}> Edit</Link>
                                        }
                                        {
                                            props.admin.imagesPermission === 'TRUE' &&
                                            <Link to='/admin/read/images' onClick={() => props.ReadQuota(image)}> Read</Link>
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
                <Fragment>
                    <h4>Images Tabel</h4>
                    <div className={style.searcher}>
                        <h2>Images</h2>
                        <div className={style.buttons}>
                            <input
                                type="text"
                                placeholder='Search by title'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {props.admin.imagesPermission === 'TRUE' &&
                                <button
                                    type="button"
                                >
                                    <Link to='/admin/add/images' onClick={() => props.selectedAnyItem('yesss')}>Add new image</Link>
                                </button>
                            }
                        </div>
                    </div>
                    <div className={style.table}>
                        <h2>Id</h2>
                        <h2>Title</h2>
                        <h2>Picture Url</h2>
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
        images: state.productsImages[0],
        admin: state.admin[0]
    }
}
export default connect(mapStateToProps, { fetchImagesProducts, selectedAnyItem, ReadQuota })(Images)


