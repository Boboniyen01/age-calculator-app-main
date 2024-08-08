const formElement = document.querySelector('form')
let userInputDay = document.querySelector('#user-date')
let displayElements = document.querySelectorAll('#user-outputed-data  span')
let now =new Date()
let currentYear = now.getFullYear()
let currentDay = now.getDate()
let currentMonth = now.getMonth() + 1

let userInputMonth = document.querySelector('#user-month')
let userInputYear = document.querySelector('#user-year')
const submitButtonElement = document.querySelector('button')
const displayErrorMessage = document.querySelectorAll('form p')


formElement.addEventListener ('submit' ,getPlayerinput )
submitButtonElement.addEventListener ('click' , displayUserInputedData)