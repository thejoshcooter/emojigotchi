import React from 'react'
import styled from 'styled-components'
import Status from './Status'
import Cycles from './Cycles'

const StatusBar = () => {
    return (
        <>
        <Container>
            <Status />
            <Cycles />
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
    justify-content: space-between;
    align-items: center;
    background-color: yellow;
`

export default StatusBar