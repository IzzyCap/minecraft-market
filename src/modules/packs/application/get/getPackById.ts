import PackRepository from '@/modules/packs/domain/PackRepository'
import Pack from '@/modules/packs/domain/Pack'

// Here we will send the PackRepostiory.
// This function will have all the business logic but the doesnt know
// which Repositories are using. Maybe are API Repositories or Mongo Repositories.
export const getPackById = (packRepository: PackRepository): ((packId: string) => Promise<Pack | undefined>) => {
  return async (packId: string): Promise<Pack | undefined> => {
    const pack = await packRepository.getById(packId)

    if (!pack) {
      throw new Error(`Card with id ${packId} not found`)
    }

    return pack
  }
}

// How to call this function
// const pack = (await getPackById(packRepository)(packId)) as Pack;
