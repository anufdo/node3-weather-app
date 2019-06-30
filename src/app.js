const geocode= require('./util/geocode')
const forecast =require('./util/forecast')

const path =require('path')
const express = require('express')
const hbs =require('hbs')

const app= express()
const port =process.env.PORT || 3000

// Define path for express config
const publicDirctoryPath = path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//setup handlebar ans views location
app.set('view engine', 'hbs')
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

//use static directory for use
app.use(express.static(publicDirctoryPath))


app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'Anuradha Fernando'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Anuradha Fernando'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        message:'This is a help',
        name:'Anuradha Fernando'
    })
})
app.get('/weather',(req,res)=>{
    if (!req.query.address) {   
        return res.send({
            error:'Please enter a address'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location}={}) => {
        if (error){
          return res.send({
              error
          })
        }
        forecast(latitude,longitude,(error,{day0summary,temperature,probability,day0time}={})=>{
          if (error){
            return res.send({
                error
            })
          }
          const foracst= 'Temperature '+temperature+'c. Rain probability '+ probability                    
          const day0Date= new Date(day0time*1000)
          const today=  ' Today summary '+day0summary+'  => ' +(day0Date.getMonth()+1)+ '/'+ day0Date.getDate() 

          res.send({
            foracst,
            today,
            location,
            address: req.query.address
        })
         
        })
      })

    
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404 Page',
        message :'Help artical not found',
        name:'Anuradha Fernando'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404 Page',
        message :'Page not found',
        name:'Anuradha Fernando'
    })
})
app.listen(port,() => {
    console.log('Applcation started at port '+port)
})

