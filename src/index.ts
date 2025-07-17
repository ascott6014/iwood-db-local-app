import './config'; // Load environment variables
import { getCustomers, addCustomer } from './controllers/testCustomer'
// import express, {Express} from 'express';
// import { handleAnswer } from './controllers/QuizController';



// const PORT = process.env.PORT;
// const app: Express = express();
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static('public', {extensions: ['html']}));

// // Define the router for submitting ansers
// app.post('/answers', handleAnswer);


// app.listen(PORT, () => {
//     console.log(`Server listening on  http://localhost:${PORT}`);
// });

// console.log("...");
async function main() {
    await addCustomer('Alice', 'Johnson', '100 Oak St', 'Little Rock', 'AR', '72201', '555-1234', 'alice.johnson@example.com', 'Prefers evening calls');
    const customers = await getCustomers();
    console.log(customers);
}
main().catch(console.error);