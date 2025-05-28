import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import initMiddleware from '@/lib/init-middleware';

// Defina as origens permitidas
const cors = initMiddleware(
  Cors({
    origin: ['https://seu-frontend.netlify.app/'], // ou '*', se quiser liberar para todos (não recomendado em produção)
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await cors(req, res); // aplica o middleware de CORS

  res.status(200).json({ message: 'Hello from API with CORS!' });
}