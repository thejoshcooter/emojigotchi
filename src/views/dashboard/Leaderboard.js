import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import LeaderCard from './LeaderCard'

const Leaderboard = () => {
    const games = useSelector(state => state.games.data)
    
    return (
        <>
        <Container>
            <h2>Leaderboard</h2>

            {!games && <p>loading...</p>}
            
            {games && games.sort((a, b) => b.score - a.score).map((game, index) => (
                <LeaderCard 
                    key={game.id}
                    rank={index + 1}
                    user={game.userId}
                    date={game.date}
                    score={game.score}
                />
            ))}
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 45%;
    border-radius: 3px;
    overflow: scroll;

    @media (max-width: 800px) {
        width: 80%;
        max-height: 20rem;
    }
`

export default Leaderboard