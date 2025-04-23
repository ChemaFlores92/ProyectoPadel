import React from 'react';
import Link from 'next/link';
import ImgFondo from '@/components/ImgFondo';

function About() {
    return (
        <>
            <ImgFondo />
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                <div className="max-w-4xl mx-auto p-12 bg-gray-200 rounded-lg shadow-lg my-8">
                    <h1 className="text-4xl font-bold mb-12 italic text-blue-600 text-center">
                        Descubre la Gestión Profesional de PadelPro Club 🎾
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="md:col-span-1">
                            <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">
                                Bienvenido a PadelPro Club
                            </h2>
                            <p className="text-lg mb-4 text-center">
                                En <span className="font-semibold">PadelPro Club</span> apostamos por la innovación en la gestión deportiva. Nuestro objetivo es ofrecer una plataforma completa, moderna y eficiente para la administración de entrenadores, jugadores y entrenamientos, organizados por categorías.
                            </p>
                        </div>
                        <div className="md:col-span-1 mt-8">
                            <img className="mx-auto h-48 md:h-auto rounded" src="/logo.png" alt="PadelPro Logo" />
                        </div>
                    </div>

                    <div className="my-8">
                        <h3 className="text-xl text-blue-600 font-bold mb-2">Nuestra Misión:</h3>
                        <p className="text-lg mb-4">
                            Fomentar la pasión por el pádel a través de una gestión deportiva moderna, cercana y eficaz. Creemos que el deporte es crecimiento, equipo y superación, y trabajamos para que cada jugador y entrenadora/o tenga una experiencia óptima dentro y fuera de la pista.
                        </p>
                    </div>

                    <div className="my-8">
                        <h3 className="text-xl text-blue-600 font-bold mb-2">¿Qué te ofrecemos?</h3>
                        <ul className="list-disc pl-6 mb-4">
                            <li><strong>Gestión de Usuarios:</strong> Registro seguro y personalizado de jugadores, entrenadores y personal del club.</li>
                            <li><strong>Organización de Entrenamientos:</strong> Planificación flexible por horarios, niveles y categorías.</li>
                            <li><strong>Categorías Dinámicas:</strong> Clasificación de jugadores según su evolución, edad y nivel técnico.</li>
                            <li><strong>Seguimiento de Rendimiento:</strong> Evaluaciones y estadísticas de progreso para potenciar el talento en la pista.</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <img className="mx-auto h-40 md:h-auto rounded" src="/aboutUs.png" alt="Sobre PadelPro Club" />
                    </div>

                    <p className="text-lg mb-8 text-center">
                        En PadelPro Club, no solo jugamos al pádel, lo gestionamos con visión de futuro. 
                        <br />¡Únete a nosotros y mejora tu juego, dentro y fuera de la pista!
                    </p>

                    <div className="text-center">
                        <Link href="/" className="text-white bg-blue-600 hover:bg-lime-200 hover:text-black transition duration-400 py-2 px-4 rounded">
                            Volver al Inicio
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
