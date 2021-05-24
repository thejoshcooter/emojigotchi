import React from 'react'
import styled from 'styled-components'

const Section = ({ offWhite, mobileFlip, children }) => {
    return (
        <>
        <Container offWhite={offWhite}>
            <Content mobileFlip={mobileFlip}>
                {children}
            </Content>
        </Container>
        </>
    )
}

const Container = styled.div`
    background-color: ${props => props.offWhite ? '#f6f6f6' : '#fff'};
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 5rem 0;
    color: #23272A;
`

const Content = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 800px) {
        flex-flow: ${props => props.mobileFlip ? 'column-reverse nowrap' : 'column nowrap'};
        justify-content: center;
        align-items: center;
    }

    img {
        width: 30rem;
        height: auto;
        border-radius: 3px;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    }

    div {
        width: 50%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        @media (max-width: 800px) {
            width: 80%;
        }
    }

    h2 {
        font-size: 2rem;
    }

    p {
        width: 60%;

        @media (max-width: 800px) {
            width: 100%;
            text-align: center;
        }
    }
`

export default Section