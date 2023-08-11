import { Schema, model } from 'mongoose'

const userSchema = new Schema( {
  name: {
    type: String,
    required: true,
    default: 'Admin'
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true,
    select: false
  },
  isAdmin: {
    type: Boolean,
    default: false,
    select: false
  },
  password: {
    type: String,
    select: false,
    default: '-'
  },
  username: {
    type: String,
    select: false,
    default: '-'
  }
}, {
  versionKey: false,
  timestamps: true
} )

export const User = model( 'User', userSchema )