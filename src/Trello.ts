import dotenv from "dotenv";
import { getMemberBoards } from "./Members";
import { getBoardLists } from "./Boards";

export { Action } from './Actions';

export { Applications } from './Applications'

export { Batch } from './Batch'

export { createBoard, createBoardList, deleteBoard, getBoard, getBoardLists, getBoardMemberships, updateBoard } from "./Boards";

export { createCard } from "./Cards";

export { Checklists } from './Checklists'

export { CustomFields } from './CustomFields'

export { Emoji } from './Emoji'

export { Enterprises } from './Enterprises'

export { Labels } from './Labels'

export { Lists } from './Lists'

export { getMemberBoards } from "./Members";

export { Notifications } from './Notifications'

export { Organizations } from './Organizations'

export { Plugins } from './Plugins'

export { Search } from './Search'

export { Tokens } from './Tokens'

export { Webhooks } from './Webhooks'

dotenv.config();

export const apiKey = process.env.API_KEY;

export const apiToken = process.env.API_TOKEN;

export const apiUrl = 'https://api.trello.com/1';

export const apiAuth = `key=${apiKey}&token=${apiToken}`;

console.log('🚀 It Works!\n')

getMemberBoards('me', { filter: undefined, fields: 'name' }).then(res => {
    console.log('\x1b[36m%s\x1b[0m', '✅ getMemberBoards:', res, '\n');
});

// getBoardMemberships('66884501d7ef1f7f86227287', { filter: 'all', member: true, member_fields: 'username' }).then(res => {
//     console.log('\x1b[36m%s\x1b[0m', '✅ Members:', res, '\n');
// });

// getBoard('66884501d7ef1f7f86227287', { fields: 'name' }).then(res => {
//     console.log('\x1b[36m%s\x1b[0m', '✅ getBoard:', res, '\n');
// })

// updateBoard('66884501d7ef1f7f86227287', { name: 'Quadro de Teste'}).then(res => {
//     console.log('\x1b[36m%s\x1b[0m', '✅ updateBoard:', res, '\n');
// });

// deleteBoard('668d9bf0de01eea4c37ab6c4').then(res => {
//     console.log('\x1b[36m%s\x1b[0m', '✅ deleteBoard:', true, '\n');
// });

// createBoard({ name: 'Exemplo de Quadro' }).then(res => {
//     console.log('\x1b[36m%s\x1b[0m', '✅ createBoard:', res, '\n');
// });

getBoardLists('66884501d7ef1f7f86227287', { cards: 'all', fields: 'name', card_fields: undefined }).then(res => {
    console.log('\x1b[36m%s\x1b[0m', '✅ getBoardLists:', res, '\n');
});

// createBoardList('66884501d7ef1f7f86227287', { name: 'A ser feito' }).then(res => {
//     console.log('\x1b[36m%s\x1b[0m', '✅ getBoardLists:', res, '\n');
// });

// createCard({ name: 'Nome Maluco!', idList: '6688450b6e893347ec7e6de6' }).then(res => {
//     console.log('\x1b[36m%s\x1b[0m', '✅ createCard:', res, '\n');
// });
