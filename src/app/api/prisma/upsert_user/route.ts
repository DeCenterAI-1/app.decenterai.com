import prisma from '@lib/prisma'
import {jsonify} from "@utils/json";
import {NextResponse} from 'next/server';

export type userType = {
  name: string
  email: string
  profileImage: string
  userName: string
}

export async function POST(req: Request) {
  const user_dto: userType = await req.json()
  try {
    const user = await prisma.user.upsert({
      where: {
        email:user_dto.email,
      },
      create: user_dto,
      update: user_dto,
    })
    // return new NextResponse("Success", {status: 200})
    return NextResponse.json(user); //new Response(jsonify({ status: 201 , user}))
  }catch (e) {
    console.error({upsert: e})
    // return new NextResponse("Error", { status: 400 })
    return new Response(jsonify({status: 500, e}))
  }
}
