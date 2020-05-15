console.log("javascript file is loaded")

// fetch('http://puzzle.mead.io/puzzle').then((response) =>{
// response.json().then((data) => {
//     console.log(data)
// })

// })


// const weatherForm = document.querySelector('form')
// const search = document.querySelector('input')

// fetch('http://localhost:1996/weather?address=India').then((response) => {
//     response.json().then((data) =>{
//         if(data.error){
//             console.log(data.error)
//         }
//         else{
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')

// messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loadinggggggggggggggggggggggggg..................'
    messageTwo.textContent = ''

    fetch('http://localhost:1996/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageTwo.textContent = data.error
               // console.log(data.error)
            }
            else {

                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                // console.log(data.location)
                // console.log(data.forecast)
            }
        })
    })

    //   console.log(location)
})