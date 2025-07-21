import './config'; // Load environment variables
import { getCustomers, addCustomer } from './models/testCustomerModel'
import express, {Express} from 'express';
//import path from 'path';
import { createNewCustomer } from './controllers/testCustomerController';



const PORT = process.env.PORT;
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded( {extended: true}));
app.use(express.static('public', {extensions: ['html']}));

// Endpoints
app.post('/AddCustomerTest', createNewCustomer);


app.listen(PORT, () => {
    console.log(`Server listening on  http://localhost:${PORT}`);
});

const customers = await getCustomers();
console.log(customers);
