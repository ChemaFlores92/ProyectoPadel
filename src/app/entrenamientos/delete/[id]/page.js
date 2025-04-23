import FormEntrenamiento from "@/components/entrenamiento/FormEntrenamiento"
import Button from "@/components/Button"
import { prisma } from '@/lib/prisma'
import { deleteEntrenamiento } from "@/lib/actions"
import Atras from '@/components/entrenamiento/btnBackEntrenos'
import ImgFondo from "@/components/ImgFondo"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const entrenamiento = await prisma.entrenamiento.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <>
      <ImgFondo />
      <div className="container mx-auto p-6 max-w-2xl bg-white/90 backdrop-blur-md rounded-xl shadow-lg">
        <h3 className="bg-red-600 text-white text-2xl font-bold p-3 rounded-md mb-6">Eliminar Entrenamiento</h3>
        <FormEntrenamiento action={deleteEntrenamiento} entrenamiento={entrenamiento} disabled={true} >
          <br />
          <Button title='Eliminar entrenamiento' />
        </FormEntrenamiento>
        <div className="mt-6">
          <Atras />
        </div>
      </div>
    </>
  )
}

export default page