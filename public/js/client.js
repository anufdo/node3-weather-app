const weatherForm =document.querySelector('form')
const inputElement =document.querySelector('input')
const message1 =document.querySelector('#message1')
const message2 =document.querySelector('#message2')
const headLoc =document.querySelector('#headLoc')
const headCur =document.querySelector('#headCur')
const message3 =document.querySelector('#message3')



    weatherForm.addEventListener('submit', (e) => {
        e.preventDefault()
        message1.textContent="Loding ..."
        message2.textContent=""
        message3.textContent=""
        headLoc.textContent=""
        headCur.textContent=""
        const location =inputElement.value
    
        fetch('/weather?address='+location).then((response)=>{
            response.json().then((data)=>{
                if (data.error){
                    message1.textContent=data.error
                    return
                }
                headLoc.textContent="Location"
                headCur.textContent="Currently"
                message1.textContent =data.location
                message2.textContent =data.foracst 
                message3.textContent=data.today
        
            })
        })
    
    })

