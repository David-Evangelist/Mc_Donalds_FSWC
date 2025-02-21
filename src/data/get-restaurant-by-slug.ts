import { db } from "@/lib/prisma";

// Buscar o restaurante no banco de dados
export const getRestaurantBySlug = async (slug: string) => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      slug,
    },
  });

  return restaurant;
};
