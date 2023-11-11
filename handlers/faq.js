import pkg from '@prisma/client';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const index = async (req, res) => {

    const faq = await prisma.faq.findMany()
    
     res.json({
        status: 'success',
        message : 'get all faq',
        data : faq
      })

}

export {index}