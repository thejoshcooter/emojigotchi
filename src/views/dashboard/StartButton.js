import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { ORANGE } from '../../utils/colors'

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
        border: 2px solid transparent;
        background-color: ${ORANGE};
        color: #fff;
    }

    button:hover {
        border: 2px solid ${ORANGE};
        background-color: transparent;
        color: ${ORANGE};
        transition: 0.5s;
    }
`

export default StartButton