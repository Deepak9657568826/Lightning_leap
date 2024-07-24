require('dotenv').config()
const jwt = require("jsonwebtoken");
const { blacklist } = require('../blacklist/blacklist');

const authMiddleware = (req, res , next)=>{
    const token = req.headers.token;
    try {
        if(token){
            if(blacklist.includes(token)){
                res.status(200).json({"Message":"Please login first!"})
            }
            else{
                jwt.verify(token, process.env.secreate_key, function(err, decoded) {
                    if(err){
                        res.status(200).json({"Error":err})
                    }
                    else if(decoded){
                        // console.log(decoded.user._id);
                        req.body.creatorID=decoded.user._id
                        req.body.creatorName=decoded.user.name
                        req.role = decoded.user.role
                        console.log(decoded) 
                       next();
                    }
                  });
            }
        }
        else{
            res.status(200).json({Message:"You are not authorized please login first"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({"Error":error.message})
    } 
}

module.exports={
    authMiddleware
}