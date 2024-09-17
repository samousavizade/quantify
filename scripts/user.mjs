import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'S. A. Mousavizade',
            email: 's.a.m@gmail.com',
            password: '192837465AhurA'
        },
    })
    console.log("Generated user: ", user)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })