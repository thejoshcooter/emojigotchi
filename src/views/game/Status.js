import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { ORANGE } from '../../utils/colors'

const Status = () => {
    const status = useSelector(state => state.game.status)
    const hunger = useSelector(state => state.game.hunger)
    const sleep = useSelector(state => state.game.sleep)
    const love = useSelector(state => state.game.love)
    
    return (
        <>
        <Container>
            <p>hunger: <span>{hunger}</span></p>
            <p>sleep: <span>{sleep}</span></p>
            <p>love: <span>{love}</span></p>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 20rem;
    height: 80%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    border-radius: 3px;
    border: 2px solid ${ORANGE};
    padding: 0;

    p {
        margin: 0;
        padding: 0;
        color: ${ORANGE};
    }

    span {
        font-weight: bold;
        color: #fff;
    }
`

export default Status