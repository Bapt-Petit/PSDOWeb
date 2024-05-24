import Link from "next/link";

export default function Cgu() {
  return (
    <main className="overflow-hidden ">
      <section className="flex flex-col items-center py-5 gap-[10px]">
        <h1 className="text-2xl font-semibold text-center">Conditions Générales<br />d&apos;Utilisation<br />(CGU)</h1>
        <p className="text-xs text-center">Découvrez nos mentions légales pour en savoir plus sur les <br />conditions d&apos;utilisation relatives à notre entreprise.</p>
        <div>
          <Link href="/nous-contacter" className="flex justify-center items-center w-[167px] h-[35px] bg-custom_yellow rounded-[5px] shadow-lg z-10 text-xs">
            Contactez-nous →
          </Link>
        </div>
      </section>
      <div className=" bg-[url('/images/banière.png')] bg-cover bg-center h-[82px] w-full bottom-0 z-10 opacity-10"></div>
      <section className="py-3 px-5 flex flex-col items-center gap-3">
        <h2 className="font-bold text-xl">Article 1: Objet</h2>
        <div className="flex flex-col gap-6 text-sm lg:w-full lg:text-center">
          <p>Les présentes &laquo; conditions générales d&apos;utilisation &raquo; ont pour objet l&apos;encadrement
            juridique des modalités de mise à disposition des services du site PSDOweb et leur
            utilisation par &laquo; l&apos;Utilisateur &raquo;.</p>
          <p>Les CGU doivent être acceptées par tout Utilisateur souhaitant accéder au site. Elles
            constituent le contrat entre le site et l&apos;Utilisateur. L’accès au site par l&apos;Utilisateur
            signifie son acceptation des présentes CGU.</p>
          <p>En cas de non-acceptation des CGU stipulées dans le présent contrat, l&apos;Utilisateur se
            doit de renoncer à l&apos;accès des services proposés par le site.</p>
        </div>
      </section>
      <div className="relative">
        <hr className=" custom-dashed-border-mobil my-4 absolute left-16 sm:left-24 md:left-28 lg:left-56" />
      </div>

      <section className="py-3 px-5 flex flex-col items-center gap-3">
        <h2 className="font-bold text-xl">Article 2 : Mentions légales</h2>
        <div className="flex flex-col gap-6 text-sm lg:w-full lg:text-center">
          <p>Le site PSDOweb est édité par Petit Baptiste, SARL au capital de 100€ , dont le siège
            social est situé à 2A rue de l’orangerie , 60000 Beauvais.</p>
          <p>Numéro de téléphone :06-82-99-85-27 <br />Adresse e-mail : baptiste.petit@psdoweb.com <br />Numéro d&apos;inscription au RCS : [Numéro d&apos;immatriculation] <br />Numéro de TVA intracommunautaire : [Numéro de TVA]</p>
          <p>Le Directeur de la publication est Petit Baptiste.</p>
          <p>Le site PSDOweb est hébergé par [Nom de l&apos;hébergeur], situé à [Adresse de
            l&apos;hébergeur].</p>
        </div>
      </section>
      <div className="relative">
        <hr className=" custom-dashed-border-mobil my-4 absolute left-16 sm:left-24 md:left-28 lg:left-56" />
      </div>

      <section className="py-3 px-5 flex flex-col items-center gap-3">
        <h2 className="font-bold text-xl">Article 3 : Accès au site</h2>
        <div className="flex flex-col gap-6 text-sm lg:w-full lg:text-center">
          <p>Le site PSDOweb permet à l&apos;Utilisateur un accès gratuit aux services suivants :</p>
          <li>[Description des services gratuits disponibles sur le site]</li>
          <p>Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à
            Internet. Tous les frais supportés par l&apos;Utilisateur pour accéder au service (matériel
            informatique, logiciels, connexion Internet, etc.) sont à sa charge.</p>
        </div>
      </section>
      <div className="relative">
        <hr className=" custom-dashed-border-mobil my-4 absolute left-16 sm:left-24 md:left-28 lg:left-56" />
      </div>

      <section className="py-3 px-5 flex flex-col items-center gap-3">
        <h2 className="font-bold text-xl">Article 4 : Collecte des données</h2>
        <div className="flex flex-col gap-6 text-sm lg:w-full lg:text-center">
          <p>Le site assure à l&apos;Utilisateur une collecte et un traitement d&apos;informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l&apos;informatique, aux fichiers et aux libertés.</p>
          <p>En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l&apos;Utilisateur dispose d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition de ses données personnelles. L&apos;Utilisateur exerce ce droit via :</p>
          <div>
            <li>Son espace personnel sur le site</li>
            <li>Un formulaire de contact</li>
            <li>Par mail à baptiste.petit@psdoweb.com</li>
            <li>Par voie postale à 2A rue de l’orangerie , 60000 Beauvais.</li>
          </div>
        </div>
      </section>
      <div className="relative">
        <hr className=" custom-dashed-border-mobil my-4 absolute left-16 sm:left-24 md:left-28 lg:left-56" />
      </div>

      <section className="py-3 px-5 flex flex-col items-center gap-3">
        <h2 className="font-bold text-xl">Article 5 : Propriété intellectuelle</h2>
        <div className="flex flex-col gap-6 text-sm lg:w-full lg:text-center">
          <p>Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son, etc.) font l&apos;objet d&apos;une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d&apos;auteur.</p>
          <p>L&apos;Utilisateur doit solliciter l&apos;autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s&apos;engage à une utilisation des contenus du site dans un cadre strictement privé ; toute utilisation à des fins commerciales et publicitaires est strictement interdite.</p>
        </div>
      </section>
      <div className="relative">
        <hr className=" custom-dashed-border-mobil my-4 absolute left-16 sm:left-24 md:left-28 lg:left-56" />
      </div>

      <section className="py-3 px-5 flex flex-col items-center gap-3">
        <h2 className="font-bold text-xl">Article 6 : Responsabilité</h2>
        <div className="flex flex-col gap-6 text-sm lg:w-full lg:text-center">
          <p>Les sources des informations diffusées sur le site PSDOweb sont réputées fiables mais le site ne garantit pas qu&apos;il soit exempt de défauts, d&apos;erreurs ou d&apos;omissions.</p>
          <p>
            Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site PSDOweb ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenu responsable de l&apos;utilisation et de l&apos;interprétation de l&apos;information contenue dans ce site.</p>
          <p>L&apos;Utilisateur s&apos;assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que soit sa forme, est interdite. Il assume les risques liés à l&apos;utilisation de son identifiant et mot de passe. Le site décline toute responsabilité.</p>
          <p>Le site PSDOweb ne peut être tenu pour responsable d&apos;éventuels virus qui pourraient infecter l&apos;ordinateur ou tout matériel informatique de l&apos;Internaute, suite à une utilisation, à l&apos;accès, ou au téléchargement provenant de ce site.</p>
          <p>La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d&apos;un tiers.</p>
        </div>
      </section>
    </main>
  );
}
