import React from 'react'
import styled from 'styled-components'
import Leaderboard from './Leaderboard'
import MyGames from './MyGames'
import StartButton from './StartButton'

const DashboardView = () => {
    return (
        <>
        <Container>
            <Hud>
                <Leaderboard />
                <MyGames />
            </Hud>

            <StartButton />
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 2rem;
`

const Hud = styled.div`
    height: 30rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
`

export default DashboardView