import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MainMenu = () => {
    return (
        <>
        <Container>
            <Logo>
                <h1>Emojigotchi</h1>
            </Logo>

            <Navigation>
                <Link to='/'>Home</Link>
                <Link to='/login'>Authentication</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/game'>Game</Link>
                <Link to='/settings'>Settings</Link>
            </Navigation>

        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 4rem;
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

export default MainMenu