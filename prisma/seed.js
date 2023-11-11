import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {

  const faqs = [
    {
      question : "Bagaimana cara login DPLK pada Microsite?",
      answer : "Username 7 Digit CIF DPLK dan Password 6 Digit tanggal lahir + 7 digit CIF. Pengguna juga dapat melakukan cek saldo melalui aplikasi BRImo"
    },{
      question : "Kapan dana efektif masuk rekening?",
      answer : "H+1 Top up"
    },{
      question : " Bila peserta DPLK ingin melakukan auto debet saldo DPLK tiap bulan, kemanakah rekening tujuannya?",
      answer : "Untuk saat ini hanya tersedia di ATM dan BRIMO"
    },{
      question : "Program apa saja yang ditawarkan oleh DPLK BRI saat ini?",
      answer : "Manfaat Pensiun, Program Pensiun Iuran Pasti (PPIP), Manfaat Pensiun Lain, Dana Kompensasi Pasca Kerja dan Manfaat Lain, Dana Santunan Kesehatan"
    },{
      question : "Apakah manfaat menjadi peserta DPLK BRI?",
      answer : "Sebagai bagian dari perencanaan keuangan, Hasil investasi bebas pajak, Return Investasi yang optimal, Kemudahan dan flexibilitas dalam pemilihan paket investasi, Akses portofolio investasi ya"
    }
  ]

  const testi = [
    {
      name: "Prisca Yuliana",
      position: "MANAGER",
      testi: "Saya sangat senang dengan pelayanan yang diberikan oleh DPLK BRI. Tim mereka sangat profesional dan membantu saya dengan semua pertanyaan saya mengenai dana pensiun saya.",
      img: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      star: 5,
    },
    {
      name: "Ernita Deliami",
      position: "MANAGER",
      testi: "Saya sangat senang dengan pelayanan yang diberikan oleh DPLK BRI. Tim mereka sangat profesional dan membantu saya dengan semua pertanyaan saya mengenai dana pensiun saya.",
      img: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      star: 5,
    },
    {
      name: "Fachrie Malyan",
      position: "SENIOR MANAGER",
      testi: "Saya sangat senang dengan pelayanan yang diberikan oleh DPLK BRI. Tim mereka sangat profesional dan membantu saya dengan semua pertanyaan saya mengenai dana pensiun saya.",
      img: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      star: 4,
    },
    {
      name: "Ichsan Gifari",
      position: "OFFICER",
      testi: "Saya sangat senang dengan pelayanan yang diberikan oleh DPLK BRI. Tim mereka sangat profesional dan membantu saya dengan semua pertanyaan saya mengenai dana pensiun saya.",
      img: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      star: 5,
    },
  ]

  // const hashedPassword = await bcrypt.hash('password', 10);

  // const user = await prisma.user.create({
  //   data: {
  //     id: 5377114,
  //     fullname: 'Hans William',
  //     address: 'Hansville',
  //     password: hashedPassword,
  //     userBalances: {
  //       create: [
  //         {
  //               va: 124496,
  //               balance: '49.99',
  //               invPack: 'DPLK PSU'
  //         },
  //         {
  //               va: 114556,
  //               balance: '19.99',
  //               invPack: 'DPLK PSU'
  //         },
  //         // Add more UserBalance data here
  //       ],
  //     },
  //   },
  // });

  // add new record to faq table
    for (let faq of faqs){
      await prisma.faq.create({
        data  : faq
      })
      console.log('User created:', faq);
    }

// add new record to testimonial table
    for (let tes of testi){
      await prisma.testimonial.create({
        data  : tes
      })
      console.log('User created:', tes);
    }

  // await prisma.userBalance.create({
  //   data:{
  //     userId: 1122113,
  //     va: 224496,
  //     balance: '39.99',
  //     invPack: 'DPLK PSU'
  //   }
  // })

 
}

main()
  .catch((error) => {
    console.error('Error seeding data:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
