import React from 'react'
import styled from 'styled-components'

const GameScreen = () => {
    return (
        <>
        <Container>
            game screen
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 60%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: purple;
`

export default GameScreen