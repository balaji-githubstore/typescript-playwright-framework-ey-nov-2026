//This file contains test data that will be supplied for tests

export const validLoginData=[
    {username:"admin",password:"pass",language:"English (Indian)",expectedValue:"Calendar"},
    {username:"accountant",password:"accountant",language:"English (Indian)",expectedValue:"Calendar"},
    {username:"physician",password:"physician",language:"English (Indian)",expectedValue:"Calendar"},
]

export const invalidLoginData=[
    {username:"john",password:"john123",language:"English (Indian)",expectedValue:"Invalid username or password"},
    {username:"saul",password:"saul123",language:"English (Indian)",expectedValue:"Invalid username or password"},
]