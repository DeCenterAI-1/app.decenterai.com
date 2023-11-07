import prisma from '@lib/prisma'

export type userType = {
  name: string
  email: string
  profileImage: string
  userName: string
}

export async function POST(req: Request) {
  const user_dto: userType = await req.json()
  const user = await prisma.user.upsert({
    where: {
      email:user_dto.email,
    },
    create: user_dto,
    update: user_dto,
  })
  return new Response(JSON.stringify({ status: 200 , user}))
}
