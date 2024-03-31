import PackRepository from '@/modules/packs/domain/PackRepository'
import Pack from '@/modules/packs/domain/Pack'

export const getAllPacks = (packRepository: PackRepository): () => Promise<Pack[]> => {
  return async (): Promise<Pack[]> => {
    const packs = await packRepository.getAll() as Pack[]
    return packs
  }
}
