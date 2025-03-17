import jwt from 'jsonwebtoken'
import {Customer,DeliveryPartner} from '../../models/user.js'

const generateTokens= (user)=>{
    {userId:user._id,role:user.role}
}