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
    height: 4rem;
    margin: 1rem 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.2);
`

export default MyGameCard