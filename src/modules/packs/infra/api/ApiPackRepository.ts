import Pack from '../../domain/Pack'
import PackDetails from '../../domain/PackDetails'
import PackRepository from '../../domain/PackRepository'

class PackRepositoryApi implements PackRepository {
  async getById (packId: string): Promise<Pack | null> {
    const response = await fetch(`${process.env.URL}/packs/${packId}`)
    const pack = await response.json()

    return pack
  }

  async getAll (): Promise<Pack[]> {
    const response = await fetch(`${process.env.URL}/packs`)
    const packs = await response.json()

    return packs
  }

  async create (packData: PackDetails): Promise<Pack> {
    const response = await fetch(`${process.env.URL}/pack`, {
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

export default PackRepositoryApi
