import { Router,Request,Response } from "express";
const router = Router();
router.get("/",(req:Request,res:Response)=>{
    res.send(`Hello My dear`)
})
export default router;
