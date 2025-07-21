import { db } from "../dataSource";

async function getCustomers() {
    const [rows] = await db.query("select * from customers");
    return rows;
}

async function addCustomer(first_name: string, last_name: string, address: string, city: string, state: string, zip: string,
    phone: string, email: string, notes: string
){
    const [result] = await db.execute("INSERT INTO customers (first_name, last_name, address, city, state, zip, phone, email, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [first_name, last_name, address, city, state, zip, phone, email, notes]
    );

    return result;
}

export { getCustomers, addCustomer };