import React from 'react'
import styled from 'styled-components'

const LoginForm = () => {
    return (
        <>
        <Container>
            <Welcome>
                <h2>Welcome message!</h2>

                <p>the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end is never the end</p>
            </Welcome>

            <FormSection>
                <h2>Login</h2>
                <form>
                    <input 
                        type='text'
                        placeholder='username'
                    />

                    <input 
                        type='text'
                        placeholder='password'
                    />

                    <button>login</button>
                </form>
            </FormSection>
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 70%;
    height: 30rem;
    margin-top: 25vh;
    border-radius: 3px;
    border: 1px solid black;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
`

const Welcome = styled.div`
    width: 49%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const FormSection = styled.div`
    width: 49%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }
`

export default LoginForm