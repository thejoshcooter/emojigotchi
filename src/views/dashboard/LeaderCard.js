import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const LeaderCard = ({ rank, score, date, user }) => {
    const users = useSelector(state => state.users.data)

    const getUsername = (id) => {
        let username = users.map(user => {
            if (user.id === id) {
                return user.username
            } 
        })

        return username
    }

    
    return (
        <>
        {users && (
            <Container>
                <h2>{rank}</h2>
                <h2>{getUsername(user)}</h2>

                <span>{score}</span>

                <span>{new Date(date).toDateString()}</span>
            </Container>
        )}
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