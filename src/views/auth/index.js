import React from 'react'
import styled from 'styled-components'
import { useRouteMatch } from 'react-router-dom'
import LoginForm from './LoginForm'
import DemoLogin from './DemoLogin'


const AuthenticationView = () => {
    const authType = useRouteMatch().params.type
    console.log(authType)
    
    return (
        <>
        <Container>
            {authType === 'demo' && <DemoLogin />}
            {authType === 'login' && <LoginForm />}
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

export default AuthenticationView