import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#161D25] p-5 w-full">
      <div className="md:flex md:justify-around items-center text-center">
        <Image src={"/images/planet.png"} alt="world_wide_web" width={70} height={70} className="opacity-10 hidden md:flex" />
        <div className="flex justify-around md:gap-5">
          <div className="flex flex-col text-center">
            <div>
              <Link href={"#"} className="text-[#F4D03F] underline">Nous-contacter</Link>
            </div>
            <div className="m-5">
              <Link href={"#"} className="text-[#F4D03F] underline">Mentions légales</Link>
            </div>
            <div>
              <Link href={"#"} className="text-[#F4D03F] underline">CGU</Link>
            </div>
          </div>
          <div className="text-center">
            <div>
              <p className="text-[#F4D03F]">Je sais pas encore</p>
            </div>
            <div className="m-5">
              <p className="text-[#F4D03F]">06-82-99-85-27</p>
            </div>
            <div>
              <p className="text-[#F4D03F]">bapt.petit60@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row h-fit gap-5 md:gap-2 md:mt-10">
            <Image src={"/images/Linkedin.png"} alt="linkedin_link" width={25} height={25} className="md:w-10"/>
            <Image src={"/images/Instagram.png"} alt="instagram_link" width={25} height={25} className="md:w-10"/>
            <Image src={"/images/mail.png"} alt="mail_link" width={25} height={25} className="md:w-10"/>
          </div>
        </div>
        <Image src={"/images/cloud.png"} alt="cloud" width={70} height={70} className="opacity-10 hidden md:flex" />
      </div>
    </footer>
  )
}