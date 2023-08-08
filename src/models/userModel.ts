import { Schema, model } from 'mongoose'


const userSchema = new Schema( {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  versionKey: false,
  timestamps: true
} )

export const User = model( 'User', userSchema )