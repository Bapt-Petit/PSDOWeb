'use client'
import Link from "next/link";
import QuestionDiv from "@/components/questionDiv";
import { motion } from "framer-motion";

export default function Page() {
    return (
        <>
            <title>Foire aux Questions</title>
            <div className={"bg-gradient-to-b from-0% from-custom_blue_black to-10% to-white"}>
                <section className={"flex flex-col items-center gap-5 pt-10"}>
                    <p className={"text-3xl font-bold"}>Foire aux Questions</p>
                    <p className={"px-5 text-center"}>Retrouvez ici les réponses aux questions les plus fréquentes sur
                        nos
                        services et produits. Si vous ne trouvez pas ce que vous cherchez, contactez-nous directement
                        !</p>
                    <motion.div initial={{scale: 1}} whileHover={{scale: 1.05}}>
                        <Link href={"/contact"}
                              className={"bg-custom_yellow px-10 py-3 rounded-lg shadow-custom_shadow"}>Contactez-nous</Link>
                    </motion.div>
                </section>
                <div className={"bg-[url('/Images/decoration/banner.png')] bg-cover w-full h-32 my-5"}></div>
                <div className={"bg-gradient-to-t from-0% from-custom_blue_black to-10% to-white py-10"}>
                    <section
                        className={"flex flex-col border-2 border-custom_yellow mx-5 rounded-lg border-b-except-last"}>
                        <QuestionDiv question={"Quels services proposez-vous ?"}
                                     response={"Nous offrons une gamme complète de services, y compris le développement de sites vitrines, e-commerce et sur mesure, l'optimisation SEO, la conception et le développement d'applications mobiles (iOS et Android), ainsi que l'intégration d'API et des solutions personnalisées."}/>
                        <QuestionDiv
                            question={"Puis-je vous contacter si je n'ai pas d'idée précise de ce que je veux ?"}
                            response={"Absolument ! Que vous ayez une idée précise ou non, nous sommes là pour vous aider à définir votre projet et à trouver les meilleures solutions adaptées à vos besoins."}/>
                        <QuestionDiv question={"Comment fonctionne le processus de développement ?"}
                                     response={"Notre processus de développement comprend plusieurs étapes clés : consultation initiale, définition du cahier des charges, conception et design, développement, tests et validation, déploiement et mise en ligne, suivi et maintenance."}/>
                    </section>
                </div>
            </div>
        </>
    )
}