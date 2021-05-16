import React from 'react'
import styled from 'styled-components'
import StatusBar from './StatusBar'
import GameScreen from './GameScreen'
import GameControls from './GameControls'

const GameView = () => {
    return (
        <>
        <Container>
            <StatusBar />
            <GameScreen />
            <GameControls />
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 90vh;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: red;
`

export default GameView