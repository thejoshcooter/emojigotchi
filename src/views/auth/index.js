import React from 'react'
import styled from 'styled-components'
import LoginForm from './LoginForm'


const AuthenticationView = () => {
    return (
        <>
        <Container>
            <LoginForm />
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