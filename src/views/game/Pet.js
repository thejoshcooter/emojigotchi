import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Pet = () => {
    const status = useSelector(state => state.game.status)
    
    // helpers
    const getEmoji = (status) => {
        switch (status) {
            case 'EGG':
                return <i className="fas fa-egg"></i>
            case 'HAPPY':
                return <i className="fas fa-smile-beam"></i>
            case 'SAD':
                return <i className="fas fa-sad-tear"></i>
            case 'MAD':
                return <i className="fas fa-angry"></i>
            case 'DEAD':
                return <i className="fas fa-dizzy"></i>
            default:
                return <i className="fas fa-egg"></i>
        }
    }
    
    return (
        <>
        <Container>
        {getEmoji(status)}
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    i {
        font-size: 20rem;
    }
`

export default Pet