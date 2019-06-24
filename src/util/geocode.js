const request =require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW51a29wZmRvIiwiYSI6ImNqd29maWF4czBuZ2w0MG1nZTFqYnZpMjQifQ.M7GDJzndjWO_qcs2V2B4HQ'
  
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
          callback('Unable to find location. Try another search.', undefined)
        }
         else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
      })
  }

  module.exports= geocode

  // old code without callback

  // const url2='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW51a29wZmRvIiwiYSI6ImNqd29maWF4czBuZ2w0MG1nZTFqYnZpMjQifQ.M7GDJzndjWO_qcs2V2B4HQ'

// request({url: url2, json:true},(error,response)=>{
//   if (error){
//     console.log('Unable to connect to location server, Check your netwotk')
//   }else if (response.body.features.length=== 0){
//     console.log('Location not found, Try a another location')
//   }else{
//   console.log(response.body.features[0].center[0],response.body.features[0].center[1])
//   }
// })


// error call back code
// const geocode = (address,callback)=>{
//   const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYW51a29wZmRvIiwiYSI6ImNqd29maWF4czBuZ2w0MG1nZTFqYnZpMjQifQ.M7GDJzndjWO_qcs2V2B4HQ'

//   request({url:url, jeon:true},(error,response)=>{
//     if (error){
//       callback('Unable to connect to loaction services!',undefined)
//     } else if (response.body.features.length=== 0) {
//       callback('Unable to find the location, try another',undefined)
//     } else{
//       callback(undefined,{
//         latitude: response.body.features[0].center[0],
//         longitude: response.body.features[0].center[1],
//         location: response.body.features[0].place_name
//       })
//     }
//   })
// }
