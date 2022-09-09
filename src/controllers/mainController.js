module.exports ={

    index : (req,res)=>{
        return res.render ('index',{
            title : 'home'
        })


    },
    contact: (req,res)=>{
        return res.render ('contact',{
            title: "Contact"
        })


    },
    about : (req,res)=>{
        return res.render ('about',{  
            title : 'About'
        })


    },
    music : (req,res)=>{
        return res.render ('music',{
            title :"Music"
        })


    },
   admin : (req,res)=>{
        return res.render ('admin', {
            title :"Administrador"
        })


    },
    login: (req,res)=>{
        return res.render ('login',{
            title : "Login"
        })


    },
    noEntry : (req,res)=>{
        return res.render ('noEntry', {
            title : "No Entry"
        })


    }
}