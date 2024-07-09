import dotenv from "dotenv";

export { Action } from './Actions';

export { Applications } from './Applications'

export { Batch } from './Batch'

export { Boards } from './Boards'

export { Cards } from './Cards'

export { Checklists } from './Checklists'

export { CustomFields } from './CustomFields'

export { Emoji } from './Emoji'

export { Enterprises } from './Enterprises'

export { Labels } from './Labels'

export { Lists } from './Lists'

export { Members } from './Members'

export { Notifications } from './Notifications'

export { Organizations } from './Organizations'

export { Plugins } from './Plugins'

export { Search } from './Search'

export { Tokens } from './Tokens'

export { Webhooks } from './Webhooks'

dotenv.config();

export const apiKey = process.env.API_KEY;

export const apiToken = process.env.API_TOKEN;

export const url = 'https://api.trello.com/1'

console.log('It Works! 🚀')