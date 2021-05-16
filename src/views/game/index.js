import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { dayColor, nightColor } from '../../utils/colors'
import { DAY, NIGHT } from '../../utils/times'
import StatusBar from './StatusBar'
import GameScreen from './GameScreen'
import GameControls from './GameControls'

import * as actions from '../../redux/actions'

const GameView = () => {
    const dispatch = useDispatch()
    const time = useSelector(state => state.game.time)
    const CYCLE_RATE = 5000

    useEffect(() => {
        let cycleInstance

        cycleInstance = setInterval(() => {
            dispatch(actions.buildCycle())
        }, CYCLE_RATE)

        return () => clearInterval(cycleInstance)
    }, [])
    
    return (
        <>
        <Container time={time}>
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
    background-color: ${props => props.time === DAY ? dayColor : nightColor };
`

export default GameView