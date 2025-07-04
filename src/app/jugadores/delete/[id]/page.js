import FormularioJugadores from "@/components/jugador/FormJugador"
import Button from "@/components/Button"
import { prisma } from '@/lib/prisma'
import { deleteJugador } from "@/lib/actions"
import AtrasJugadores from '@/components/jugador/buttonBackJugadores'
import ImgFondo from "@/components/ImgFondo"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const jugador = await prisma.jugador.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <>
      <ImgFondo />
      <div className="container mx-auto p-6 max-w-2xl bg-white/90 backdrop-blur-md rounded-xl shadow-lg">
        <h3 className="bg-red-600 text-white text-2xl font-bold p-3 rounded-md mb-6">Eliminar jugador</h3>
        <FormularioJugadores action={deleteJugador} jugador={jugador} disabled={true} >
          <br />
          <Button title='Eliminar jugador' />
        </FormularioJugadores>
        <div className="mt-6">
          <AtrasJugadores />
        </div>
      </div>
    </>
  )
}

export default page