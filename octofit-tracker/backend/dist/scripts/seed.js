import mongoose from 'mongoose';
import Activity from '../models/Activity.js';
import LeaderboardEntry from '../models/LeaderboardEntry.js';
import Team from '../models/Team.js';
import User from '../models/User.js';
import Workout from '../models/Workout.js';
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to octofit_db');
        console.log('Seed the octofit_db database with test data');
        await Promise.all([
            User.deleteMany({}),
            Team.deleteMany({}),
            Activity.deleteMany({}),
            LeaderboardEntry.deleteMany({}),
            Workout.deleteMany({}),
        ]);
        const users = await User.insertMany([
            {
                username: 'maya_runner',
                email: 'maya.runner@example.com',
                name: 'Maya Chen',
                age: 29,
                fitnessLevel: 'advanced',
                goals: ['Half marathon pace', 'Core strength'],
            },
            {
                username: 'leo_lift',
                email: 'leo.lift@example.com',
                name: 'Leo Martinez',
                age: 34,
                fitnessLevel: 'intermediate',
                goals: ['Build muscle', 'Improve mobility'],
            },
            {
                username: 'sam_starts',
                email: 'sam.starts@example.com',
                name: 'Sam Patel',
                age: 25,
                fitnessLevel: 'beginner',
                goals: ['Establish routine', 'Increase daily steps'],
            },
        ]);
        await Team.insertMany([
            {
                name: 'Trail Blazers',
                description: 'Outdoor runners chasing weekly mileage and elevation goals.',
                members: [users[0].username, users[2].username],
                weeklyGoalMinutes: 420,
            },
            {
                name: 'Strength Squad',
                description: 'Gym-focused athletes tracking progressive overload and recovery.',
                members: [users[1].username],
                weeklyGoalMinutes: 300,
            },
        ]);
        await Activity.insertMany([
            {
                user: users[0].username,
                type: 'Running',
                durationMinutes: 52,
                caloriesBurned: 610,
                activityDate: new Date('2026-07-20T07:30:00.000Z'),
            },
            {
                user: users[1].username,
                type: 'Strength Training',
                durationMinutes: 45,
                caloriesBurned: 380,
                activityDate: new Date('2026-07-21T18:15:00.000Z'),
            },
            {
                user: users[2].username,
                type: 'Brisk Walk',
                durationMinutes: 35,
                caloriesBurned: 190,
                activityDate: new Date('2026-07-22T12:00:00.000Z'),
            },
        ]);
        await LeaderboardEntry.insertMany([
            { username: users[0].username, points: 1840, rank: 1, badge: 'Endurance Ace' },
            { username: users[1].username, points: 1510, rank: 2, badge: 'Power Builder' },
            { username: users[2].username, points: 920, rank: 3, badge: 'Consistency Starter' },
        ]);
        await Workout.insertMany([
            {
                title: 'Tempo Run Builder',
                description: 'A steady run session with warmup and cooldown for aerobic endurance.',
                difficulty: 'intermediate',
                durationMinutes: 40,
                focusArea: 'Cardio',
                exercises: ['10 min warmup jog', '20 min tempo run', '10 min cooldown walk'],
            },
            {
                title: 'Full Body Strength Circuit',
                description: 'A balanced gym circuit for legs, push, pull, and core strength.',
                difficulty: 'intermediate',
                durationMinutes: 45,
                focusArea: 'Strength',
                exercises: ['Goblet squats', 'Push-ups', 'Dumbbell rows', 'Plank holds'],
            },
            {
                title: 'Beginner Mobility Reset',
                description: 'A low-impact routine for daily movement and joint range of motion.',
                difficulty: 'beginner',
                durationMinutes: 20,
                focusArea: 'Mobility',
                exercises: ['Cat-cow stretch', 'Hip circles', 'Wall angels', 'Calf raises'],
            },
        ]);
        console.log('Database seeding complete');
        await mongoose.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
