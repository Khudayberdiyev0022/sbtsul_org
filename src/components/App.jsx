import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import {UzbRender, EngRender, RusRender} from './langugaeRenders'
import {changeLanguage} from '../actions'

function App(props) {
    const checker = () => {
        if((props.language === 'RUS') !== (window.location.pathname.includes('rus'))){
            props.changeLanguage('RUS')
        }
        if((props.language === 'ENG') !== (window.location.pathname.includes('eng'))){
            props.changeLanguage('ENG')
        }
    }
    checker()
    return(
        <Fragment>
            {
                props.language === 'UZB' && UzbRender()
            }
            {
                props.language === 'ENG'  && EngRender() 
            }
            {
                props.language === 'RUS' && RusRender() 
            }
        </Fragment>
    )    
}

const mapStateToProps = state => {
    return{
        language: state.language
    }
}

export default connect(mapStateToProps, {changeLanguage})(App)
