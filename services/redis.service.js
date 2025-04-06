import Redis from "ioredis";

const redisClient = new Redis({
  host: process.env.REDIS_HOST, // Redis server host
  port: process.env.REDIS_PORT, 
  password:process.env.REDIS_PASSWORD,     // Redis server port
  connectTimeout: 10000, // Increase the connection timeout to 10 seconds
});

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

export default redisClient;  