// RAW DATA

let users = [
    {
        id: 0,
        username: 'Bob',
        firstName: 'Bob',
        lastName: 'Bobberton',
        email: 'bob@gmail.com',
        password: 'password123',
        demo: true
    },
    {
        id: 1,
        username: 'Tom',
        firstName: 'Tom',
        lastName: 'Tommerton',
        email: 'tom@hotmail.com',
        password: 'password123',
        demo: true
    },
    {
        id: 2,
        username: 'Jane',
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@yahoo.com',
        password: 'password123',
        demo: true
    },
    {
        id: 3,
        username: 'admin',
        firstName: 'admin',
        lastName: 'admin',
        password: 'admin123',
        demo: false
    }
]

let games = [
    {
        id: 0,
        userId: 3,
        date: Date.parse('April 4 2020'),
        score: 50
    },
    {
        id: 1,
        userId: 1,
        date: Date.parse('December 8 2020'),
        score: 105
    },
    {
        id: 2,
        userId: 2,
        date: Date.parse('February 14 2021'),
        score: 277
    },
    {
        id: 3,
        userId: 1,
        date: Date.parse('March 21 2021'),
        score: 333
    },
    {
        id: 4,
        userId: 1,
        date: Date.parse('May 1 2021'),
        score: 124
    },
    {
        id: 5,
        userId: 3,
        date: Date.parse('May 19 2021'),
        score: 264
    }
]

// API 
export const getAllUsers = () => {
    return new Promise((res, rej) => {
        setTimeout(() => res(users), 1000)
    })
}

export const getAllGames = () => {
    return new Promise((res, rej) => {
        setTimeout(() => res(games), 1000)
    })
}