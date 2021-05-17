import React from 'react'
import styled from 'styled-components'

const GameNotifications = () => {
    return (
        <>
        <Container>
            game notifications here
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 20%;
    background-color: purple;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

export default GameNotifications