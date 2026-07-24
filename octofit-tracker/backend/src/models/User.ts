import { Schema, model } from 'mongoose';

export interface User {
  username: string;
  email: string;
  name: string;
  age: number;
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  goals: string[];
}

const userSchema = new Schema<User>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    fitnessLevel: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
    goals: [{ type: String, required: true }],
  },
  { timestamps: true },
);

export default model<User>('User', userSchema);
