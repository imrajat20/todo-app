import { MongoClient, ObjectId } from "mongodb";


const handler = async (req, res) => {

    if(req.method === 'PUT'){
        const { id } = req.body;

        const client = await MongoClient.connect('mongodb+srv://new_user:amityadav@project1.s2veazo.mongodb.net/todos?retryWrites=true&w=majority&appName=project1');
        const db = client.db();
        const todosCollection = db.collection('todos');
        await todosCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { status: 'completed'} }
          );
        
        res.status(201).json({message: 'status updated!'});
    }

};

export default handler;