import { Suspense } from 'react';
import ListaCategorias from '../categoria/ListaCategorias';

const FormularioJugador = ({ children, action, jugador, disabled = false }) => {
    return (
        <form action={action} className="container mx-auto p-6 max-w-lg bg-blue-300 shadow-lg rounded-lg">
            <input type='hidden' name='id' value={jugador?.id} />
            <fieldset disabled={disabled} className="space-y-6">
                <div>
                    <label htmlFor='nombre' className="block text-lg font-semibold text-gray-700">Nombre:</label>
                    <input
                        type='text'
                        id='nombre'
                        name='nombre'
                        placeholder='Nombre'
                        defaultValue={jugador?.nombre}
                        autoFocus
                        required
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='apellido' className="block text-lg font-semibold text-gray-700">Apellido:</label>
                    <input
                        type='text'
                        id='apellido'
                        name='apellido'
                        placeholder='Apellido'
                        defaultValue={jugador?.apellido}
                        required
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='fechaNacimiento' className="block text-lg font-semibold text-gray-700">Fecha Nacimiento:</label>
                    <input
                        type='date'
                        id='fechaNacimiento'
                        name='fechaNacimiento'
                        placeholder='dd/mm/aaaa'
                        defaultValue={jugador?.fechaNacimiento ? jugador.fechaNacimiento.toISOString().split('T')[0] : ''}
                        required
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='lateralidad' className="block text-lg font-semibold text-gray-700">Lateralidad:</label>
                    <select
                        id='lateralidad'
                        name='lateralidad'
                        placeholder='Lateralidad'
                        defaultValue={jugador?.lateralidad}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    >
                        <option value="">Seleccione lateralidad:</option>
                        <option value="Izquierda">Izquierda</option>
                        <option value="Derecha">Derecha</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='genero' className="block text-lg font-semibold text-gray-700">Género:</label>
                    <select
                        id='genero'
                        name='genero'
                        defaultValue={jugador?.genero}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    >
                        <option value="">Selecciona el Género</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='localidad' className="block text-lg font-semibold text-gray-700">Localidad:</label>
                    <input
                        type='text'
                        id='localidad'
                        name='localidad'
                        placeholder='Localidad'
                        defaultValue={jugador?.localidad}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='telefono' className="block text-lg font-semibold text-gray-700">Teléfono:</label>
                    <input
                        type='text'
                        id='telefono'
                        name='telefono'
                        placeholder='123456789'
                        defaultValue={jugador?.telefono}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='tallaCamiseta' className="block text-lg font-semibold text-gray-700">Talla de Camiseta:</label>
                    <select
                        id='tallaCamiseta'
                        name='tallaCamiseta'
                        placeholder='Talla de Camiseta'
                        defaultValue={jugador?.tallaCamiseta}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    >
                        <option value="">Selecciona la talla:</option>
                        <option value="XXS">XXS</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='tallaSudadera' className="block text-lg font-semibold text-gray-700">Talla de Sudadera:</label>
                    <select
                        id='tallaSudadera'
                        name='tallaSudadera'
                        placeholder='Talla de Sudadera'
                        defaultValue={jugador?.tallaSudadera}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    >
                        <option value="">Selecciona la talla:</option>
                        <option value="XXS">XXS</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='email1' className="block text-lg font-semibold text-gray-700">Email 1:</label>
                    <input
                        type='email'
                        id='email1'
                        name='email1'
                        placeholder='jugador@mail.com'
                        defaultValue={jugador?.email1}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='fechaExamenMedico' className="block text-lg font-semibold text-gray-700">Fecha de Examen Médico:</label>
                    <input
                        type='date'
                        id='fechaExamenMedico'
                        name='fechaExamenMedico'
                        placeholder='dd/mm/aaaa'
                        defaultValue={jugador?.fechaExamenMedico ? jugador.fechaExamenMedico.toISOString().split('T')[0] : ''}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='notas' className="block text-lg font-semibold text-gray-700">Notas:</label>
                    <textarea
                        id='notas'
                        name='notas'
                        placeholder='Notas'
                        defaultValue={jugador?.notas}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
            </fieldset>
            <Suspense fallback={'Loading ...'}>
                <div className="overflow-x-auto">
                    <ListaCategorias jugadorId={jugador?.id} disabled={disabled} />
                </div>
            </Suspense>
            {children}
        </form>
    );
}

export default FormularioJugador;
