import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://singhss19:12345@cluster0.rjmzfjt.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL,{ useNewUrlParser: true})
        console.log("connected") ;
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;