import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

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
                    <Link to='/auth/signup'><button>signup</button></Link>
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
    justify-content: space-around;
    align-items: center;
`

export default AuthTypeSelect