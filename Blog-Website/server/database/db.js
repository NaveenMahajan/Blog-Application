import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-mteb38p-shard-00-00.r1unlkt.mongodb.net:27017,ac-mteb38p-shard-00-01.r1unlkt.mongodb.net:27017,ac-mteb38p-shard-00-02.r1unlkt.mongodb.net:27017/?ssl=true&replicaSet=atlas-1437kb-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;