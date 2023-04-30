import {User} from '../../models/User.js';
import jwt from 'jsonwebtoken';

export const authenticateUser = async (req , res) => {

    const {email , pass} = req.body;

    const user = await User.findOne({email : email});
    if(!user){
        return res.status(400).json({
            user: false,
        });
    }

    if(user.password !== pass){

        return res.status(401).json({
            success: false,
        });
    }

    res.status(200).json({
        success: true,
        token : jwt.sign({email : user.email} , "smeetisthebestthenwhylookfortherest"),
    });
}