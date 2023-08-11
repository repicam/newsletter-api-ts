import { Document } from 'mongoose'

export interface UserBodyI {
  name?: string,
  email: string
}

export interface AdminBodyI extends UserBodyI {
  username?: string,
  password?: string,
  isAdmin?: boolean
}

export interface UserI extends AdminBodyI, Document {
  createdAt: Date,
  updatedAt: Date,
  isActive: boolean
}