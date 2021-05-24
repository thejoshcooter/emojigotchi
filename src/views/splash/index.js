import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Section from './Section'
import Tech from './Tech'
import Footer from './Footer'

import demo from '../../assets/demo.png'
import game from '../../assets/game.png'
import leaderboard from '../../assets/leaderboard.png'
import mygames from '../../assets/mygames.png'

const SplashView = () => {
    return (
        <>
        <Container>
            <Header />

            <Section>
                <img src={game} alt='emojigotchi game' />

                <div>
                    <h2>Love Your Pet</h2>
                    <p>Start a game to begin taking care of your very own emoji pet! Be sure to give it all of the food, sleep, and love that it needs to stay happy and healthy!</p>
                </div>
            </Section>

            <Section offWhite={true} mobileFlip={true}>
                <div>
                    <h2>Try the Demo</h2>
                    <p>No need to make an account! We have demo accounts set up for you to take our app for a spin so that you can have your own pet up and running in no time!</p>
                </div>

                <img src={demo} alt='try our demo' />
            </Section>

            <Section>
                <img src={leaderboard} alt='track the leaderboard' />

                <div>
                    <h2>Crush the Competition</h2>
                    <p>We have built in leaderboard functionality so that you can see if you are the best pet owner around.</p>
                </div>
            </Section>

            <Section offWhite={true} mobileFlip={true}>
                <div>
                    <h2>Track Your Games</h2>
                    <p>Keep tabs on all of your most recent games from your dashboard. Compete against yourself to see how long you can keep your pet happy and healthy!</p>
                </div>

                <img src={mygames} alt='track your games' />
            </Section>

            <Tech />

            <Footer />

        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

export default SplashView