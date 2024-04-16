import Pack from '../../domain/Pack'
import PackDetails from '../../domain/PackDetails'
import PackRepository from '../../domain/PackRepository'

class ApiPackRepository implements PackRepository {
  async getById (packId: string): Promise<Pack | null> {
    const response = await fetch(`${process.env.URL}/api/packs/${packId}`)

    if (!response.ok) { // [TODO] handle error
      return null
    }

    const pack = await response.json()
    return pack
  }

  async getAll (): Promise<Pack[]> {
    const response = await fetch(`${process.env.URL}/api/packs`)
    const users = await response.json()
    return users
  }

  async getByType (type: string, currentPage: number, elementsByPage: number): Promise<Pack[]> {
    const response = await fetch(
      `${process.env.URL}/api/packs?type=${type}&currentPage=${currentPage}&elementsByPage=${elementsByPage}`
    )
    return response.json()
  }

  async create (packData: PackDetails): Promise<Pack> {
    const response = await fetch(`${process.env.URL}/api/pack`, {
      method: 'POST',
      body: JSON.stringify(
        packData
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })

    const createdPack = await response.json()

    return createdPack
  }

  update (packId: string, updatedData: Partial<Pack>): Promise<Pack | null> {
    throw new Error('Method not implemented.')
  }

  delete (packId: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}

export default ApiPackRepository
