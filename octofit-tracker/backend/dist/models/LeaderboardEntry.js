import { Schema, model } from 'mongoose';
const leaderboardEntrySchema = new Schema({
    username: { type: String, required: true, unique: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
    badge: { type: String, required: true },
}, { timestamps: true });
export default model('LeaderboardEntry', leaderboardEntrySchema);
