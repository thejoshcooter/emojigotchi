import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/actions'
import { feed, sleep, love } from '../../redux/actions'

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
    height: 20%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: space-around;
    background-color: orange;

    button {
        width: 15rem;
        height: 2rem;
    }
`

export default GameControls