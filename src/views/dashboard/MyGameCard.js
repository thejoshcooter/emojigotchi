import React from 'react'
import styled from 'styled-components'

const MyGameCard = () => {
    return (
        <>
        <Container>
            <h2>my name</h2>

            <span>score</span>
            <span>date</span>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    background-color: red;
`

export default MyGameCard