import Hero from "@/components/hero/hero";
import PostLayout from "@/components/postLayout/PostLayout";

// je moet die front page goed maken, het ziet er nu niet goed uit want je ziet alleen posts,
// je moet die posts cards stylen want het ziet er niet goed uit, en je moet een hero page
// maken met een highlighted post, kijk bijvoorbeeld naar deze website, je kan dit gewoon
// nakken.
// DIT GAAN WE PRECIES NABOUWEN -->  https://www.gameinformer.com/

// Vragen of het de juiste manier is met de component in de home page

export default async function Home({}) {
  return (
    <>
      <Hero />
      <PostLayout />
    </>
  );
}
