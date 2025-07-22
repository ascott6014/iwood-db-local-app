import './config'; // Load environment variables
import { getCustomers} from './models/testCustomerModel' // test 
import express, {Express} from 'express';
import { createNewCustomer } from './controllers/testCustomerController'; // test
import { handleCustomerAndRepair, handleRepairForCustomer } from './controllers/repairController';
import { handleCreateCustomerOrder, handleCreateOrderForCustomer } from './controllers/orderController';
import { handleCreateCustomerInstall, handleCreateInstallForCustomer } from './controllers/installController';




const PORT = process.env.PORT;
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded( {extended: true}));
app.use(express.static('public', {extensions: ['html']}));

// Endpointss
app.post('/AddCustomerTest', createNewCustomer); // test
app.post('/repairs/create-customer-repair', handleCustomerAndRepair);
app.post('/repairs/create-repair', handleRepairForCustomer ); 
app.post('/orders/create-customer-order', handleCreateCustomerOrder);
app.post('/orders/create-order', handleCreateOrderForCustomer);
app.post('/installs/create-customer-install', handleCreateCustomerInstall);
app.post('/create-install', handleCreateInstallForCustomer);



app.listen(PORT, () => {
    console.log(`Server listening on  http://localhost:${PORT}`);
});



const customers = await getCustomers();
console.log(customers);
