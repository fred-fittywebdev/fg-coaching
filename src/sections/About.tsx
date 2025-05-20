import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import MapImage from "@/assets/images/map.png";
import { div } from "motion/react-client";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";

const toolBoxArray = [
  {
    title: "Elastiques",
    icon: "",
  },
  {
    title: "Musculation",
    icon: "",
  },
  {
    title: "TRX",
    icon: "",
  },
  {
    title: "Mobilité",
    icon: "",
  },
  {
    title: "Poid de corps",
    icon: "",
  },
  {
    title: "Running",
    icon: "",
  },
  {
    title: "Exergaming",
    icon: "",
  },
];

const hobbies = [
  {
    title: "Code",
    emoji: "💻",
  },
  {
    title: "Lire",
    emoji: "📚",
  },
  {
    title: "Cuisiner",
    emoji: "🍳",
  },
  {
    title: "Jouer",
    emoji: "🎮",
  },
  {
    title: "Musique",
    emoji: "🎸",
  },
  {
    title: "crossfit",
    emoji: "🏋️",
  },
  {
    title: "Marcher",
    emoji: "🥾",
  },
];

export const AboutSection = () => {
  return (
    <section className="section bg-stone-900">
      <div className="container">
        <h2 className="text-4xl text-white md:text-7xl lg:text-8xl mb-10">
          Votre coach
        </h2>
        <div className="flex flex-col gap-6">
          <div className=" border border-gray-200 rounded-lg p-6 h-[320px] overflow-hidden">
            <CardHeader
              title="Mes lectures"
              description="Découvrez les livres qui façonnent mon expertise"
            />
            <div className="flex flex-col">
              <div className="w-40 mx-auto mt-8">
                <Image src={bookImage} alt="couvertyure de livre" />
              </div>
            </div>
          </div>
          <div className=" border border-gray-200 rounded-lg p-0 h-[320px]">
            <CardHeader
              title="Mes outils"
              description="Découvrez les outils que j'utilise lors de mes séances !"
              className="px-6 pt-6"
            />
            <ToolBoxItems items={toolBoxArray} className="mt-6" />
            <ToolBoxItems
              items={toolBoxArray}
              className="mt-6"
              itemsWrapperClassname="-translate-x-1/2"
            />
          </div>
          <div className="  border border-gray-200 rounded-lg p-6 h-[320px]">
            <CardHeader
              title="Mes loisirs"
              description="Découvrez ce que j'aime et ce que je fais en dehors des coachings"
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </div>
          <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div>
              <Image src={MapImage} alt="carte" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
