import React from 'react'
import styled from 'styled-components'
import MyGameCard from './MyGameCard'

const MyGames = () => {
    return (
        <>
        <Container>
            <h2>My Games</h2>

            <MyGameCard />
            <MyGameCard />
            <MyGameCard />
            <MyGameCard />
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 45%;
    border-radius: 3px;
    border: 1px solid black;
    overflow: scroll;
`

export default MyGames