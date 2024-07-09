import dotenv from "dotenv";
dotenv.config();

export const apiKey = process.env.API_KEY;

export const apiToken = process.env.API_TOKEN;

export const url = 'https://api.trello.com/1'

console.log('It Works! 🚀')