const request =require('request')

const forecast = (longitude,latitude,callback)=>{
    const url = 'https://api.darksky.net/forecast/d4947a90be4ffb7666e12af45a321995/'+ longitude+','+ latitude+'?units=si'
    request({url, json:true},(error,{body})=>{
        if (error){
            callback('Unable to connect to weather services!',undefined)
        } else if (body.error) {
            callback('Location cannot be found',undefined)
        } else {
            callback(undefined,{
                summary: body.daily.data[0].summary,
                temperature : body.currently.temperature,
                probability : body.currently.precipProbability

            })
        }
      
    })
}

module.exports = forecast


// old without callback
// const url='https://api.darksky.net/forecast/d4947a90be4ffb7666e12af45a321995/37.8267,-122.4233?units=si'

// request({url: url,json: true},(error,response)=>{
//  if (error){
//     console.log('Unable to connect to wather server, Check your netwotk')
//  }else if(response.body.error){
//     console.log(response.body.error)
//  } else{
//   const currently=response.body.currently
//   console.log(response.body.daily.data[0].summary+ ' It is currently '+currently.temperature+ ' out ther is '+currently.precipProbability +' chance of rain')
//  } 
// })