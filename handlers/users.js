import pkg from '@prisma/client';
import bcrypt from 'bcrypt';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

// async function createUser(userId, fullname, address, password) {
//   const hashedPassword = await bcrypt.hash(password, 10); // 10 adalah jumlah salt rounds

//   const user = await prisma.user.create({
//     data: {
//       userId,
//       fullname,
//       address,
//       password: hashedPassword,
//     },
//   });

//   return user;
// }

export const login = async(req, res) =>{
  const password = req.body.password
  const user = await prisma.user.findUnique({
    where:{
      id:req.body.id
    }
  })

  if(!user) return res.status(404).json({msg: "Can't find user"})
  const match = await bcrypt.compare(password, user.password)
  if(!match) return res.status(404).json({msg: "Wrong Password"})
  const id = user.id
  const name = user.fullname
  const address = user.address
  const date = user.createdAt
  res.status(200).json({data : {id,name,address,date},msg:"Login Success"})
}

export const show = async(req, res) => {
  const id = req.params.id

  const user = await prisma.user.findUnique({
    where :{
      id: Number(id)
    },
    include: {userBalances:true}
  })

  if(!user) { 
    return res.status(404).json({
        status: 'error',
        message: 'User not found'
    })
  }
  return res.json({
    status: 'success',
    message : '-',
    data : user
  })
}

// export {login}