import prisma from "./prisma";
import { Prisma } from "@prisma/client";

const quotes: Prisma.QuoteCreateInput[] = [
  {
    name: "John Doe",
    departureLocation: "Rio de Janeiro",
    destinationLocation: "London",
    departureDate: new Date("2023-01-10 05:40:00"),
    returnDate: new Date("2023-01-30 10:30:00"),
    travelers: 2,
    transportation: { create: { name: "Rental car" } },
    contact: "john@gmail.com",
    price: 876,
  },
  {
    name: "Mary Jane",
    departureLocation: "Rome",
    destinationLocation: "Tokyo",
    departureDate: new Date("2023-03-12 11:30:00"),
    returnDate: new Date("2023-03-20 01:00:00"),
    travelers: 5,
    transportation: { create: { name: "Train" } },
    contact: "mary@gmail.com",
    price: 1495,
  },
  {
    name: "Ted Mosby",
    departureLocation: "New York",
    destinationLocation: "Paris",
    departureDate: new Date("2022-12-01 02:00:00"),
    returnDate: new Date("2022-12-30 15:00:00"),
    travelers: 4,
    transportation: { create: { name: "Bicycle" } },
    contact: "ted@gmail.com",
    price: 1250,
  },
  {
    name: "Brad Sid",
    departureLocation: "London",
    destinationLocation: "São Paulo",
    departureDate: new Date("2023-02-15 02:00:00"),
    returnDate: new Date("2023-02-20 10:00:00"),
    travelers: 2,
    transportation: { connect: { id: 1 } },
    contact: "brad@gmail.com",
    price: 1208,
  },
  {
    name: "Kate Luz",
    departureLocation: "Moscow",
    destinationLocation: "Brussels",
    departureDate: new Date("2023-04-03 07:00:00"),
    returnDate: new Date("2023-04-08 18:00:00"),
    travelers: 6,
    transportation: { connect: { id: 2 } },
    contact: "kate@gmail.com",
    price: 1842,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const q of quotes) {
    const quote = await prisma.quote.create({
      data: q,
    });
    console.log(`Created quote with id: ${quote.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
