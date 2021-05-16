import React from 'react'
import styled from 'styled-components'

const GameControls = () => {
    return (
        <>
        <Container>
            game controls
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 20%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: orange;
`

export default GameControls