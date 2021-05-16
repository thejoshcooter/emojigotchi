import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import StatusBar from './StatusBar'
import GameScreen from './GameScreen'
import GameControls from './GameControls'

import * as actions from '../../redux/actions'

const GameView = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        let cycleInstance

        cycleInstance = setInterval(() => {
            dispatch(actions.generateCycle())
        }, 3000)

        return () => clearInterval(cycleInstance)
    }, [])
    
    return (
        <>
        <Container>
            <StatusBar />
            <GameScreen />
            <GameControls />
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 90vh;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: red;
`

export default GameView