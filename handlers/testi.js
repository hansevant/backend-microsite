import pkg from '@prisma/client';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const index = async (req, res) => {

    const testimonial = await prisma.testimonial.findMany()
    
     res.json({
        status: 'success',
        message : 'get all faq',
        data : testimonial
      })

}

export {index}