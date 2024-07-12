import { Members, Boards, Cards, Lists } from "./Trello";

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

// Boards.updateBoard({ id: '66884501d7ef1f7f86227287' }, { name: 'Quadro #1', closed: false })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ updateBoard:', res, '\n');
//     });

// Boards.deleteBoard({ id: '66905a4087c2e2b63ff8004c' })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ deleteBoard:', true, '\n');
//     });

// Boards.getBoardField({ id: '66884501d7ef1f7f86227287', field: 'name' })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ getBoardField:', res, '\n');
//     });

// Boards.getBoardActions({ boardId: '66884501d7ef1f7f86227287' }, { fields: 'id,date,data,type', limit: 3 })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ getBoardActions:', res, '\n');
//     });

Boards.getBoardCard({ id: '66884501d7ef1f7f86227287', idCard: '66908353a4612845522ded37' }, {})
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ getBoardCard:', res, '\n');
    });

// Boards.getBoardLists({ id: '66884501d7ef1f7f86227287' }, { cards: 'all', fields: 'name', card_fields: undefined })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ getBoardLists:', res, '\n');
//     });

// Boards.createBoardList({ id: '66884501d7ef1f7f86227287' }, { name: 'Nome maluco' })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ createBoardList:', res, '\n');
//     });

// Boards.createBoard({ name: 'Exemplo de Quadro' })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ createBoard:', res, '\n');
//     });

// Cards.createCard({ idList: '668e269a5211a160aa9cebcf', name: undefined, desc: 'Some description' })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ createCard:', res, '\n');
//     });

// Cards.getCard({ id: '6690854521ac10648a179780' }, { fields: 'name,desc' })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ getCard:', res, '\n');
//     });

// Cards.updateCard({ id: '6690854521ac10648a179780' }, { name: 'Outro Nome', desc: 'Algumas descrição', due: '2024-07-13T04:00:00.000Z', subscribed: true })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ updateCard:', res, '\n');
//     });

// Cards.deleteCard({ id: '6690854521ac10648a179780' })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ deleteCard:', res, '\n');
//     });

// Cards.getCardField({ id: '66908353a4612845522ded37', field: 'desc' })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ getCardField:', res, '\n');
//     });

// Lists.getList({ id: '669066e4fb4543dba9e62de2' }, { fields: undefined })
//     .then(res => {
//         console.log('\x1b[36m%s\x1b[0m', '✅ getList:', res, '\n');
//     })
