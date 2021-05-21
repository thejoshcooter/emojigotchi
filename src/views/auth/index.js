import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import LoginForm from './LoginForm'
import DemoLogin from './DemoLogin'
import * as actions from '../../redux/actions'


const AuthenticationView = () => {
    const dispatch = useDispatch()
    const authType = useRouteMatch().params.type
    
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