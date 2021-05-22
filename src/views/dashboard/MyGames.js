import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import MyGameCard from './MyGameCard'

const MyGames = () => {
    const games = useSelector(state => state.games.data)
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    console.log('authuser', authUser)
    
    return (
        <>
        {!games && <p>loading...</p>}
        
        {games && (
            <Container>
                <h2>My Games</h2>

                {games.sort((a, b) => b.date - a.date).filter(user => user.userId === authUser.id).map(game => (
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

    @media (max-width: 800px) {
        width: 80%;
        max-height: 20rem;
        padding-top: 2rem;
        padding-bottom: 0;
    }
`

export default MyGames