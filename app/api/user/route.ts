import { prisma } from '@/lib/prisma';
import { userSave } from '@/lib/userSchema';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json(); // Await the request body as JSON
    const validation = userSave.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          message: "Invalid user data",
          errors: validation.error.errors,
        },
        { status: 400 }
      );
    }

    const { username, password, firstname, lastname, email } = validation.data;

    const user = await prisma.user.create({
      data: {
        username: username || "",
        password: password || "",
        firstname: firstname || "",
        lastname: lastname || "",
        email: email || "",
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
};
