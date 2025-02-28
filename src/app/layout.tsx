import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import Image from "next/image";
import Link from "next/link";

const pokeTypo = localFont({
    src: "./fonts/pokemon-emerald.ttf",
});

export const metadata: Metadata = {
    title: "Pokelearn",
    description:
        "Pokelearn est un projet d'apprentissage pour apprendre React, Next.js et les librairies nécessaires pour la plupart des projets front.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={pokeTypo.className}>
            <body>
                <div className="header">
                    <Link href="/" className="pokeLinkHeader">
                        <Image
                            src="/images/logo.png"
                            width="45"
                            height="45"
                            alt="pokelearn logo is a masterball"
                        />
                        <div className="headerTitle">PokéNext</div>
                    </Link>
                </div>
                <div className="pageContent">{children}</div>
            </body>
        </html>
    );
}
