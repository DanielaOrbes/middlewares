const admins= [ "ada","greta", "vin", "tim"];

const accessAdmin = (req, res, next)=>{
    if (!req.query.user){ 
        return res.redirect('/login')
    }
   
    if(admins.includes(req.query.user.toLowerCase())){
        next()
    }
    return res.redirect('/noEntry') 
}

module.exports= accessAdmin