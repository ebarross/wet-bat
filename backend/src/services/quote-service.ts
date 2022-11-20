import prisma from "../database/prisma";

const getQuotes = () => {
  try {
    return prisma.quote.findMany({
      select: {
        id: true,
        name: true,
        departureLocation: true,
        destinationLocation: true,
        departureDate: true,
        returnDate: true,
        price: true,
      },
    });
  } catch (error) {
    throw error;
  }
};

const getQuoteById = (id: number) => {
  try {
    return prisma.quote.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        departureLocation: true,
        destinationLocation: true,
        departureDate: true,
        returnDate: true,
        travelers: true,
        transportation: {
          select: {
            name: true,
          },
        },
        contact: true,
        price: true,
      },
    });
  } catch (error) {
    throw error;
  }
};

export default {
  getQuotes,
  getQuoteById,
};
