import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as actions from '../../redux/actions'
import { ORANGE } from '../../utils/colors'

const DemoLogin = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const users = useSelector(state => state.users.data)

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const updateDemoSelection = (username, password) => {
        setCredentials({ username: username, password: password })
    }

    const handleFormChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleLogin = (e) => {
        e.preventDefault()

        dispatch(actions.demoLogin(credentials, history))
    }
    
    return (
        <>
        <Container>
            <DemoForm>
                <Info>
                    <h1>Check it out!</h1>

                    <p>
                        Not ready to make an account yet?
                    </p>

                    <p>
                        Take emojigotchi for a test drive instead by logging in as one of our demo users below.
                    </p>

                    {users.length === 0 && (
                        <span>loading...</span>
                    )}

                    {users.length > 0 && users.map(user => {
                        if (user.demo) {
                            return <button key={user.id} onClick={() => updateDemoSelection(user.username, user.password)}>{user.username}</button>
                        }
                    })}
                </Info>

                <StyledForm>
                    <input 
                        type='text'
                        name='username'
                        placeholder='username'
                        value={credentials.username}
                        onChange={handleFormChange}
                    />

                    <input 
                        type='password'
                        name='password'
                        placeholder='password'
                        value={credentials.password}
                        onChange={handleFormChange}
                    />

                    <button onClick={handleLogin}>login</button>
                </StyledForm>
            </DemoForm>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1200xp;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 20vh;

    @media (max-width: 800px) {
        margin-top: 5rem;
    }
`

const DemoForm = styled.div`
    width: 70%;
    height: 30rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
    border-radius: 3px;
    border: 2px solid ${ORANGE};

    @media (max-width: 800px) {
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        height: auto;
        width: 90%;
    }
`

const Info = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: ${ORANGE};

    @media (max-width: 800px) {
        width: 100%;
        padding: 2rem 0;
    }

    p {
        padding: 1rem;
        text-align: center;
        margin: 0;
    }

    button {
        width: 10rem;
        height: 3rem;
        margin: 0.5rem 0;
        background-color: transparent;
        border-radius: 3px;
        border: 2px solid #fff;
        color: #fff;
    }

    button:hover {
        background-color: #fff;
        color: ${ORANGE};
        transition: 0.5s;
    }
`

const StyledForm = styled.form`
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
        width: 100%;
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
`

export default DemoLogin