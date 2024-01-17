import { Request, Response, NextFunction} from 'express'

const logger = (_req : Request, _res : Response, next : NextFunction) => {
    console.log("This is working...")
    console.log({"status" : "OK"})
    next() 
}

export default logger