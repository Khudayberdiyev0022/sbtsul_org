import React, { useState } from 'react'
import style from './Modal.module.css'
// import img from '../army.jpg'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { ModalPicture } from '../../actions'
import { connect } from 'react-redux'


const Modal = (props) => {
    const [modal, setModal] = useState(false)
    return (
        <div className={style.main}  >

            {
                modal &&
                <div className={style.modal} >
                    <AiOutlineCloseSquare onClick={() => setModal(false)} />
                    <div className={style.img} style={{ backgroundImage: `url(${props.img})` }} ></div>
                </div>
            }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        img: state.modalPicture
    }
}




export default connect(mapStateToProps, { ModalPicture })(Modal)