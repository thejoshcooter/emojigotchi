import React from 'react'
import styled from 'styled-components'

const LeaderCard = () => {
    return (
        <>
        <Container>
            <h2>#R</h2>
            <h2>Username</h2>

            <span>score</span>

            <span>date</span>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 4rem;
    margin: 1rem 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    background-color: orange;
`

export default LeaderCard