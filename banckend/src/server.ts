import dotenv from 'dotenv';
import taskRoutes from './routes/task.routes';
import connectToDatabase from './db/database';
import app from './app';
import userRoutes from './routes/user.routes';
dotenv.config();

const PORT = process.env.PORT || 8080;

app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);

async function startServer() {
  await connectToDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
}

startServer();
