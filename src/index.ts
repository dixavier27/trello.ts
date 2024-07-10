import { Members, Boards, Cards } from "./Trello";

Members.getMemberBoards('me', { filter: undefined, fields: 'name' }).then(res => {
    console.log('\x1b[36m%s\x1b[0m', '✅ getMemberBoards:', res, '\n');
});

Boards.getBoardMemberships('66884501d7ef1f7f86227287', { filter: 'all', member: true, member_fields: 'username' }).then(res => {
    console.log('\x1b[36m%s\x1b[0m', '✅ Members:', res, '\n');
});

Boards.getBoard('66884501d7ef1f7f86227287', { fields: 'name' }).then(res => {
    console.log('\x1b[36m%s\x1b[0m', '✅ getBoard:', res, '\n');
})

Boards.updateBoard('66884501d7ef1f7f86227287', { name: 'Quadro de Teste'}).then(res => {
    console.log('\x1b[36m%s\x1b[0m', '✅ updateBoard:', res, '\n');
});

Boards.deleteBoard('668d9bf0de01eea4c37ab6c4').then(res => {
    console.log('\x1b[36m%s\x1b[0m', '✅ deleteBoard:', true, '\n');
});

Boards.createBoard({ name: 'Exemplo de Quadro' }).then(res => {
    console.log('\x1b[36m%s\x1b[0m', '✅ createBoard:', res, '\n');
});

Boards.getBoardLists('66884501d7ef1f7f86227287', { cards: 'all', fields: 'name', card_fields: undefined }).then(res => {
    console.log('\x1b[36m%s\x1b[0m', '✅ getBoardLists:', res, '\n');
});

Boards.createBoardList('66884501d7ef1f7f86227287', { name: 'A ser feito' }).then(res => {
    console.log('\x1b[36m%s\x1b[0m', '✅ getBoardLists:', res, '\n');
});

Cards.createCard({ name: 'Nome Maluco!', idList: '6688450b6e893347ec7e6de6' }).then(res => {
    console.log('\x1b[36m%s\x1b[0m', '✅ createCard:', res, '\n');
});

Cards.getCard('668e17ee001286d8be81c582', { fields: 'name' }).then(res => {
    console.log('\x1b[36m%s\x1b[0m', '✅ getCard:', res, '\n');
});
