import Image from "next/image";
import React from "react";
import { Timeline } from "@/app/components/ui/timeline";
import ville1 from "../assets/ville1.jpg";
import ville2 from "../assets/ville2.jpg";
import ville3 from "../assets/ville3.jpg";
import ville4 from "../assets/ville4.jpg";
import foot1 from "../assets/foot1.jpg";
import foot2 from "../assets/foot2.jpg";
import foot3 from "../assets/foot3.jpg";
import foot4 from "../assets/foot4.jpg";
import print1 from "../assets/print1.jpg";
import print2 from "../assets/print2.png";
import print3 from "../assets/print3.jpg";
import print4 from "../assets/print4.png";

export function TimelineDemo() {
  const data = [
    {
      title: "TerraSenseIA",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal mb-8 leading-relaxed">
            Plongez-vous dans un monde où l'écologie et la neutralité carbone ne
            seraient plus des problèmes d'ordre mondial, une vision futuriste de
            ce que serais votre environement plus vert
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[ville1, ville2, ville3, ville4].map((imageSrc, index) => (
              <Image
                key={index}
                src={imageSrc}
                alt={`ville ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 h-32 md:h-48 lg:h-60 w-full shadow-xl"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Nos objectifs",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal mb-8 leading-relaxed">
            Participer à la préservation d'un monde et à la protection de
            l'environnement pour nos futures générations à venir, de manière
            totalement transparente et non invasive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[foot1, foot2, foot3, foot4].map((imageSrc, index) => (
              <Image
                key={index}
                src={imageSrc}
                alt={`foot ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 h-32 md:h-48 lg:h-60 w-full shadow-xl"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Nos actions",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal mb-4 leading-relaxed">
            Nous nous engageons à respecter nos engagements à travers cinq
            actions majeures.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm lg:text-base mb-2">
              👌 Une IA avec une empreinte carbone nulle
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm lg:text-base mb-2">
              📈 Impacter notre génération de manière active
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm lg:text-base mb-2">
              💶 Investir dans des actions pour le développement durable
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm lg:text-base mb-2">
              🚀 Continuer à développer nos outils pour aider la planète
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm lg:text-base">
              ⚙️ Proposer tous nos outils open source pour inciter à développer
              plus vert
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[print1, print2, print3, print4].map((imageSrc, index) => (
              <Image
                key={index}
                src={imageSrc}
                alt={`print ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 h-32 md:h-48 lg:h-60 w-full shadow-xl"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
