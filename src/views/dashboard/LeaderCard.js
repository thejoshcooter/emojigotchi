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
    border-radius: 3px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
`

export default LeaderCard