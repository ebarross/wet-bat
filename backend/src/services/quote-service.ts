import prisma from "../database/prisma";

const getQuotes = () => {
  return prisma.quote.findMany();
};

const getQuoteById = (id: number) => {
  return prisma.quote.findFirst({ where: { id } });
};

export default {
  getQuotes,
  getQuoteById,
};
