import Image from "next/image";


export default function Construisons() {
  return (
    <main>
      <section className="flex flex-col gap-[60px] relative bg-gradient-to-b from-0% from-custom_blue_black to-10% to-white py-5">
        <div className=" flex flex-col items-center justify-center gap-8 m-5">
          <h1 className="text-xl font-bold">Construisons Ensemble</h1>
          <h3>Vous avez une idée précise ?</h3>
          <p className="text-xs">Parfait ! Nous aimons travailler avec des clients qui savent exactement ce qu'ils veulent. Partagez avec nous vos spécifications, vos idées de design, les fonctionnalités que vous imaginez, et même les exemples de sites que vous admirez. Nous sommes ici pour transformer votre vision en réalité. Pour démarrer, veuillez remplir notre formulaire de contact ou nous envoyer un email à [adresse email]. Nous vous répondrons rapidement pour fixer une première réunion de consultation.</p>
        </div>
        <div className="p-3 gap-8 flex flex-col items-center justify-center text-center rounded-[10px] bg-custom_yellow z-20 m-5">
          <h2 className="font-bold">Besoin d'inspiration ou de conseils ?</h2>
          <p className="text-xs">Pas de problème ! Si vous n'êtes pas sûr de ce que vous voulez, ou si vous avez besoin d'aide pour affiner vos idées, notre équipe de créatifs et de techniciens est à votre service. Nous pouvons vous aider à définir les objectifs de votre site, choisir le bon style visuel, et planifier les fonctionnalités qui engageront vos visiteurs. Pour commencer, contactez-nous à [adresse email], et nous planifierons une session de brainstorming pour explorer les possibilités.</p>
        </div>
        <div className="absolute bg-[url('/images/banière.png')] bg-cover bg-center h-[118px] w-full bottom-0 z-10 opacity-10">
        </div>
      </section>
      <section className="relative bg-gradient-to-t from-0% from-custom_blue_black to-10% to-white py-5">
        <div className="flex flex-col gap-[50px] justify-center items-center m-5">
          <h2 className="text-xl font-bold">Pourquoi nous choisir ?</h2>
          <li className="list-disc"><span className="underline">Innovation et Créativité :</span> Notre passion pour le design innovant et créatif nous permet de proposer des solutions sur mesure qui captivent et convertissent. Chaque projet est une opportunité de repousser les limites de ce qui est possible.</li>
          <li className="list-disc"><span className="underline">Accompagnement Sur-Mesure :</span> Nous sommes à vos côtés à chaque étape de votre projet, du concept initial au lancement final. Nous misons sur une communication transparente et régulière pour garantir que chaque détail reflète vos attentes.</li>
          <li className="list-disc"><span className="underline">Technologie Avancée :</span> En exploitant les technologies les plus récentes, nous assurons que votre site ne soit pas seulement visuellement attrayant, mais également performant et sécurisé, répondant aux standards les plus élevés du développement web.</li>
        </div>
        <div className="p-3 gap-8 flex flex-col items-center justify-center text-center rounded-[10px] bg-custom_yellow z-20 m-5">
          <h2 className="font-bold">Prêt à commencer ?</h2>
          <p className="text-xs">Nous serions ravis de discuter de votre projet. Contactez-nous aujourd'hui à [adresse email] ou via notre formulaire en ligne pour fixer un rendez-vous gratuit. Votre projet mérite ce qu'il y a de meilleur, et nous sommes ici pour vous aider à le réaliser.</p>
          <div className="flex justify-center items-center text-xs gap-5">
            <div className="flex flex-col items-center justify-cente gap-2">
              <Image src={"/images/innovation.png"} alt="innovation_logo" width={100} height={100} className="w-11" />
              <h3>Innovation</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Image src={"/images/fiabilité.png"} alt="security_logo" width={100} height={100} className="w-11" />
              <h3>Fiabilité</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Image src={"/images/creativité.png"} alt="creation_logo" width={100} height={100} className="w-11" />
              <h3>Créativité</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Image src={"/images/personnalisation.png"} alt="personnalisation_logo" width={100} height={100} className="w-11" />
              <h3>Personnalisation</h3>
            </div>
          </div>
        </div>
        <div className="absolute bg-[url('/images/banière.png')] bg-cover bg-center h-[118px] w-full bottom-40 z-10 opacity-10">
        </div>
      </section>
    </main >
  )
}