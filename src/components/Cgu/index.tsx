import Link from "next/link";


export default function Cgu() {
  return (
    <main className="overflow-hidden ">
      <section className="flex flex-col items-center py-5 gap-[10px]">
        <h1 className="text-2xl font-semibold text-center">Conditions Générales<br />d'Utilisation<br />(CGU)</h1>
        <p className="text-xs text-center">Découvrez nos mentions légales pour en savoir plus sur les <br />conditions d'utilisation relatives à notre entreprise.</p>
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
          <p>Les présentes « conditions générales d'utilisation » ont pour objet l'encadrement
            juridique des modalités de mise à disposition des services du site PSDOweb et leur
            utilisation par « l'Utilisateur ».</p>
          <p>Les CGU doivent être acceptées par tout Utilisateur souhaitant accéder au site. Elles
            constituent le contrat entre le site et l'Utilisateur. L’accès au site par l’Utilisateur
            signifie son acceptation des présentes CGU.</p>
          <p>En cas de non-acceptation des CGU stipulées dans le présent contrat, l’Utilisateur se
            doit de renoncer à l'accès des services proposés par le site.</p>
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
          <p>Numéro de téléphone :06-82-99-85-27 <br />Adresse e-mail : baptiste.petit@psdoweb.com <br />Numéro d'inscription au RCS : [Numéro d'immatriculation] <br />Numéro de TVA intracommunautaire : [Numéro de TVA]</p>
          <p>Le Directeur de la publication est Petit Baptiste.</p>
          <p>Le site PSDOweb est hébergé par [Nom de l'hébergeur], situé à [Adresse de
            l'hébergeur].</p>
        </div>
      </section>
      <div className="relative">
        <hr className=" custom-dashed-border-mobil my-4 absolute left-16 sm:left-24 md:left-28 lg:left-56" />
      </div>

      <section className="py-3 px-5 flex flex-col items-center gap-3">
        <h2 className="font-bold text-xl">Article 3 : Accès au site</h2>
        <div className="flex flex-col gap-6 text-sm lg:w-full lg:text-center">
          <p>Le site PSDOweb permet à l'Utilisateur un accès gratuit aux services suivants :</p>
          <li>[Description des services gratuits disponibles sur le site]</li>
          <p>Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à
            Internet. Tous les frais supportés par l’Utilisateur pour accéder au service (matériel
            informatique, logiciels, connexion Internet, etc.) sont à sa charge.</p>
        </div>
      </section>
      <div className="relative">
        <hr className=" custom-dashed-border-mobil my-4 absolute left-16 sm:left-24 md:left-28 lg:left-56" />
      </div>

      <section className="py-3 px-5 flex flex-col items-center gap-3">
        <h2 className="font-bold text-xl">Article 4 : Collecte des données</h2>
        <div className="flex flex-col gap-6 text-sm lg:w-full lg:text-center">
          <p>Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.</p>
          <p>En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit via :</p>
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
          <p>Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son, etc.) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.</p>
          <p>L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé ; toute utilisation à des fins commerciales et publicitaires est strictement interdite.</p>
        </div>
      </section>
      <div className="relative">
        <hr className=" custom-dashed-border-mobil my-4 absolute left-16 sm:left-24 md:left-28 lg:left-56" />
      </div>

      <section className="py-3 px-5 flex flex-col items-center gap-3">
        <h2 className="font-bold text-xl">Article 6 : Responsabilité</h2>
        <div className="flex flex-col gap-6 text-sm lg:w-full lg:text-center">
          <p>Les sources des informations diffusées sur le site PSDOweb sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.</p>
          <p>
            Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site PSDOweb ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenu responsable de l’utilisation et de l’interprétation de l’information contenue dans ce site.</p>
          <p>L'Utilisateur s'assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que soit sa forme, est interdite. Il assume les risques liés à l'utilisation de son identifiant et mot de passe. Le site décline toute responsabilité.</p>
          <p>Le site PSDOweb ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de ce site.</p>
          <p>La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.</p>
        </div>
      </section>
      <div className="relative">
        <hr className=" custom-dashed-border-mobil my-4 absolute left-16 sm:left-24 md:left-28 lg:left-56" />
      </div>

      <section className="py-3 px-5 flex flex-col items-center gap-3">
        <h2 className="font-bold text-xl">Article 7 : Liens hypertextes</h2>
        <div className="flex flex-col gap-6 text-sm lg:w-full lg:text-center">
          <p>Des liens hypertextes peuvent être présents sur le site. L'Utilisateur est informé qu'en cliquant sur ces liens, il sortira du site PSDOweb. Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.</p>
        </div>
      </section>
      <div className="relative">
        <hr className=" custom-dashed-border-mobil my-4 absolute left-16 sm:left-24 md:left-28 lg:left-56" />
      </div>

      <section className="py-3 px-5 flex flex-col items-center gap-3">
        <h2 className="font-bold text-xl">Article 8 : Cookies</h2>
        <div className="flex flex-col gap-6 text-sm lg:w-full lg:text-center">
          <p>L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation.</p>
          <p>Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l’ordinateur de l’Utilisateur par votre navigateur et qui sont nécessaires à l’utilisation du site PSDOweb. Les cookies ne contiennent pas d’information personnelle et ne peuvent pas être utilisés pour identifier quelqu’un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l’Utilisateur, d’autres restent.</p>
          <p>L’information contenue dans les cookies est utilisée pour améliorer le site PSDOweb.</p>
          <p>En naviguant sur le site, l’Utilisateur les accepte.</p>
          <p>L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.</p>
        </div>
      </section>
      <div className="relative">
        <hr className=" custom-dashed-border-mobil my-4 absolute left-16 sm:left-24 md:left-28 lg:left-56" />
      </div>

      <section className="py-3 px-5 flex flex-col items-center gap-3">
        <h2 className="font-bold text-xl text-center">Article 9 : Droit applicable et <br />juridiction compétente</h2>
        <div className="flex flex-col gap-6 text-sm lg:w-full lg:text-center">
          <p>La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.</p>
          <p>Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur aux coordonnées inscrites à l’Article 2.</p>
          <p>Fait à Beauvais, le 21/05/2024</p>
        </div>
      </section>
      <div className="relative">
        <hr className=" custom-dashed-border-mobil my-4 absolute left-16 sm:left-24 md:left-28 lg:left-56" />
      </div>
    </main>
  )
}