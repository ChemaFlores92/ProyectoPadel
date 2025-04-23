import Link from "next/link";

function NotFound() {
    return (
        <section className="not-found p-8 text-center min-h-screen flex flex-col items-center justify-center bg-gray-200">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-4 animate-pulse drop-shadow">
                ¡OUT! Esta bola ha salido de la pista!!! 🎾
            </h1>

            <img
                src="/404.jpg"
                alt="Imagen no encontrada"
                className="mx-auto w-64 h-auto rounded-lg shadow-md mb-6"
            />

            <p className="text-lg text-gray-700 mb-3">
                La página que estás buscando no se ha encontrado.
            </p>
            <p className="text-lg text-gray-700">
                Puedes volver al inicio pulsando{" "}
                <Link legacyBehavior href="/">
                    <a className="text-blue-600 font-semibold hover:underline transition duration-200">aquí</a>
                </Link>
            </p>
        </section>
    );
}

export default NotFound;
