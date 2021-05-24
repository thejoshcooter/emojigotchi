import React from 'react'
import styled from 'styled-components'
import { ORANGE, PURPLE } from '../../utils/colors'

const Footer = () => {
    return (
        <>
        <Container>
            <Content>
                <div>
                    <h3>About Me</h3>
                    <p>I'm Josh, a full stack engineer for hire! I used to play with little Tamagotchi pets growing up, and so I thought it would be fun to try and build my own little version in React to practice these front end technologies.</p>
                </div>

                <div>
                    <h3>Contact Me</h3>

                    <div className='links'>
                        <a href=''>Twitter</a>
                        <a href=''>Linked In</a>
                        <a href=''>Github</a>
                    </div>
                </div>
            </Content>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: ${ORANGE};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
`

const Content = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: stretch;

    div {
        width: 40%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        @media (max-width: 800px) {
            width: 50%;
        }

        h3 {
            margin-bottom: auto;
        }

        a {
            text-decoration: none;
            color: #fff;
            padding: 0.5rem;
            border-radius: 3px;
        }

        a:hover {
            background-color: ${PURPLE};
            transition: 0.5s;
        }

        p {
            padding: 2rem;

            @media (max-width: 800px) {
                text-align: center;
            }
        }
    }

    .links {
        margin-bottom: auto;
    }
`

export default Footer