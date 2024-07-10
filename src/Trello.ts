import dotenv from "dotenv";

export import Action = require('./Actions');

export import Applications = require('./Applications');

export import Batch = require('./Batch');

export import Boards = require('./Boards');

export import Cards = require('./Cards');

export import Checklists = require('./Checklists');

export import CustomFields = require('./CustomFields');

export import Emoji = require('./Emoji');

export import Enterprises = require('./Enterprises');

export import Labels = require('./Labels');

export import Lists = require('./Lists');

export import Members = require('./Members');

export import Notifications = require('./Notifications');

export import Organizations = require('./Organizations');

export import Plugins = require('./Plugins');

export import Search = require('./Search');

export import Tokens = require('./Tokens');

export import Webhooks = require('./Webhooks');

dotenv.config();

export const apiKey = process.env.API_KEY;

export const apiToken = process.env.API_TOKEN;

export const apiUrl = 'https://api.trello.com/1';

export const apiAuth = `key=${apiKey}&token=${apiToken}`;

console.log('🚀 It Works!\n')
