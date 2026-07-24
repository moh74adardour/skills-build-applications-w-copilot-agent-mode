import { Schema, model } from 'mongoose';

export interface Team {
  name: string;
  description: string;
  members: string[];
  weeklyGoalMinutes: number;
}

const teamSchema = new Schema<Team>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    members: [{ type: String, required: true }],
    weeklyGoalMinutes: { type: Number, required: true },
  },
  { timestamps: true },
);

export default model<Team>('Team', teamSchema);
