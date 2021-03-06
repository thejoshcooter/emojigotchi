import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AuthTypeSelect from './AuthTypeSelect'
import { ORANGE } from '../utils/colors'

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
                {/* <Link to='/game'>Game</Link> */}
            </Navigation>

            <Login>
                <AuthTypeSelect />
            </Login>

            {/* <MobileMenu>
                <Link to='/'>Home</Link>
                <Link to='/dashboard'>Dashboard</Link>

                <AuthTypeSelect />
            </MobileMenu> */}


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

    @media (max-width: 800px) {
        height: 10vh;
    }

`

const Logo = styled.div`
    padding: 1rem;

    @media (max-width: 800px) {
        display: none;
    }
`

const Navigation = styled.div`
    margin-left: 5rem;   
    
    @media (max-width: 800px) {
        margin-left: 0;
    }

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
        border: 2px solid ${ORANGE};
        background-color: ${ORANGE};
        transition: 0.5s;
    }
`

const Login = styled.div`
    margin-left: auto;
`

export default MainMenu