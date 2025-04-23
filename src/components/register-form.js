'use client'

import Button from '@/components/button-form'
import { useState } from 'react'
import { register } from '@/lib/actions'
import { signIn } from 'next-auth/react'

function RegisterForm() {
    const [resultado, setResultado] = useState("")
    const [tipo, setTipo] = useState("")

    async function wrapper(data) {
        const message = await register(data)
        if (message.success) {
            setTipo('success')
            setResultado(message.success)
            await signIn('credentials', {
                email: data.get('email'),
                password: data.get('password'),
                callbackUrl: '/dashboard'
            })
        } else {
            setTipo('error')
            setResultado(message.error)
        }
    }

    return (
        <form
            action={wrapper}
            className="bg-white/90 backdrop-blur-md p-8 rounded-lg shadow-lg w-full"
        >
            <h2 className="text-2xl font-bold text-center mb-6 text-blue-700 uppercase tracking-wide">
                Información
            </h2>

            <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Usuario"
                    className="w-full border-b-2 border-blue-600 py-2 bg-transparent focus:outline-none focus:border-blue-400 transition duration-300 placeholder-gray-400"
                />
            </div>

            <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="usuario@mail.com"
                    className="w-full border-b-2 border-blue-600 py-2 bg-transparent focus:outline-none focus:border-blue-400 transition duration-300 placeholder-gray-400"
                />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contraseña
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="••••••"
                    className="w-full border-b-2 border-blue-600 py-2 bg-transparent focus:outline-none focus:border-blue-400 transition duration-300 placeholder-gray-400"
                />
            </div>

            {resultado && (
                <p className={`text-center text-sm mb-4 ${tipo === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {resultado}
                </p>
            )}

            <Button title="Crear usuario" />
        </form>
    )
}

export default RegisterForm
