import React from 'react'
import styled from 'styled-components'
import GameScreen from './GameScreen'
import GameControls from './GameControls'

const Game = () => {
    return (
        <>
        <Container>
            <GameScreen />
            <GameControls />
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 30rem;
    height: 40rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    border-radius: 3px 3px 50px 3px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background-color: lightgray;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
`

export default Game