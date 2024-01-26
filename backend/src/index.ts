import express, { Request, Response} from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/test', async (req: Request, res: Response) => {
  res.json({ message: 'Hello World!'});
});

mongoose.connect(process.env.MONGO_URL as string)
    .then(() => {
        console.log("Connected to MongoDB");

        app.listen(process.env.PORT, () => {
            console.log("Server running on port", process.env.PORT);
        });
    })
    .catch((err) => {
        console.log(err);
});
