import { Request, Response } from "express";
import { addCustomer } from "../models/testCustomerModel";

async function createNewCustomer (req: Request, res: Response): Promise <void> {
    const {first_name, last_name, address, city, state, zip, phone, email, notes } = req.body;
    
    try {
        await addCustomer(first_name, last_name, address, city, state, zip, phone, email, notes );
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding customer.')
    }

}

export { createNewCustomer }