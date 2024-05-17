import Image from "next/image";
import Link from "next/link";


export default function Collaborateurs() {
  return (
    <main>
      <section id="intro_collab" className="bg-gradient-to-b from-0% from-custom_blue_black to-10% to-white">
        <div className="flex flex-col items-center gap-[43px]">
          <h1 className="font-bold text-4xl mt-[43px]">Collaborateurs</h1>
          <p className="text-center w-[348px]">Nous transformons vos idées en expériences numériques innovantes, capturant l'attention de votre public cible.</p>
        </div>
        <div className="relative w-full h-[118px]">
          <div className="absolute inset-0 bg-[url('/images/banière.png')] bg-cover bg-center opacity-10"></div>
          <div className="relative flex justify-center items-center w-full h-full">
            <Link href="/nous-contacter" className="flex justify-center items-center w-[343px] h-[41px] bg-custom_yellow rounded-[5px] shadow-lg z-10">
              Contactez-nous &rarr;
            </Link>
          </div>
        </div>
      </section>


      <section id="collab_1_mobile" className=" flex flex-col items-center gap-[22px] px-[10px] py-5 relative lg:flex-row">
        <div className="flex flex-col gap-[10px] items-center">
          <div className="rounded-full bg-black w-fit">
            <Image src={"/images/logoBP.png"} alt="logo_baptiste_petit" width={55} height={55} className="p-1" />
          </div>
          <h2>Baptiste Petit</h2>
        </div>
        <div className="flex flex-col gap-[22px] justify-center items-center">
          <p className="w-[500px] text-center">Un développeur web compétent en front et back-end, alliant expertise technique et créativité.</p>
          <div>
            <Link href="/nous-contacter" className="flex justify-center items-center w-[343px] h-[41px] bg-custom_yellow rounded-[5px] shadow-lg z-10">
              Mon Site
            </Link>
          </div>
        </div>
        <Image src={"/images/cloud.png"} alt="cloud_logo" width={50} height={50} className=" absolute opacity-10 top-5 right-16 sm:right-32" />
      </section>

      <section id="collab_2_mobile" className=" flex flex-col items-center gap-[22px] px-[10px] py-5 relative">
        <div className="flex flex-col gap-[10px] items-center">
          <div className="rounded-full bg-black w-fit">
            <Image src={"/images/logoBD2.png"} alt="logo_benjamin_desmet" width={55} height={55} className="p-1" />
          </div>
          <h2>Benjamin Desmet</h2>
        </div>
        <p className="w-[500px] text-center">En tant que développeur web expérimenté, j'excelle aussi bien en front-end qu'en back-end, combinant une solide maîtrise technique avec une grande créativité. Je suis prêt à mettre mes compétences à votre disposition pour assurer le succès de votre projet.</p>
        <div>
          <Link href="/nous-contacter" className="flex justify-center items-center w-[343px] h-[41px] bg-custom_yellow rounded-[5px] shadow-lg z-10">
            Mon Site
          </Link>
        </div>
        <Image src={"/images/planet.png"} alt="cloud_logo" width={50} height={50} className=" absolute opacity-10 top-5 left-16 sm:left-32" />
      </section>

      <section id="collab_3_mobile" className=" flex flex-col items-center gap-[22px] px-[10px] py-5 relative">
        <div className="flex flex-col gap-[10px] items-center">
          <div className="rounded-full bg-black w-fit">
            <Image src={"/images/logoGB.png"} alt="logo_gabin_buignet" width={55} height={55} className="p-1" />
          </div>
          <h2>Gabin Buignet</h2>
        </div>
        <p className="w-[500px] text-center">Passionné par le codage informatique depuis de nombreuses années, j'ai toujours eu une prédilection pour le développement web, tant pour l'aspect design que pour le côté technique. Je serais ravi de mettre mes compétences à votre service pour mener à bien votre projet.</p>
        <div>
          <Link href="/nous-contacter" className="flex justify-center items-center w-[343px] h-[41px] bg-custom_yellow rounded-[5px] shadow-lg z-10">
            Mon Site
          </Link>
        </div>
        <Image src={"/images/client.png"} alt="cloud_logo" width={50} height={50} className=" absolute opacity-10 top-5 right-16 sm:right-32" />
      </section>

      <section id="collab_4_mobile" className=" flex flex-col items-center gap-[22px] px-[10px] py-5 relative bg-gradient-to-t from-0% from-custom_blue_black to-10% to-white">
        <div className="flex flex-col gap-[10px] items-center">
          <div className="rounded-full bg-black w-fit">
            <Image src={"/images/logoBD2.png"} alt="logo_maxime_petit" width={55} height={55} className="p-1" />
          </div>
          <h2>Maxime Petit</h2>
        </div>
        <p className="w-[500px] text-center">Un développeur web compétent en front et back-end, alliant expertise technique et créativité.</p>
        <div>
          <Link href="/nous-contacter" className="flex justify-center items-center w-[343px] h-[41px] bg-custom_yellow rounded-[5px] shadow-lg z-10">
            Mon Site
          </Link>
        </div>
        <Image src={"/images/server.png"} alt="cloud_logo" width={50} height={50} className=" absolute opacity-10 top-5 left-16 sm:left-32" />
      </section>
    </main>
  )
}