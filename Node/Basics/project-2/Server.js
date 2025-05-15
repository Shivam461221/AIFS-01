const express = require('express');
const app = express();
const PORT = 3000;
const userRoutes = require('./userRoutes');

//server, routes, middleware 
app.use(express.json());  //middleware 

// app.get('/', (req, res)=>{
//     res.send('This is base URL');
// });

// app.post('/save',(req, res)=>{
//     console.log(req.body);
//     res.send('Request received');
// });

// app.get('/user',(req, res)=>{
//     const user = [
//         {name:'shivam', age:25},
//         {name:'sanket', age:24},
//         {name:'shubham', age:23}
//     ];
//     res.json(user);
// })

app.use('/user', userRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})