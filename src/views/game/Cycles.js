import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Cycles = () => {
    const cycles = useSelector(state => state.game.cycle)
    
    return (
        <>
        <Container>
            cycles: {cycles}
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
`

export default Cycles