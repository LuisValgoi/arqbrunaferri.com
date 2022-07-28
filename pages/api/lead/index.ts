import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!['POST', 'GET'].includes(req.method!)) {
      return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }

    if (req.method === 'GET') {
      const leads = await prisma.lead.findMany();
      res.status(200).json(leads);
    }

    if (req.method === 'POST') {
      const data = JSON.parse(req.body);
      const savedData = await prisma.lead.create({ data });
      res.json(savedData);
    }
  } catch (error) {
    return res.status(500).json({ message: `${error} - Internal Server Error NEXTJS` });
  }
};
