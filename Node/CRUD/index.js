const {MongoClient, ObjectId} = require('mongodb');

 const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.3";
 const client = new MongoClient(uri);

 async function connectDB(){
    try{
        await client.connect();
        console.log('Database connected');

        const db = client.db('crud');    
        const collection = db.collection('students');

        //Create operation/insert query
        //const result = await collection.insertOne({name:'Shivam', course:'MCA', email:'shivam@123'});
        //console.log(result);

        //read / find 
        //const students = await collection.find().toArray();
        //console.log(students);

        //update
        // const updated = await collection.updateOne(
        // {_id: new ObjectId('682600147a2b37bd22bc635e')},
        // {$set:{name:'Sanket', email:'sanket@123'}}
        //  );
        // console.log(updated);

        //delete
        const deleted = await collection.deleteOne({name: 'Shivam'});
        console.log(deleted);

    }
    catch(err){
        console.log(err);
    }
    finally{
        await client.close();
        console.log('Connection closed');
    }
 }

 connectDB();

 //mongoose - ODM tool 