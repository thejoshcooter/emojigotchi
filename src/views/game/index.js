import React from 'react'
import styled from 'styled-components'

const GameView = () => {
    return (
        <>
        <Container>
            game view
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 2rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

export default GameView