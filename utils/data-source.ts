//This file contains test data that will be supplied for tests

export const validLoginData=[
    {username:"admin",password:"pass",languageLabel:"English (Indian)",expectedValue:"Calendar"},
    {username:"accountant",password:"accountant",languageLabel:"English (Indian)",expectedValue:"Calendar"},
    {username:"physician",password:"physician",languageLabel:"English (Indian)",expectedValue:"Calendar"},
]

export const invalidLoginData=[
    {username:"john",password:"john123",languageLabel:"English (Indian)",expectedValue:"Invalid username or password"},
    {username:"saul",password:"saul123",languageLabel:"English (Indian)",expectedValue:"Invalid username or password"},
]