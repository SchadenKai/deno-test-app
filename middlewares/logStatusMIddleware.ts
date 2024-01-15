import { Request, Response, NextFunction} from 'express'

const logger = (req : Request, _res : Response, next : NextFunction) => {
    console.log("This is working...")
    console.log({"status" : "OK", ...req.body})
    next() 
}

export default logger