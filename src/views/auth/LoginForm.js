import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import * as actions from '../../redux/actions'

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
                <h2>Welcome message!</h2>

                <p>the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end</p>
            </Welcome>

            <FormSection>
                <h2>Login</h2>
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
    margin-top: 25vh;
    border-radius: 3px;
    border: 1px solid black;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
`

const Welcome = styled.div`
    width: 49%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const FormSection = styled.div`
    width: 49%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }
`

export default LoginForm