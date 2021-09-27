const express=require('express');
const path=require('path');
const hbs=require('hbs');

const app=express();
let port=process.env.PORT || 80;
// public static path
const static_path=path.join(__dirname,"../public");
const views_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
console.log(partials_path)
app.set('view engine','hbs');
app.set('views',views_path);
hbs.registerPartials(partials_path)
app.use(express.static(static_path));


app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("*",(req,res)=>{
    res.render('404error')
})
app.listen(port,()=>{
    console.log("http://localhost")
})
