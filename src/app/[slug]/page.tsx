import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

import ConsumptionMethodOption from "./components/consumption-method-option";

// Criar uma interface para definir os parâmetros que a página vai receber como props
interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

//Este componente é async por ser um server component

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;

  const restaurant = await getRestaurantBySlug(slug);

  if (!restaurant) {
    return notFound();
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      {/* LOGO E TÍTULO */}
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />

        <h2 className="font-semibold">{restaurant.name} </h2>
      </div>

      {/* BEM-VINDO */}
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja Bem-Vindo</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos oferecer
          praticidade e sabor em cada detalhe!
        </p>
      </div>

      <div className="grid grid-cols-2 pt-14">
        <ConsumptionMethodOption
          buttonText="Para comer aqui"
          imageAlt="Comer aqui"
          imageUrl="/dine_in.png"
          option="DINE_IN"
          slug={slug}
        />
        <ConsumptionMethodOption
          buttonText="Para levar"
          imageAlt="Para levar"
          imageUrl="/takeaway.png"
          option="TAKEAWAY"
          slug={slug}
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
