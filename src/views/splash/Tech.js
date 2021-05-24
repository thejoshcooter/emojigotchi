import React from 'react'
import styled from 'styled-components'

const Tech = () => {
    return (
        <>
        <Container>
            <h2>Technology</h2>
            <p>Emojigotchi was built with the following technologies: </p>

            <ul>
                <li>React</li>
                <li>React Hooks</li>
                <li>React Router</li>
                <li>Styled Components</li>
                <li>Redux</li>
                <li>Redux Middleware</li>
                <li>Custom Mock API</li>
            </ul>
        </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 3rem 0;

    h2 {
        text-align: center;
        font-size: 2rem;
    }

    ul {
        list-style: none;

        li {
            font-size: 1.5rem;
            margin: 0.5rem 0;
        }
    }
`

export default Tech