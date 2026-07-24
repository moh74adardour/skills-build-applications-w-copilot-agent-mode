import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { apiBaseUrl } from './config/apiUrl.js';
import './config/database.js';
import activitiesRouter from './routes/activities.js';
import leaderboardRouter from './routes/leaderboard.js';
import teamsRouter from './routes/teams.js';
import usersRouter from './routes/users.js';
import workoutsRouter from './routes/workouts.js';
dotenv.config();
const app = express();
const port = Number(process.env.PORT) || 8000;
app.use(cors());
app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', baseUrl: apiBaseUrl });
});
app.listen(port, () => {
    console.log(`OctoFit backend listening on ${apiBaseUrl} (port ${port})`);
});
