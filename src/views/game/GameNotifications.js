import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { statusNotifications } from '../../utils/constants'

const GameNotifications = () => {
    const status = useSelector(state => state.game.status)
    const hunger = useSelector(state => state.game.hunger)
    const sleep = useSelector(state => state.game.sleep)
    const love = useSelector(state => state.game.love)

    // helpers
    const getNotification = (status) => {
        if (status === 'EGG') {
            return <p>{statusNotifications['egg']}</p>
        } else if (status === 'HAPPY') {
            return <p>{statusNotifications['happy']}</p>
        } else if (hunger === 0 || sleep === 0 || love === 0) {
            return <p>{statusNotifications['dead']}</p>
        } else if (hunger < 25 && hunger > 0) {
            return <p>{statusNotifications['hunger'].critical}</p>
        } else if (sleep < 25 && sleep > 0) {
            return <p>{statusNotifications['sleep'].critical}</p>
        } else if (love < 25 && love > 0) {
            return <p>{statusNotifications['love'].critical}</p>
        } else if (hunger < 50 && hunger > 25) {
            return <p>{statusNotifications['hunger'].low}</p>
        } else if (sleep < 50 && sleep > 25) {
            return <p>{statusNotifications['sleep'].low}</p>
        } else if (love < 50 && love > 25) {
            return <p>{statusNotifications['love'].low}</p>
        } else {
            return <p>no notification available</p>
        }
    }
    
    return (
        <>
        <Container>
            <span>{getNotification(status)}</span>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    span {
        padding: 0 1rem;
        border-radius: 3px;
        background-color: rgba(255, 255, 255, 0.2);
        font-size: 0.8rem;
    }
`

export default GameNotifications