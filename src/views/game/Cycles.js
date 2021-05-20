import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Cycles = () => {
    const cycles = useSelector(state => state.game.cycle)
    const status = useSelector(state => state.game.status)
    
    return (
        <>
        <Container>
            <p>cycles: {cycles}</p>
            <p>status: {status}</p>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 10rem;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    display: none;

    p {
        margin: 0;
    }
`

export default Cycles