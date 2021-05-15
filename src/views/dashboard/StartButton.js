import React from 'react'
import styled from 'styled-components'

const StartButton = () => {
    return (
        <>
        <Container>
            <button>Start Game</button>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    margin-top: 25vh;
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