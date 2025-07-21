import './config'; // Load environment variables
import { getCustomers} from './models/testCustomerModel' // test 
import express, {Express} from 'express';
import { createNewCustomer } from './controllers/testCustomerController'; // test
import { handleCustomerAndRepair, handleRepairForCustomer } from './controllers/repairController';




const PORT = process.env.PORT;
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded( {extended: true}));
app.use(express.static('public', {extensions: ['html']}));

// Endpointsc\\
app.post('/AddCustomerTest', createNewCustomer); // test
app.post('/repairs/create-customer-repair', handleCustomerAndRepair);
app.post('/repairs/create-repair', handleRepairForCustomer );



app.listen(PORT, () => {
    console.log(`Server listening on  http://localhost:${PORT}`);
});

const customers = await getCustomers();
console.log(customers);
