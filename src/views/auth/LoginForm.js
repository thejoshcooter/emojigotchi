import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import * as actions from '../../redux/actions'
import { PINK } from '../../utils/colors'

const LoginForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleInput = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(actions.login(credentials, history))
    }
    
    return (
        <>
        <Container>
            <Welcome>
                <h2>Welcome back!</h2>

                <p>
                    Ready to take care of your very own emojigotchi pet?
                </p>

                <p>
                    Please login with your account credentials. If you don't have an account yet and want to
                    check out how our game works, you can log in on a demo account!
                </p>
            </Welcome>

            <FormSection>
                <form>
                    <input 
                        type='text'
                        name='username'
                        placeholder='username'
                        value={credentials.username}
                        onChange={handleInput}
                    />

                    <input 
                        type='password'
                        name='password'
                        placeholder='password'
                        onChange={handleInput}
                    />

                    <button onClick={handleLogin}>login</button>
                </form>
            </FormSection>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 70%;
    height: 30rem;
    margin-top: 20vh;
    border-radius: 3px;
    border: 2px solid ${PINK};
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;

    @media (max-width: 800px) {
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        height: auto;
        padding: 0rem;
        margin-top: 10vh;
    }
`

const Welcome = styled.div`
    width: 49%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: ${PINK};

    @media (max-width: 800px) {
        width: 100%;
        padding: 0rem;
        padding-bottom: 2rem;
    }

    p {
        text-align: center;

        @media (max-width: 800px) {
            padding: 1rem;
            margin: 0;
        }
    }
`

const FormSection = styled.div`
    width: 49%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
        width: 100%;
    }

    form {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        @media (max-width: 800px) {
            padding: 2rem 0;
        }

        input {
            width: 80%;
            height: 3rem;
            margin: 0.5rem 0;
            border-radius: 3px;
            border: 2px solid #fff;
            background-color: transparent;
            padding: 0.2rem;
            padding-left: 1rem;
            color: #fff;
        }

        input::placeholder {
            color: #fff;
        }

        button {
            width: 85%;
            height: 3rem;
            margin-top: 1rem;
            border-radius: 3px;
            border: 2px solid #fff;
            background-color: transparent;
            color: #fff;
        }
    }
`

export default LoginForm