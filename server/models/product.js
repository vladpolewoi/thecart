import mongoose from  'mongoose'

mongoose.Promise = global.Promise

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    requried: true
  }
})

export default mongoose.model('Product', productSchema)