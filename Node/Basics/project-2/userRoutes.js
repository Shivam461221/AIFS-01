const express = require('express');

const router = express.Router();

router.get('/all', (req, res)=>{
    const user = [
        {name:'shivam', age:25},
        {name:'sanket', age:24},
        {name:'shubham', age:23}
    ];

    res.json(user);
});
router.post('/viewUser', (req, res)=>{
    console.log(req.body);
    res.send('Success');
});



module.exports = router;