import PackRepository from '@/modules/packs/domain/PackRepository'
import Pack from '@/modules/packs/domain/Pack'
import PackDetails from '@/modules/packs/domain/PackDetails'

export const createPack = (packRepository: PackRepository): (pack: PackDetails) => Promise<Pack> => {
  return async (pack: PackDetails): Promise<Pack> => {
    const createdPack = await packRepository.create(pack) as Pack

    return {
      ...createdPack
    }
  }
}
