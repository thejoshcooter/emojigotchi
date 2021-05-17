import React from 'react'
import styled from 'styled-components'
import Pet from './Pet'
import GameNotifications from './GameNotifications'

const GameScreen = () => {
    return (
        <>
        <Container>
            <Pet />
            <GameNotifications />
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 80%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`

export default GameScreen