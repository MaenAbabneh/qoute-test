import { Router } from "express";
import {quoteSchema} from '../schema/validtion.js';
import { getAllQuotes , postQuote , deleteQuote , getQuoteById , updateQuote } from "../controller/quote-controller.js";

const quoteRouter = Router();

quoteRouter.get("/", getAllQuotes);

quoteRouter.get("/:id", getQuoteById);

quoteRouter.post("/", (req, res) => {
    const result = quoteSchema.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({error: result.error.details[0].message});
    }
    postQuote(req , res);
});

quoteRouter.delete("/:id", deleteQuote);

quoteRouter.put("/:id", (req, res) => {
    const result = quoteSchema.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({error: result.error.details[0].message});
    }
    updateQuote(req , res);
});

export default quoteRouter;
