import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes';

const app = express();

const PORT: string | number = process.env.PORT || 4000

app.use(cors());
app.use(router);


const MONGO_URL: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.6liv3rn.mongodb.net/?retryWrites=true&w=majority'`
//const options = { useNewUrlParser: true, useUnifiedTopology: true }
//mongoose.set("useFindAndModify", false)


mongoose
    .connect(MONGO_URL) //.connect(MONGO_URL, options)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
    })
    .catch(error => {
        throw error
    })