import React, { useState, Fragment, useEffect } from 'react'
import Login from './admin-parts/Login'
import Main from './main-parts/Main'

function MainAdmin() {
    const [logedInSuccess, setLogedInSuccess] = useState(false)

    useEffect(() => {
        window.localStorage.removeItem('admin')
    }, [])



    const login = (clicked) => {
        setLogedInSuccess(clicked)
    }



    const loggedBefore = () => {
        if (window.localStorage.getItem('admin') === '12211221') {
            return (
                <Main />
            )
        } else {
            return (
                <Fragment>
                    {
                        !logedInSuccess ? <Login login={login} /> : <Main />
                    }
                </Fragment>
            )
        }
    }
    return (
        <Fragment>
            {
                loggedBefore()
            }
        </Fragment>
    )

}

export default MainAdmin
