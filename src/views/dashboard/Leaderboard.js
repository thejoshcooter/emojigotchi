import React from 'react'
import styled from 'styled-components'
import LeaderCard from './LeaderCard'

const Leaderboard = () => {
    return (
        <>
        <Container>
            <h2>Leaderboard</h2>
            
            <LeaderCard />
            <LeaderCard />
            <LeaderCard />
            <LeaderCard />
            <LeaderCard />
            <LeaderCard />
            <LeaderCard />
            <LeaderCard />
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 45%;
    border-radius: 3px;
    overflow: scroll;
`

export default Leaderboard