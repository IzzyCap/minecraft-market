import mongoose, { Document, Schema } from 'mongoose'
import Pack from '../../domain/Pack'
import PackDetails from '../../domain/PackDetails'
import PackRepository from '../../domain/PackRepository'
import '@/infra/mongo/connect' // Import the connect module

interface PackDocument extends Document {
  details: {
    id: string,
    type: string,
    name: string,
    description: string,
    author: string,
    banner: string,
  }
}

const packSchema = new Schema<PackDocument>({
  details: {
    id: { type: String, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    banner: { type: String, required: true }
  }
})

const PackModel = mongoose.models.Pack || mongoose.model<PackDocument>('Pack', packSchema)

class MongoPackRepository implements PackRepository {
  async getById (packId: string): Promise<Pack | null> {
    // const pack = await PackModel.findById(packId)
    // return pack ? pack.toObject() : null
    const pack = await PackModel.findOne({ 'details.id': packId })
    return pack ? pack.toObject() : null
  }

  async getAll (): Promise<Pack[]> {
    const packs = await PackModel.find()
    return packs.map((pack) => pack.toObject())
  }

  async getByType (type: string, currentPage: number, elementsByPage: number): Promise<Pack[]> {
    const skip = (currentPage - 1) * elementsByPage
    const packs = await PackModel.find({ 'details.type': type })
      .skip(skip)
      .limit(elementsByPage)
    return packs.map((pack) => pack.toObject())
  }

  async create (packData: PackDetails): Promise<Pack> {
    const newPack = new PackModel({ details: packData })
    const savedPack = await newPack.save()
    return savedPack.toObject()
  }

  async update (packId: string, updatedData: Partial<Pack>): Promise<Pack | null> {
    const updatedPack = await PackModel.findByIdAndUpdate(packId, { details: updatedData }, { new: true })
    return updatedPack ? updatedPack.toObject() : null
  }

  async delete (packId: string): Promise<boolean> {
    const result = await PackModel.findByIdAndDelete(packId)
    return result !== null
  }
}

export default MongoPackRepository
