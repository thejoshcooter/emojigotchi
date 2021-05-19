import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AuthTypeSelect from './AuthTypeSelect'
import { PINK } from '../utils/colors'

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
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);

`

const Logo = styled.div`
    padding: 1rem;
`

const Navigation = styled.div`
    margin-left: 5rem;    

    a {
        margin: 0 0.5rem;
        text-decoration: none;
        color: #fff;
        padding: 1rem;
        border-radius: 3px;
        border: 2px solid transparent;
    }

    a:hover {
        color: #fff;
        border: 2px solid ${PINK};
        background-color: ${PINK};
        transition: 0.5s;
    }
`

const Login = styled.div`
    width: 10rem;
    margin-left: auto;
`

export default MainMenu