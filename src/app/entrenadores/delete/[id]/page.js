import Form from "@/components/entrenador/FormEntrenador"
import Button from "@/components/Button"
import { prisma } from '@/lib/prisma'
import { deleteEntrenador } from "@/lib/actions"
import Atras from '@/components/entrenador/buttonBackEntrenadores'
import ImgFondo from "@/components/ImgFondo"

export const dynamic = 'force-dynamic'

async function Page({ params }) {
  const entrenador = await prisma.entrenador.findUnique({ where: { id: Number(params.id) } });

  return (
    <>
      <ImgFondo />
      <div className="container mx-auto p-6 max-w-2xl bg-white/90 backdrop-blur-md rounded-xl shadow-lg">
        <h3 className="bg-red-600 text-white text-2xl font-bold p-3 rounded-md mb-6">Eliminar Entrenador</h3>
        <Form action={deleteEntrenador} entrenador={entrenador} disabled={true}>
          <Button title='Eliminar entrenador' />
        </Form>
        <div className="mt-6">
          <Atras />
        </div>
      </div>
    </>
  )
}

export default Page;