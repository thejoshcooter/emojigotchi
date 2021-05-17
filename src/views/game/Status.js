import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Status = () => {
    const status = useSelector(state => state.game.status)
    const hunger = useSelector(state => state.game.hunger)
    const sleep = useSelector(state => state.game.sleep)
    const love = useSelector(state => state.game.love)
    
    return (
        <>
        <Container>
            <p>hunger: {hunger}</p>
            <p>sleep: {sleep}</p>
            <p>love: {love}</p>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 20rem;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border: 1px solid black;

    p {
        margin: 0;
    }
`

export default Status