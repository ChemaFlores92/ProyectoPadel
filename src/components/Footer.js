"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 border-t border-blue-900 text-gray-300"
            >
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link legacyBehavior href="/" className="flex items-center">
                                <div>
                                    <img src="/logo.png" className="rounded h-20 w-36 mt-5 hover:scale-105 transition-transform duration-300" alt="SC360 Logo" />
                                </div>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="text-white mb-6 text-sm font-semibold uppercase tracking-wider">Información</h2>
                                <ul className="space-y-3 font-medium">
                                    <li className="hover:text-white transition-colors duration-300">
                                        <Link legacyBehavior href="/about">Sobre nosotros</Link>
                                    </li>
                                    {/* 
                                    <li className="w-full py-2 px-4 text-xs md:text-sm font-medium text-white focus:outline-none bg-blue-700 rounded-lg border border-transparent transition duration-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 mt-2">
                                        <Link legacyBehavior href="/auth/register">Registrar Usuario</Link>
                                    </li>
                                    */}
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-white mb-6 text-sm font-semibold uppercase tracking-wider">Síguenos</h2>
                                <ul className="flex space-x-6">
                                    <li className="transition-transform duration-300 hover:scale-110 brightness-125">
                                        <a href="https://github.com/ChemaFlores92" aria-label="GitHub">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                                                <path fill="#999999" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="transition-transform duration-300 hover:scale-110 brightness-125">
                                        <a href="https://www.linkedin.com/in/jos%C3%A9-mar%C3%ADa-flores-ruiz-231b6422a/" aria-label="LinkedIn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                                                <path fill="#0284c7" fillRule="evenodd" d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708zm-5.5 10.403h3.208V9.25H4.208zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-white mb-6 text-sm font-semibold uppercase tracking-wider">Legal</h2>
                                <ul className="space-y-3 font-medium">
                                    <li className="hover:text-white transition-colors duration-300">
                                        <Link legacyBehavior href="/">Política de Privacidad</Link>
                                    </li>
                                    <li className="hover:text-white transition-colors duration-300">
                                        <Link legacyBehavior href="/">Términos y Condiciones</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blue-400 sm:mx-auto lg:my-8" />
                    <div className="mx-auto text-center">
                        <span className="text-sm text-white">© 2025 - PadelPro Club™ - Todos los derechos reservados.</span>
                    </div>
                </div>
            </motion.section>

            {showScrollTop && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="fixed bottom-5 right-5 bg-white text-blue-600 px-4 py-2 rounded-full shadow-lg hover:bg-white hover:scale-105 transition"
                    aria-label="Volver arriba"
                >
                    ↑
                </motion.button>
            )}
        </>
    );
}

export default Footer;
