import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ORANGE } from '../../utils/colors'

const Header = () => {
    return (
        <>
        <Container>
            <h1>Welcome to Emojigotchi!</h1>

            <p>The app where you get to own your very own emoji pet to feed, love, and take care of. Be sure to treat your pet well! If any of its needs are neglected you may end up losing it forever!</p>

            <p>Want to take the app for a spin?</p>

            <Link to='/auth/demo'><button>Try our demo!</button></Link>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 30rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 3rem;
        font-weight: bold;

        @media (max-width: 800px) {
            text-align: center;
        }
    }

    p {
        width: 50%;
        font-size: 1.25rem;

        @media (max-width: 800px) {
            width: 70%;
            text-align: center;
            font-size: 1rem;
        }
    }

    button {
        width: 15rem;
        height: 3rem;
        border-radius: 3px;
        background-color: ${ORANGE};
        color: #fff;
        border: 2px solid transparent;
        margin: 2rem 0;
    }

    button:hover {
        background-color: transparent;
        border: 2px solid ${ORANGE};
        color: ${ORANGE};
        transition: 0.5s;
    }

    a {
        text-decoration: none;
        color: #fff;
    }
`

export default Header