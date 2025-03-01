import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://icaparros:arenys08358@coursecluster.0ehfe9n.mongodb.net/minecraft?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB')
})
