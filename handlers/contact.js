import pkg from '@prisma/client';

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const store = async (req, res) => {

    const {
        isClient,
        firstName,
        lastName,
        email,
        phone,
        typeAssistance,
        message,
    } = req.body;

    if( isClient === "" || !firstName || !lastName || !email || !phone || !typeAssistance || !message){
        return res.status(400).json({
            status: 'error',
            message: 'Semua kolom tolong di isi!'
        })
    }

    const forms =  await prisma.form.create({
        data:{
            isClient,
            firstName,
            lastName,
            email,
            phone,
            typeAssistance,
            message,
        }
    })

    return res.json({
        status: 'success',
        message: 'Pesan anda telah dikirim',
        data: forms
    });

}

export {store}