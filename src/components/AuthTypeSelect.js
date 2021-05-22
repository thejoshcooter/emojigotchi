import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { LIGHTORANGE } from '../utils/colors'

const AuthTypeSelect = () => {
    const userAuthenticated = JSON.parse(localStorage.getItem('authUser'))
    const history = useHistory()

    const handleLogout = () => {
        localStorage.removeItem('authUser')
        history.push('/')
    }
    
    return (
        <>
        {!userAuthenticated && (
            <Container>
                    <Link to='/auth/demo'><button>demo</button></Link>
                    <Link to='/auth/login'><button>login</button></Link>
            </Container>
        )}

        {userAuthenticated && (
            <Container>
                <button onClick={handleLogout}>logout</button>
            </Container>
        )}
        </>
    )
}

const Container = styled.div`
    width: 15rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 800px) {
        justify-content: flex-start;
    }

    button {
        padding: 0.5rem;
        background-color: transparent;
        color: ${LIGHTORANGE};
        border-radius: 3px;
        border: 2px solid ${LIGHTORANGE};
        margin: 0 0.5rem;

        @media (max-width: 800px) {
            margin: 0 0.5rem;
        }
    }

    button:hover {
        background-color: ${LIGHTORANGE};
        color: #fff;
        transition: 0.5s;
    }
`

export default AuthTypeSelect