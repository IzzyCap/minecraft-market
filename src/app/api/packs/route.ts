import MongoPackRepository from '@/modules/packs/infra/mongo/MongoPackRepository'
import { createPack } from '@/modules/packs/application/create/createPack'
import { getAllPacks } from '@/modules/packs/application/get-all/getAllPacks'

const packRepository = new MongoPackRepository()

export async function GET () {
  const packs = await getAllPacks(packRepository)().catch(() => {
    console.log('Error getting all packs')
    throw new Error('Error getting all packs')
  })

  return new Response(JSON.stringify(packs), {
    headers: {
      'Content-Type': 'application/json'
    },
    status: 201
  })
}

export async function POST (request: Request, context: any) {
  const packData = await request.json()

  const packCreated = await createPack(packRepository)(packData).catch(() => {
    console.log('Error creating pack')
    throw new Error('Error creating pack')
  })

  return new Response(JSON.stringify(packCreated), {
    headers: {
      'Content-Type': 'application/json'
    },
    status: 201
  })
}
