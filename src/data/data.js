// RAW DATA

let users = [
    {
        id: 0,
        username: 'Bob',
        firstName: 'Bob',
        lastName: 'Bobberton',
        email: 'bob@gmail.com',
        password: 'password123'
    },
    {
        id: 1,
        username: 'Tom',
        firstName: 'Tom',
        lastName: 'Tommerton',
        email: 'tom@hotmail.com',
        password: 'password123'
    },
    {
        id: 2,
        username: 'Jane',
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@yahoo.com',
        password: 'password123'
    }
]

// API 
export const getAllUsers = () => {
    return new Promise((res, rej) => {
        setTimeout(() => res(users), 1000)
    })
}