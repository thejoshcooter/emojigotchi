import React from 'react'
import styled from 'styled-components'

const GameControls = () => {
    return (
        <>
        <Container>
            <Dpad>
                <div>
                <button className='up'>U</button>
                </div>

                <div>
                <button className='left'>L</button>
                <button className='right'>R</button>
                </div>

                <div>
                <button className='down'>D</button>
                </div>
            </Dpad>

            <Buttons>
                <button>A</button>
                <button>B</button>
            </Buttons>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 80%;
    height: 40%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
`

const Dpad = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    button {
        width: 2.5rem;
        height: 2.5rem;
        border: none;
        background-color: #000;
    }

    button.up {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }

    button.right {
        width: 3.5rem;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
    }

    button.down {
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }

    button.left {
        width: 3.5rem;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }
`

const Buttons = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    button {
        width: 3rem;
        height: 3rem;
        margin: 0.5rem 0;
        border-radius: 100px;
        background-color: #800020;
    }

    button:first-child {
        margin-left: 6rem;
    }
`

export default GameControls