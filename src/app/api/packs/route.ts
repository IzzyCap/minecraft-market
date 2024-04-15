import MongoPackRepository from '@/modules/packs/infra/mongo/MongoPackRepository'
import { createPack } from '@/modules/packs/application/create/createPack'
import { getAllPacks } from '@/modules/packs/application/get-all/getAllPacks'
// import { getPacksByType } from '@/modules/packs/application/get-all/getPacksByType'
import { NextRequest } from 'next/server'

const packRepository = new MongoPackRepository()

export async function GET (request: NextRequest, context: any) {
  const packs = await getAllPacks(packRepository)().catch(() => {
    throw new Error('Error getting all packs')
  })

  return new Response(JSON.stringify(packs), {
    headers: {
      'Content-Type': 'application/json'
    },
    status: 201
  })
}

// export async function GET (request: NextRequest, context: any) {
//   const searchParams = request.nextUrl.searchParams || {}
//   const type = searchParams.get('type')
//   const currentPage = Number(searchParams.get('currentPage'))
//   const elementsByPage = Number(searchParams.get('elementsByPage'))
//   // [TODO] modify getAllPacks to allow pagination instead having 2 logics
//   let packs
//   if (type) {
//     packs = await getPacksByType(packRepository)(type, currentPage, elementsByPage).catch(() => {
//       throw new Error('Error getting all packs')
//     })
//   } else {
//     packs = await getAllPacks(packRepository)().catch(() => {
//       throw new Error('Error getting all packs')
//     })
//   }

//   return new Response(JSON.stringify(packs), {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     status: 201
//   })
// }

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
