import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors';
import { authenticateToken } from './middleware/auth-middleware';

const app = express();
const PORT = 3002;
const BACKEND_URL = 'http://localhost:5000';

app.use(cors());
app.use(express.json());

app.post('/login', async (req: Request, res: Response) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/login`, req.body);
        res.json(response.data);
    } catch (error: any) {
        const status = error?.response?.status || 401;
        const message = error?.response?.data?.message || 'Invalid credentials';
        res.status(status).send(message);
    }
});

app.get('/recipes', authenticateToken, async (req: Request, res: Response) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/recipes`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching recipes');
    }
});

app.get('/recipes/:id', authenticateToken, async (req: Request, res: Response) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/recipes/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching recipe detail');
    }
});

app.get('/products', authenticateToken, async (req: Request, res: Response) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/products`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching products');
    }
});

app.get('/users', async (req: Request, res: Response) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/users`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching users');
    }
});

app.get('/', (req, res) => {
    res.send({ message: 'Web BFF is running' });
});

app.listen(PORT, () => console.log(`Web BFF running on port ${PORT}`));
