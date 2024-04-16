import MongoPackRepository from '@/modules/packs/infra/mongo/MongoPackRepository'
import { createPack } from '@/modules/packs/application/create/createPack'
import { getPacksByType } from '@/modules/packs/application/get-all/getPacksByType'
import { NextRequest } from 'next/server'

const packRepository = new MongoPackRepository()

export async function GET (request: NextRequest, context: any) {
  const searchParams = request.nextUrl.searchParams || {}
  const type = searchParams.get('type') || 'none'
  const currentPage = Number(searchParams.get('currentPage'))
  const elementsByPage = Number(searchParams.get('elementsByPage'))

  const packs = await getPacksByType(packRepository)(type, currentPage, elementsByPage).catch(() => {
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
    throw new Error('Error creating pack')
  })

  return new Response(JSON.stringify(packCreated), {
    headers: {
      'Content-Type': 'application/json'
    },
    status: 201
  })
}
