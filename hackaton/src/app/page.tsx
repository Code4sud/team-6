import React from "react";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/app/components/ui/background-beams-with-collision";
import { TimelineDemo } from "./components/TimelineDemo";
import GlobeDemo from "./components/GlobeDemo";
import { CompareDemo } from "./components/CompareDemo";

export default function Home() {
  return (
    <div className="dark">
      <BackgroundBeamsWithCollisionDemo />
      <TimelineDemo />
      <GlobeDemo />
      <section className="w-full min-h-screen flex flex-col gap-4 items-center justify-center bg-black">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white pb-10">
          TerraSenseAI réinvente <br /> votre environnement
        </h2>
        <CompareDemo />
      </section>
      <Footer />
    </div>
  );
}

function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className="min-h-screen">
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        TerraSense <br />
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Redécouvrez votre environnement</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Redécouvrez votre environnement</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1 : À propos */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">TerraSense</h3>
            <p className="text-sm leading-relaxed">
              Nous utilisons l'intelligence artificielle pour créer des
              solutions innovantes et durables pour notre planète. Ensemble,
              construisons un avenir plus vert.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Liens rapides
            </h4>
            <ul className="space-y-2">
              {["Accueil", "Nos solutions", "À propos", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Colonne 3 : Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Restez informé
            </h4>
            <p className="text-sm mb-4">
              Abonnez-vous à notre newsletter pour recevoir les dernières
              actualités et innovations en matière d'IA écologique.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-grow px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-r-md hover:bg-green-600 transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 TerraSense. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
