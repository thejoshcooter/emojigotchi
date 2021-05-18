import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as API from '../../data/data'

const DemoLogin = () => {
    
    useEffect(() => {
        API.getAllUsers()
        .then(res => {
            console.log('[server res]', res)
        })
        .catch(e => console.error(e))
    }, [])
    
    return (
        <>
        <Container>
            <DemoForm>
                <Info>
                    <h1>Welcome message</h1>

                    <p>this is some info this is some info some info this is some info this is some info</p>
                </Info>

                <StyledForm>
                    <input />
                    <input />

                    <button>login</button>
                </StyledForm>
            </DemoForm>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1200xp;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 20vh;
`

const DemoForm = styled.div`
    width: 80%;
    height: 30rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
    border-radius: 3px;
    border: 1px solid black;
`

const Info = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const StyledForm = styled.form`
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

export default DemoLogin