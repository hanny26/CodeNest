const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
    }
};

module.exports = connectDB;



// mongodb+srv://hannyvyas:hanny9054@cluster0.f9odr8p.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0"