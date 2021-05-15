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
    width: 80%;
    height: 50%;
    border-radius: 3px;
    border-top: 15px solid gray;
    border-right: 20px solid gray;
    border-bottom: 15px solid gray;
    border-left: 20px solid gray;
    background-color: #fff;
`

export default GameScreen