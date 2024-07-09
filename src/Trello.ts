import dotenv from "dotenv";

import { Action } from './Actions'

import { Applications } from './Applications'

import { Batch } from './Batch'

import { Boards } from './Boards'

import { Cards } from './Cards'

import { Checklists } from './Checklists'

import { CustomFields } from './CustomFields'

import { Emoji } from './Emoji'

import { Enterprises } from './Enterprises'

import { Labels } from './Labels'

import { Lists } from './Lists'

import { Members } from './Members'

import { Notifications } from './Notifications'

import { Organizations } from './Organizations'

import { Plugins } from './Plugins'

import { Search } from './Search'

import { Tokens } from './Tokens'

import { Webhooks } from './Webhooks'

dotenv.config();

export const apiKey = process.env.API_KEY;

export const apiToken = process.env.API_TOKEN;

export const url = 'https://api.trello.com/1'

console.log('It Works! 🚀')