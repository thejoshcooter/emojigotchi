import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import MyGameCard from './MyGameCard'

const MyGames = () => {
    const games = useSelector(state => state.games.data)
    
    return (
        <>
        {!games && <p>loading...</p>}
        
        {games && (
            <Container>
                <h2>My Games</h2>

                {games.sort((a, b) => b.score - a.score).filter(user => user.userId === 0).map(game => (
                    <MyGameCard 
                        key={game.id}
                        userId={game.userId}
                        score={game.score}
                        date={game.date}

                    />   
                ))}
            </Container>
        )}
        </>
    )
}

const Container = styled.div`
    width: 45%;
    border-radius: 3px;
    overflow: scroll;
`

export default MyGames