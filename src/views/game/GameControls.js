import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/actions'
import { feed, sleep, love } from '../../redux/actions'
import { ORANGE } from '../../utils/colors'

const GameControls = () => {
    const dispatch = useDispatch()
    return (
        <>
        <Container>
            <button onClick={() => dispatch(feed())}>hunger</button>
            <button onClick={() => dispatch(sleep())}>sleep</button>
            <button onClick={() => dispatch(love())}>love</button>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 10%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    button {
        width: 15rem;
        height: 3rem;
        margin: 0 1rem;
        border-radius: 3px;
        border: 2px solid ${ORANGE};
        color: #fff;
        background-color: ${ORANGE};
    }

    button:hover {
        color: ${ORANGE};
        background-color: transparent;
        transition: 0.5s;
    }
`

export default GameControls