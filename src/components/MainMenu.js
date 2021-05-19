import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AuthTypeSelect from './AuthTypeSelect'

const MainMenu = () => {
    const userAuthenticated = localStorage.getItem('authUser')
    
    return (
        <>
        <Container>
            <Logo>
                <h1>Emojigotchi</h1>
            </Logo>

            <Navigation>
                <Link to='/'>Home</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/game'>Game</Link>
            </Navigation>

            <Login>
                <AuthTypeSelect />
            </Login>


        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 10vh;
    border: 1px solid black;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
`

const Logo = styled.div`

`

const Navigation = styled.div`
    a {
        margin: 0 1rem;
    }
`

const Login = styled.div`
    width: 10rem;
`

export default MainMenu