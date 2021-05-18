import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as actions from '../../redux/actions'

const DemoLogin = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const users = useSelector(state => state.users.data)

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    useEffect(() => {
        // dispatch(actions.fetchUsers())
    }, [])

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
                    <h1>Welcome message</h1>

                    <p>this is some info this is some info some info this is some info this is some info</p>

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
`

const DemoForm = styled.div`
    width: 80%;
    height: 30rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
    border-radius: 3px;
    border: 1px solid black;
`

const Info = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const StyledForm = styled.form`
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

export default DemoLogin