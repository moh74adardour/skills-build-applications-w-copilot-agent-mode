import { Schema, model } from 'mongoose';

export interface Workout {
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  durationMinutes: number;
  focusArea: string;
  exercises: string[];
}

const workoutSchema = new Schema<Workout>(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
    durationMinutes: { type: Number, required: true },
    focusArea: { type: String, required: true },
    exercises: [{ type: String, required: true }],
  },
  { timestamps: true },
);

export default model<Workout>('Workout', workoutSchema);
