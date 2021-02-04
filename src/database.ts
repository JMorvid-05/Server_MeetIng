import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/try', {
            useUnifiedTopology: true,
            useNewUrlParser: true
            
            
        });
        console.log('>>> Database connected');
    }
    catch (e){
        console.log('Error: ',e);
    }
}
