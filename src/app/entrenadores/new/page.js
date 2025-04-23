import Form from "@/components/entrenador/FormEntrenador"
import Button from "@/components/Button"
import { newEntrenador } from "@/lib/actions"
import Atras from '@/components/entrenador/buttonBackEntrenadores'
import ImgFondo from "@/components/ImgFondo"

export const dynamic = 'force-dynamic'

function Page() {
  return (
    <>
      <ImgFondo />
      <div className="container mx-auto p-6 max-w-2xl bg-white/90 backdrop-blur-md rounded-xl shadow-lg">
        <h3 className="bg-blue-600 text-white text-2xl font-bold p-3 rounded-md mb-6">Nuevo Entrenador</h3>
        <Form action={newEntrenador} entrenador={null}>
          <Button title='Añadir entrenador' />
        </Form>
        <div className="mt-6">
          <Atras />
        </div>
      </div>
    </>
  )
}

export default Page;