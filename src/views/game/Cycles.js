import React from 'react'
import styled from 'styled-components'

const Cycles = () => {
    return (
        <>
        <Container>
            cycles: 0
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
    background-color: blue;
`

export default Cycles