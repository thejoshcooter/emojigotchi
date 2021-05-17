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
    height: 10%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

export default StatusBar