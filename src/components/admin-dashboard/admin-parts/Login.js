import React, { useState } from 'react'
import style from './Login.module.css'

import image from '../../../assets/images/lock.jpg'

function Login({ login }) {
    const [checker, setChecker] = useState(false)
    const [emptyInput, setEmptyInput] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitted = e => {
        e.preventDefault()
        if (username === 'admin' && password === '12211221') {
            login(true)
            setChecker(false)
            window.localStorage.setItem(username, password)

        } else if (username === '' && password === '') {
            setEmptyInput(true)
            offChecker()
        } else {
            offChecker()
            login(false)
            setChecker(true)
            setUsername('')
            setPassword('')
        }
    }
    const offChecker = () => {
        setTimeout(() => {
            setChecker(false)
            setEmptyInput(false)
        }, 3000);
    }

    return (
        <section className={style.sec}>
            <div className={style.container}>
                <div className={`${style.user} ${style.signinBx}`}>
                    <div className={style.imgBx} style={{ backgroundImage: `url(${image})` }}></div>
                    <div className={style.formBx}>
                        <form onSubmit={submitted}>
                            <h2>Log In</h2>
                            <input
                                className={checker || emptyInput ? style.wrong : ''}
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                className={checker || emptyInput ? style.wrong : ''}
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                type="submit"
                                value="Login"

                            />
                        </form>
                        {
                            checker && <p className={style.wrongText}>Wrong Password or Username</p>
                        }
                        {
                            emptyInput && <p className={style.wrongText}>Please fill inputs!!!</p>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
