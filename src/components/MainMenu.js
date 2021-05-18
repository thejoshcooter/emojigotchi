import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
                <Link to='/settings'>Settings</Link>
            </Navigation>

            <Login>
                <Link to='/auth/demo'><button>Demo</button></Link>
                <Link to='/auth/login'><button>Login</button></Link>
                <Link to='/auth/signup'><button>Signup</button></Link>
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
    justify-content: space-between;
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