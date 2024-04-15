import { getPackById } from '@/modules/packs/application/get/getPackById'
import MongoPackRepository from '@/modules/packs/infra/mongo/MongoPackRepository'

const packRepository = new MongoPackRepository()

export async function GET (request: Request, context: any) {
  const { id } = context.params

  const packData = await getPackById(packRepository)(id).catch(() => {
    throw new Error('Error getting pack')
  })

  return new Response(JSON.stringify(packData), {
    headers: {
      'Content-Type': 'application/json'
    },
    status: 201
  })
}
