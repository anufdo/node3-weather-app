//console.log('from clinet side JS')



const weatherForm =document.querySelector('form')
const inputElement =document.querySelector('input')
const message1 =document.querySelector('#message1')
const message2 =document.querySelector('#message2')


    weatherForm.addEventListener('submit', (e) => {
        e.preventDefault()
        message1.textContent="Loding ..."
        message2.textContent=""
        const location =inputElement.value
    
        fetch('http://localhost:3000/weather?address='+location).then((response)=>{
            response.json().then((data)=>{
                if (data.error){
                    message1.textContent=data.error
                    return
                }
                message1.textContent =data.location
                message2.textContent =data.foracst
        
            })
        })
    
    })

