import { Document } from 'mongoose'

export interface UserBodyI {
  name: string,
  email: string
}

export interface UserI extends UserBodyI, Document {
  createdAt: Date,
  updatedAt: Date,
  isActive: boolean
}