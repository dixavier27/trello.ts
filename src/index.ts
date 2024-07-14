import dotenv from "dotenv";

export import Action = require('./endpoints/Actions');

export import Applications = require('./endpoints/Applications');

export import Batch = require('./endpoints/Batch');

export import Boards = require('./endpoints/Boards');

export import Cards = require('./endpoints/Cards');

export import Checklists = require('./endpoints/Checklists');

export import CustomFields = require('./endpoints/CustomFields');

export import Emoji = require('./endpoints/Emoji');

export import Enterprises = require('./endpoints/Enterprises');

export import Labels = require('./endpoints/Labels');

export import Lists = require('./endpoints/Lists');

export import Members = require('./endpoints/Members');

export import Notifications = require('./endpoints/Notifications');

export import Organizations = require('./endpoints/Organizations');

export import Plugins = require('./endpoints/Plugins');

export import Search = require('./endpoints/Search');

export import Tokens = require('./endpoints/Tokens');

export import Webhooks = require('./endpoints/Webhooks');

dotenv.config();

export const apiKey = process.env.API_KEY;

export const apiToken = process.env.API_TOKEN;

export const apiUrl = 'https://api.trello.com/1';

export const apiAuth = `key=${apiKey}&token=${apiToken}`;

console.log('🚀 It Works!\n')
