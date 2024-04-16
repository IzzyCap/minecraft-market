import PackRepository from '@/modules/packs/domain/PackRepository'
import Pack from '@/modules/packs/domain/Pack'

// Here we will send the PackRepostiory.
// This function will have all the business logic but the doesnt know
// which Repositories are using. Maybe are API Repositories or Mongo Repositories.
export const getPackById = (packRepository: PackRepository): ((packId: string) => Promise<Pack | null>) => {
  return async (packId: string): Promise<Pack | null> => {
    const pack = await packRepository.getById(packId)

    if (!pack) {
      // throw new Error(`Card with id ${packId} not found`) //handle error
      console.log(`Card with id ${packId} not found`)
    }

    return pack
  }
}
