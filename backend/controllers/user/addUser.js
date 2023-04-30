import {User} from '../../models/User.js';

export const addUser = async (req , res) => {

    const {name , email , pass} = req.body;

    const exist = await User.findOne({email : email});

    if(exist){
        return res.status(401).json({
            user: "Already present",
        })
    }

    const user = await User.create({name : name , email : email , password : pass});

    if(!user){
        return res.status(400).json({
            created: false,
        });
    }
    res.status(200).json({
        created: true,
    });
}