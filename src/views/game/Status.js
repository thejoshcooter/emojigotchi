import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Status = () => {
    const status = useSelector(state => state.game.status)
    
    return (
        <>
        <Container>
            status: {status}
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
    background-color: white;
`

export default Status