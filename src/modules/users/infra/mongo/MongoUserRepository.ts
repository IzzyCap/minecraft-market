import mongoose, { Document, Schema } from 'mongoose'
import User from '../../domain/User'
import UserRepository from '../../domain/UserRepository'
import '@/infra/mongo/connect' // Import the connect module

interface UserDocument extends Document {
  username: string,
  email: string,
  password: string
}

const userSchema = new Schema<UserDocument>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true }
},
{
  timestamps: true
})

const UserModel = mongoose.model<UserDocument>('User', userSchema)

class MongoUserRepository implements UserRepository {
  async getById (userId: string): Promise<User | null> {
    const user = await UserModel.findById(userId)
    return user ? user.toObject() : null
  }

  async exist (username: string, email: string): Promise<boolean | null> {
    return await UserModel.findOne({ $or: [{ email }, { username }] })
  }

  async create (username: string, email: string, password: string): Promise<User> {
    const newUser = new UserModel({ username, email, password })
    const savedUser = await newUser.save()
    return savedUser.toObject()
  }

  async authenticate (email: string, password: string): Promise<User | null> {
    return null
  }
}

export default MongoUserRepository
