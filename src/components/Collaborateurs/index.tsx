import Image from "next/image";
import Link from "next/link";


export default function Collaborateurs() {
  return (
    <main>
      <section id="intro_collab" className="bg-gradient-to-b from-0% from-custom_blue_black to-10% to-white flex justify-around items-center relative">
        <Image src={"/images/planet.png"} alt="world_wide_web" width={100} height={100} className="hidden lg:flex opacity-10 w-52 h-52"/>
        <div className="flex flex-col">
          <div className="flex flex-col items-center gap-[43px]">
            <h1 className="font-bold text-4xl mt-[43px]">Collaborateurs</h1>
            <p className="text-center w-[348px]">Nous transformons vos idées en expériences numériques innovantes, capturant l'attention de votre public cible.</p>
          </div>
          <div className=" w-full h-[118px]">
            <div className="absolute inset-0 bg-[url('/images/banière.png')] bg-cover bg-center opacity-10 lg:hidden h-[118px] top-[200px]"></div>
            <div className="relative flex justify-center items-center w-full h-full">
              <Link href="/nous-contacter" className="flex justify-center items-center w-[343px] h-[41px] bg-custom_yellow rounded-[5px] shadow-lg z-10">
                Contactez-nous &rarr;
              </Link>
            </div>
          </div>
        </div>
        <Image src={"/images/planet.png"} alt="world_wide_web" width={100} height={100} className="hidden lg:flex opacity-10 w-52 h-52"/>
      </section>

      <div className="hidden lg:flex relative">
        <hr className=" custom-dashed-border my-4 absolute left-[400px]" />
      </div>
      <section id="collab_1" className=" flex flex-col items-center gap-[22px] px-[10px] py-5 relative lg:flex-row lg:h-[320px] justify-center lg:gap-52">
        <div className="flex flex-col gap-[10px] items-center">
          <div className="rounded-full bg-black w-fit">
            <Image src={"/images/logoBP.png"} alt="logo_baptiste_petit" width={100} height={100} className="p-1 w-14 md:w-20" />
          </div>
          <h2>Baptiste Petit</h2>
        </div>
        <div className="flex flex-col gap-[22px] justify-center items-center">
          <p className="w-[300px] md:w-[500px] text-center">Je suis Baptiste Petit, fondateur de PSDOweb, une entreprise dédiée à la mise en relation de développeurs web freelances et de clients ayant des besoins technologiques spécifiques. Notre mission est de connecter des talents qualifiés avec des projets ambitieux, en garantissant qualité, sécurité et originalité. Ensemble, nous construisons le web de demain.</p>
          <div>
            <Link href="/nous-contacter" className="flex justify-center items-center w-[343px] h-[41px] bg-custom_yellow rounded-[5px] shadow-lg z-10">
              Portfolio
            </Link>
          </div>
        </div>
        <Image src={"/images/cloud.png"} alt="cloud_logo" width={50} height={50} className=" absolute opacity-10 top-5 lg:top-56 right-16 sm:right-32" />
        <Image src={"/images/client.png"} alt="client_logo" width={50} height={50} className="hidden absolute opacity-10 top-5 lg:flex left-16 sm:left-32" />
      </section>


      <div className=" hidden lg:flex relative">
        <hr className="custom-dashed-border my-4 absolute left-[400px]" />
      </div>
      <section id="collab_2" className=" flex flex-col items-center gap-[22px] px-[10px] py-5 relative lg:flex-row-reverse lg:h-[320px] justify-center lg:gap-52">
        <div className="flex flex-col gap-[10px] items-center">
          <div className="rounded-full bg-black w-fit">
            <Image src={"/images/logoBD2.png"} alt="logo_benjamin_desmet" width={100} height={100} className="p-1 w-14 md:w-20" />
          </div>
          <h2>Benjamin Desmet</h2>
        </div>
        <div className="flex flex-col gap-[22px] justify-center items-center">
          <p className="w-[300px] md:w-[500px] text-center">En tant que développeur web expérimenté, j'excelle aussi bien en front-end qu'en back-end, combinant une solide maîtrise technique avec une grande créativité. Je suis prêt à mettre mes compétences à votre disposition pour assurer le succès de votre projet.</p>
          <div>
            <Link href="/nous-contacter" className="flex justify-center items-center w-[343px] h-[41px] bg-custom_yellow rounded-[5px] shadow-lg z-10">
            Portfolio
            </Link>
          </div>
        </div>
        <Image src={"/images/planet.png"} alt="world_wide_web" width={50} height={50} className=" absolute opacity-10 top-5 lg:bottom-56 left-16 sm:right-32 lg:left-[88%]" />
        <Image src={"/images/server.png"} alt="server_logo" width={50} height={50} className="hidden absolute opacity-10 bottom-5 lg:flex left-16 sm:left-32" />
      </section>


      <div className="hidden lg:flex relative">
        <hr className=" custom-dashed-border my-4 absolute left-[400px]" />
      </div>
      <section id="collab_3" className=" flex flex-col items-center gap-[22px] px-[10px] py-5 relative lg:flex-row lg:h-[320px] justify-center lg:gap-52">
        <div className="flex flex-col gap-[10px] items-center">
          <div className="rounded-full bg-black w-fit">
            <Image src={"/images/logoGB.png"} alt="logo_gabin_buignet" width={100} height={100} className="p-1 w-14 md:w-20" />
          </div>
          <h2>Gabin Buignet</h2>
        </div>
        <div className="flex flex-col gap-[22px] justify-center items-center">
          <p className="w-[300px] md:w-[500px] text-center">Passionné par le codage informatique depuis de nombreuses années, j'ai toujours eu une prédilection pour le développement web, tant pour l'aspect design que pour le côté technique. Je serais ravi de mettre mes compétences à votre service pour mener à bien votre projet.</p>
          <div>
            <Link href="/nous-contacter" className="flex justify-center items-center w-[343px] h-[41px] bg-custom_yellow rounded-[5px] shadow-lg z-10">
            Portfolio
            </Link>
          </div>
        </div>
        <Image src={"/images/cloud.png"} alt="cloud_logo" width={50} height={50} className=" absolute opacity-10 top-5 lg:top-56 right-16 sm:right-32" />
        <Image src={"/images/client.png"} alt="client_logo" width={50} height={50} className="hidden absolute opacity-10 top-5 lg:flex left-16 sm:left-32" />
      </section>


      <div className=" hidden lg:flex relative">
        <hr className="custom-dashed-border my-4 absolute left-[400px]" />
      </div>
      <section id="collab_4" className=" flex flex-col items-center gap-[22px] px-[10px] py-5 relative lg:flex-row-reverse lg:h-[320px] justify-center lg:gap-52  bg-gradient-to-t from-0% from-custom_blue_black to-10% to-white ">
        <div className="flex flex-col gap-[10px] items-center">
          <div className=" bg-black w-fit">
            <Image src={"/images/logoMP.png"} alt="logo_maxime_petit" width={100} height={100} className="p-1 w-14 md:w-20" />
          </div>
          <h2>Maxime Petit</h2>
        </div>
        <div className="flex flex-col gap-[22px] justify-center items-center">
          <p className="w-[300px] md:w-[500px] text-center">Je suis un développeur web spécialisé en front-end et back-end, alliant expertise technique et créativité pour livrer des sites à la fois performants et esthétiquement plaisants. Ma maîtrise de JavaScript, React et Node.js m'aide à trouver des solutions pour correspondre à vos attentes.</p>
          <div>
            <Link href="/nous-contacter" className="flex justify-center items-center w-[343px] h-[41px] bg-custom_yellow rounded-[5px] shadow-lg z-10">
            Portfolio
            </Link>
          </div>
        </div>
        <Image src={"/images/planet.png"} alt="world_wide_web" width={50} height={50} className=" absolute opacity-10 top-5 lg:bottom-56 left-16 sm:right-32 lg:left-[88%]" />
        <Image src={"/images/server.png"} alt="server_logo" width={50} height={50} className="hidden absolute opacity-10 bottom-5 lg:flex left-16 sm:left-32" />
      </section>
    </main>
  )
}