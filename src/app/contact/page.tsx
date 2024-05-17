'use client'
import CustomFormInput from "@/components/CustomFormInput";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion"
import Image from "next/image";

export default function Page() {
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [showIsPro, setShowIsPro] = useState(false)
    const [showhasdue, setShowhasdue] = useState(false)
    const [showhaswebsite, setShowhaswebsite] = useState(false)
    const changeHandler = (e: { target: { id: string; }; }) => {
        if (e.target.id === "checkbox_info") {
            setShowMoreInfo(!showMoreInfo)
        } else if (e.target.id === "checkbox_ispro") {
            setShowIsPro(!showIsPro)
        }
    }
    const submitHandler = async (e: { preventDefault: () => void; target: HTMLFormElement | undefined; }) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        let response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(Object.fromEntries(formData.entries()))
        })
        let data = await response.json();
        console.log(data)
    }
    return (
        <div className="relative min-h-dvh max-h-fit flex flex-col items-center gap-5">
            <title>Formulaire</title>
            <form onSubmit={submitHandler} className={"flex flex-col justify-center items-center"}>
                <section
                    className={"bg-gradient-to-b from-0% from-custom_blue_black to-10% to-white w-dvw flex flex-col items-center py-10"}>
                    <p className={"text-custom_blue_black text-3xl font-bold pb-10"}>Contactez-nous</p>
                    <div
                        className={"z-10 bg-custom_yellow flex flex-col justify-center items-center gap-5 mobile:w-[20rem] w-[30rem] p-5 rounded shadow-custom_shadow"}>
                        <p className={"text-2xl font-bold text-center"}>Information personnelle</p>
                        <div className={"flex flex-col justify-center items-center gap-5"}>
                            <CustomFormInput type={"text"} name={"name"} labelVal={"Nom & prénom"} required={true}/>
                            <CustomFormInput type={"email"} name={"email"} labelVal={"Email"} required={true}/>
                            <CustomFormInput type={"phone"} name={"phone"} labelVal={"Numéro de téléphone"}
                                             required={true}/>
                            <CustomFormInput type={"text"} name={"discover_service"}
                                             labelVal={"Comment avez-vous découvert notre service ?"}/>
                        </div>
                    </div>
                </section>
                <section
                    className={"relative w-dvw flex flex-col items-center py-10"}>
                    <div
                        className={"z-10 bg-custom_yellow flex flex-col justify-center items-center gap-5 mobile:w-[20rem] w-[30rem] p-5 rounded shadow-custom_shadow"}>
                        <p className={"text-2xl font-bold text-center"}>Votre projet</p>
                        <div className={"flex flex-col justify-center items-center gap-5"}>
                            <CustomFormInput type={"text"} name={"project_type"} labelVal={"Type de projet"}/>
                            <label htmlFor="projet_desc" className={"w-72 text-center font-medium"}>Veuillez fournir une
                                brève
                                description de votre projet</label>
                            <motion.textarea whileFocus={{scale: 1.05}} transition={{duration: 0.3}} id={"project_desc"}
                                             name={"project_desc"}
                                             className={"rounded w-52 h-24 p-0.5 shadow-custom_shadow resize-none"}></motion.textarea>
                        </div>
                    </div>
                    <Image src={'/Images/decoration/banner.png'} alt={"banner"} width={2000} height={1000}
                           className={"absolute bottom-0 h-52 object-cover"}/>
                </section>
                <section
                    className={"w-dvw flex flex-col items-center py-10"}>
                    <div
                        className={"bg-custom_yellow flex flex-col justify-center items-center gap-5 mobile:w-[20rem] w-[30rem] p-5 rounded shadow-custom_shadow"}>
                        <label htmlFor="checkbox_info" className={"w-72 text-center font-medium"}>Pouvez-vous fournir
                            des
                            informations supplémentaires sur votre projet ?</label>
                        <input onChange={changeHandler} type="checkbox" id="checkbox_info" name="checkbox_info"
                               className={"scale-125 checked:accent-custom_yellow"}/>
                    </div>
                </section>
                <section
                    className={`relative w-dvw flex flex-col items-center ${showMoreInfo ? "py-3 to-10%" : "py-3"}`}>
                    <AnimatePresence>
                        {showMoreInfo && (
                            <>
                                <motion.div
                                    initial={{x: 100, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{duration: 0.5}}
                                    exit={{x: -100, opacity: 0}}
                                    className={`${showMoreInfo ? "flex" : "hidden"} bg-custom_yellow flex-col justify-center items-center gap-5 mobile:w-[20rem] w-[30rem] p-5 rounded shadow-custom_shadow z-10`}>
                                    <p className={"text-2xl text-center font-bold"}>Information supplémentaires</p>
                                    <CustomFormInput type={"text"} name={"fav_color"}
                                                     labelVal={"Quelle(s) couleur(s) préférez-vous ?"}/>
                                    <CustomFormInput type={"text"} name={"inspiration"}
                                                     labelVal={"Quelles sont vos sources d'inspiration (sites web, mood boards, etc...) ?"}/>
                                    <label htmlFor="already_logo" className={"w-72 text-center font-medium"}>Possédez-vous
                                        un
                                        logo
                                        ?</label>
                                    <input type="checkbox" id="already_logo" name="already_logo"
                                           className={"scale-125 checked:accent-custom_green"}/>
                                    <label htmlFor="using_socialmedia" className={"w-72 text-center font-medium"}>Utilisez-vous
                                        déjà
                                        des
                                        plateformes
                                        de réseaux sociaux pour votre activité ?</label>
                                    <input type="checkbox" id="using_socialmedia" name="using_socialmedia"
                                           className={"scale-125 checked:accent-custom_green"}/>
                                    <CustomFormInput type={"text"} name={"motivation"}
                                                     labelVal={"Qu'est-ce qui vous motive à créer un site web ?"}/>
                                </motion.div>
                            </>

                        )}
                    </AnimatePresence>
                    <Image src={'/Images/decoration/banner.png'} alt={"banner"} width={2000} height={1000}
                           className={`${showMoreInfo ? 'block' : 'hidden'} absolute bottom-0 h-52 object-cover`}/>
                </section>
                <section
                    className={"w-dvw flex flex-col items-center py-10"}>
                    <div
                        className={"bg-custom_yellow flex flex-col justify-center items-center gap-5 mobile:w-[20rem] w-[30rem] p-5 rounded shadow-custom_shadow"}>
                        <div className={"flex flex-col justify-center items-center gap-5"}>
                            <label htmlFor="checkbox_ispro" className={"w-72 text-center font-medium"}>Êtes-vous un
                                professionnel ?</label>
                            <input onChange={changeHandler} type="checkbox" id="checkbox_ispro" name="profesionnal"
                                   className={"scale-125 checked:accent-custom_green"}/>
                        </div>
                    </div>
                </section>
                <section
                    className={`bg-gradient-to-t from-0% from-custom_blue_black to-white w-dvw flex flex-col items-center ${showIsPro ? "py-3 to-10%" : "py-3"}`}>
                    <>
                        <AnimatePresence>
                            {showIsPro && (
                                <motion.div
                                    initial={{x: 100, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{duration: 0.5}}
                                    exit={{x: -100, opacity: 0}}
                                    className={`bg-custom_yellow ${showIsPro ? "flex" : "hidden"} z-10 flex-col justify-center items-center gap-5 mobile:w-[20rem] w-[30rem] p-5 rounded shadow-custom_shadow`}>
                                    <p className={"text-2xl text-center font-bold"}>Informations sur votre
                                        entreprise</p>
                                    <div className={"flex flex-col justify-center items-center gap-5"}>
                                        <label htmlFor="already_website" className={"w-72 text-center font-medium"}>Disposez-vous
                                            déjà
                                            d’un site web ?</label>
                                        <input onChange={() => setShowhaswebsite(!showhaswebsite)} type="checkbox"
                                               id="already_website" name="already_website"
                                               className={"scale-125 checked:accent-custom_green"}/>
                                        <AnimatePresence>
                                            {showhaswebsite && (
                                                <motion.div initial={{opacity: 0}} animate={{opacity: 1}}
                                                            exit={{opacity: 0}} transition={{duration: 0.5}}>
                                                    <CustomFormInput type={"text"} name={"link_website"}
                                                                     labelVal={"Veuillez fournir le lien vers votre site web"}/>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        <CustomFormInput type={"text"} name={"specification_needed"}
                                                         labelVal={"Avez-vous des besoins spécifiques mentionner ?"}/>
                                        <CustomFormInput type={"text"} name={"estimated_budget"}
                                                         labelVal={"Quel est votre budget estimé pour la réalisation de votre projet ?"}/>
                                        <label htmlFor="due_date" className={"w-72 text-center font-medium"}>Y a-t-il
                                            une
                                            échéance pour la réalisation de votre projet ?</label>
                                        <input onClick={() => setShowhasdue(!showhasdue)} type="checkbox" id="due_date"
                                               name="due_date"
                                               className={"scale-125 checked:accent-custom_green"}/>
                                        <AnimatePresence>
                                            {showhasdue && (
                                                <motion.div initial={{opacity: 0}} animate={{opacity: 1}}
                                                            exit={{opacity: 0}} transition={{duration: 0.5}}>
                                                    <CustomFormInput type={"text"} name={"due_date_needed"}
                                                                     labelVal={"Veuillez noter la date d’échéance voulue"}/>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <Image src={'/Images/decoration/banner.png'} alt={"banner"} width={2000} height={1000}
                               className={`${showIsPro ? 'block' : 'hidden'} absolute bottom-0 h-52 object-cover`}/>
                    </>
                    <div className={"pt-10 z-20"}>
                        <motion.input initial={{scale: 1}} whileHover={{scale: 0.9, width: 130}} type="submit"
                                      value={"Envoyer"}
                                      className={"bg-custom_yellow font-medium text-2xl p-1.5 rounded shadow-custom_shadow cursor-pointer"}/>
                    </div>
                </section>
            </form>
            <Image src={"/Images/decoration/Icons/1.png"} alt={''} width={140} height={140}
                   className={"mobile:hidden absolute right-20 top-10 opacity-10"}/>
            <Image src={"/Images/decoration/Icons/2.png"} alt={''} width={140} height={140}
                   className={"mobile:hidden absolute right-[30rem] top-[10rem] opacity-10"}/>
            <Image src={"/Images/decoration/Icons/3.png"} alt={''} width={200} height={200}
                   className={"mobile:hidden absolute left-[19rem] top-[10rem] opacity-10"}/>
            <Image src={"/Images/decoration/Icons/4.png"} alt={''} width={160} height={160}
                   className={"mobile:hidden absolute right-[10rem] top-[20rem] opacity-10"}/>
        </div>
    )
}