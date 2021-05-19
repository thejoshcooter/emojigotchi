import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

const StartButton = () => {
    const history = useHistory()
    
    return (
        <>
        <Container>
            <Link to='/game'><button>Start Game</button></Link>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    margin-top: 5rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    button {
        width: 20rem;
        height: 4rem;
        border-radius: 3px;
    }
`

export default StartButton