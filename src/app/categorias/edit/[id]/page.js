import FormCategoria from "@/components/categoria/FormCategoria"
import Button from "@/components/Button"
import { prisma } from '@/lib/prisma'
import { editCategoria } from "@/lib/actions"
import Atras from '@/components/categoria/BtnAtrasCategoria'
import ImgFondo from "@/components/ImgFondo"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const categoria = await prisma.categoria.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <>
      <ImgFondo />
      <div className="container mx-auto p-6 max-w-2xl bg-white/90 backdrop-blur-md rounded-xl shadow-lg">
        <h3 className="bg-yellow-500 text-white text-2xl font-bold p-3 rounded-md mb-6">Editar Categoria</h3>
        <FormCategoria action={editCategoria} categoria={categoria} >
          <br />
          <Button title='Editar categoria' />
        </FormCategoria>
        <div className="mt-6">
          <Atras />
        </div>
      </div>
    </>
  )
}


export default page