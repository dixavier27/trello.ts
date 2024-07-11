import { Members, Boards, Cards } from "./Trello";

// Members.getMemberBoards({ id: 'me' }, { filter: 'starred', fields: 'name,desc,starred' })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ getMemberBoards:', res, '\n');
//     });

// Boards.getBoardMemberships({ id: '66884501d7ef1f7f86227287' }, { filter: 'all', member: true, member_fields: 'id,username' })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ getBoardMemberships:', res, '\n');
//     });

// Boards.getBoard({ id: '66884501d7ef1f7f86227287' }, { fields: 'name,desc' })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ getBoard:', res, '\n');
//     })

// Boards.updateBoard({ id: '66884501d7ef1f7f86227287' }, { name: 'Quadro #1', closed: false }).then(res => {
//     console.log('\x1b[36m%s\x1b[0m', '✅ updateBoard:', res, '\n');
// });

// Boards.deleteBoard({ id: '66905a4087c2e2b63ff8004c' })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ deleteBoard:', true, '\n');
//     });

// Boards.createBoard({ name: 'Exemplo de Quadro' })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ createBoard:', res, '\n');
//     });

// Boards.getBoardLists('66884501d7ef1f7f86227287', { cards: 'all', fields: 'name', card_fields: undefined }).then(res => {
//     console.log('\x1b[36m%s\x1b[0m', '✅ getBoardLists:', res, '\n');
// });

// Boards.createBoardList('66884501d7ef1f7f86227287', { name: 'A ser feito' }).then(res => {
//     console.log('\x1b[36m%s\x1b[0m', '✅ getBoardLists:', res, '\n');
// });

// Cards.createCard({ name: 'Nome Maluco!', idList: '668e269a5211a160aa9cebcf' }).then(res => {
//     console.log('\x1b[36m%s\x1b[0m', '✅ createCard:', res, '\n');
// });

// Cards.getCard('668e17ee001286d8be81c582', { fields: 'name' }).then(res => {
//     console.log('\x1b[36m%s\x1b[0m', '✅ getCard:', res, '\n');
// });

// Cards.updateCard('668e26ea01bbe03176807214', { name: 'Outro Nome', desc: 'Algumas descrição', due: '2024-07-13T04:00:00.000Z', subscribed: true }).then(res => {
//     console.log('\x1b[36m%s\x1b[0m', '✅ updateCard:', res, '\n');
// });

// Cards.deleteCard('668e26ea01bbe03176807214').then(res => {
//     console.log('\x1b[36m%s\x1b[0m', '✅ deleteCard:', res, '\n');
// });

// Cards.getCardField('668e41e433684df90914989e', 'desc').then(res => {
//     console.log('\x1b[36m%s\x1b[0m', '✅ getCardField:', res, '\n');
// });
