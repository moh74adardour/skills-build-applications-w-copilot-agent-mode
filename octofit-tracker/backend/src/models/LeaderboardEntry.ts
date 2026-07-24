import { Schema, model } from 'mongoose';

export interface LeaderboardEntry {
  username: string;
  points: number;
  rank: number;
  badge: string;
}

const leaderboardEntrySchema = new Schema<LeaderboardEntry>(
  {
    username: { type: String, required: true, unique: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
    badge: { type: String, required: true },
  },
  { timestamps: true },
);

export default model<LeaderboardEntry>('LeaderboardEntry', leaderboardEntrySchema);
