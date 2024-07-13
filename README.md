# Documentation

**Instalation**
````
npm i git+https://github.com/dixavier27/trello.ts.git 
````

**Import the module**
````
import { Members, Boards, Cards, Lists } from "trello.ts";
````

**Trello Power-Ups and Integrations**
````
https://trello.com/power-ups/admin
````
**Trello Official Rest API Documentation**
````
https://developer.atlassian.com/cloud/trello/rest/
````
**Trello Token Template**
````
https://trello.com/1/authorize?expiration=never&name={{NAME}}&scope=read,write&response_type=token&key={{KEY}}
````
## List of Endpoints and Operations
At the total, Trello's API have `18 endpoints` (Actions, Applications, Batch, Boards, Cards, Checklists, CustomFields, Emoji, Enterprises, Labels, Lists, Members, Notifications, Organizations, Plugins, Search, Tokens, Webhooks) and `257 operations` (no, I won't do that to you guys, lol). So, to get all these tasks done I organized a list of items to work in gradually. Then, Ladies and Gentlemans, I hope you enjoy, let's code together!

**Endpoints: 0/18**

**Operations: 21/257**

**Total: 8,17%**

## Endpoints
### Actions
	* [ ] GET /actions/{id}
	* [ ] PUT /actions/{id}
	* [ ] DEL /actions/{id}
	* [ ] GET /actions/{id}/{field}
	* [ ] GET /actions/{id}/board
	* [ ] GET /actions/{id}/card
	* [ ] GET /actions/{id}/list
	* [ ] GET /actions/{id}/member
	* [ ] GET /actions/{id}/memberCreator
	* [ ] GET /actions/{id}/organization
	* [ ] PUT /actions/{id}/text
	* [ ] GET /actions/{id}/reactions
	* [ ] POST /actions/{id}/reactions
	* [ ] GET /actions/{id}/reactions/{id}
	* [ ] DEL /actions/{id}/reactions/{id}
	* [ ] GET /actions/{id}/reactionsSummary
### Applications
	* [ ] GET /applications/{key}/compliance
### Batch
	* [ ] GET /batch
### Boards
	* [x] GET /boards/{id}/memberships → Boards.getBoardMemberships()
	* [x] GET /boards/{id} → Boards.getBoard()
	* [x] PUT /boards/{id} → Boards.updateBoard()
	* [x] DEL /boards/{id} → Boards.deleteBoard()
	* [x] GET /boards/{id}/{field} → Boards.getBoardField()
	* [x] GET /boards/{boardId}/actions → Boards.getBoardActions()
	* [x] GET /boards/{id}/cards/{idCard} → Boards.getBoardCard()
	* [x] GET /boards/{boardId}/boardStars → Boards.getBoardStars()
	* [x] GET /boards/{id}/checklists → Boards.getBoardChecklists()
	* [x] GET /boards/{id}/cards → Boards.getBoardCards()
	* [ ] GET /boards/{id}/cards/{filter} → getBoardCardsByFilter()
	* [ ] GET /boards/{id}/customFields
	* [ ] GET /boards/{id}/labels
	* [ ] POST /boards/{id}/labels
	* [x] GET /boards/{id}/lists → Boards.getBoardLists()
	* [x] POST /boards/{id}/lists → Boards.createBoardList()
	* [ ] GET /boards/{id}/lists/{filter}
	* [ ] GET /boards/{id}/members
	* [ ] PUT /boards/{id}/members
	* [ ] PUT /boards/{id}/members/{idMember}
	* [ ] DEL /boards/{id}/members/{idMember}
	* [ ] PUT /boards/{id}/memberships/{idMembership}
	* [ ] PUT /boards/{id}/myPrefs/emailPosition
	* [ ] PUT /boards/{id}/myPrefs/idEmailList
	* [ ] PUT /boards/{id}/myPrefs/showListGuide
	* [ ] PUT /boards/{id}/myPrefs/showSidebar
	* [ ] PUT /boards/{id}/myPrefs/showSidebarActivity
	* [ ] PUT /boards/{id}/myPrefs/showSidebarBoardActions
	* [ ] PUT /boards/{id}/myPrefs/showSidebarMembers
	* [x] POST /boards/ → Boards.createBoard()
	* [ ] POST /boards/{id}/calendarKey/generate
	* [ ] POST /boards/{id}/emailKey/generate
	* [ ] POST /boards/{id}/idTags
	* [ ] POST /boards/{id}/markedAsViewed
	* [ ] GET /boards/{id}/boardPlugins
	* [ ] POST /boards/{id}/boardPlugins
	* [ ] DEL /boards/{id}/boardPlugins/{idPlugin}
	* [ ] GET /boards/{id}/plugins
### Cards
	* [x] POST /cards → Cards.createCard()
	* [x] GET /cards/{id} → Cards.getCard()
	* [x] PUT /cards/{id} → Cards.updateCard()
	* [x] DEL /cards/{id} → Cards.deleteCard()
	* [x] GET /cards/{id}/{field} → Cards.getCardField()
	* [ ] GET /cards/{id}/actions
	* [ ] GET /cards/{id}/attachments
	* [ ] POST /cards/{id}/attachments
	* [ ] GET /cards/{id}/attachments/{idAttachment}
	* [ ] DEL /cards/{id}/attachments/{idAttachment}
	* [ ] GET /cards/{id}/board
	* [ ] GET /cards/{id}/checkItemStates
	* [ ] GET /cards/{id}/checklists
	* [ ] POST /cards/{id}/checklists
	* [ ] GET /cards/{id}/checkItem/{idCheckItem}
	* [ ] PUT /cards/{id}/checkItem/{idCheckItem}
	* [ ] DEL /cards/{id}/checkItem/{idCheckItem}
	* [ ] GET /cards/{id}/list
	* [ ] GET /cards/{id}/members
	* [ ] GET /cards/{id}/membersVoted
	* [ ] POST /cards/{id}/membersVoted
	* [ ] GET /cards/{id}/pluginData
	* [ ] GET /cards/{id}/stickers
	* [ ] POST /cards/{id}/stickers
	* [ ] GET /cards/{id}/stickers/{idSticker}
	* [ ] PUT /cards/{id}/stickers/{idSticker}
	* [ ] DEL /cards/{id}/stickers/{idSticker}
	* [ ] PUT /cards/{id}/actions/{idAction}/comments
	* [ ] DEL /cards/{id}/actions/{idAction}/comments
	* [ ] PUT /cards/{idCard}/customField/{idCustomField}/item
	* [ ] PUT /cards/{idCard}/customFields
	* [ ] GET /cards/{id}/customFieldItems
	* [ ] POST /cards/{id}/actions/comments
	* [ ] POST /cards/{id}/idLabels
	* [ ] POST /cards/{id}/idMembers
	* [ ] POST /cards/{id}/labels
	* [ ] POST /cards/{id}/markAssociatedNotificationsRead
	* [ ] DEL /cards/{id}/idLabels/{idLabel}
	* [ ] DEL /cards/{id}/idMembers/{idMember}
	* [ ] DEL /cards/{id}/membersVoted/{idMember}
	* [ ] PUT /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}
	* [ ] DEL /cards/{id}/checklists/{idChecklist}
### Checklists
	* [ ] POST /checklists
	* [ ] GET /checklists/{id}
	* [ ] PUT /checklists/{id}
	* [ ] DEL /checklists/{id}
	* [ ] GET /checklists/{id}/{field}
	* [ ] PUT /checklists/{id}/{field}
	* [ ] GET /checklists/{id}/board
	* [ ] GET /checklists/{id}/cards
	* [ ] GET /checklists/{id}/checkItems
	* [ ] POST /checklists/{id}/checkItems
	* [ ] GET /checklists/{id}/checkItems/{idCheckItem}
	* [ ] DEL /checklists/{id}/checkItems/{idCheckItem}
### CustomFields
	* [ ] POST /customFields
	* [ ] GET /customFields/{id}
	* [ ] PUT /customFields/{id}
	* [ ] DEL /customFields/{id}
	* [ ] GET /customFields/{id}/options
	* [ ] POST /customFields/{id}/options
	* [ ] GET /customFields/{id}/options/{idCustomFieldOption}
	* [ ] DEL /customFields/{id}/options/{idCustomFieldOption}
### Emoji
	* [ ] GET /emoji
### Enterprises
	* [ ] GET /enterprises/{id}
	* [ ] GET /enterprises/{id}/auditlog
	* [ ] GET /enterprises/{id}/admins
	* [ ] GET /enterprises/{id}/signupUrl
	* [ ] GET /enterprises/{id}/members/query
	* [ ] GET /enterprises/{id}/members
	* [ ] GET /enterprises/{id}/members/{idMember}
	* [ ] GET /enterprises/{id}/transferrable/organization/{idOrganization}
	* [ ] GET /enterprises/{id}/transferrable/bulk/{idOrganizations}
	* [ ] PUT /enterprises/${id}/enterpriseJoinRequest/bulk
	* [ ] GET /enterprises/{id}/claimableOrganizations
	* [ ] GET /enterprises/{id}/pendingOrganizations
	* [ ] POST /enterprises/{id}/tokens
	* [ ] PUT /enterprises/{id}/organizations
	* [ ] PUT /enterprises/{id}/members/{idMember}/licensed
	* [ ] PUT /enterprises/{id}/members/{idMember}/deactivated
	* [ ] PUT /enterprises/{id}/admins/{idMember}
	* [ ] DEL /enterprises/{id}/admins/{idMember}
	* [ ] DEL /enterprises/{id}/organizations/{idOrg}
	* [ ] GET /enterprises/{id}/organizations/bulk/{idOrganizations}
### Labels
	* [ ] GET /labels/{id}
	* [ ] PUT /labels/{id}
	* [ ] DEL /labels/{id}
	* [ ] PUT /labels/{id}/{field}
	* [ ] POST /labels
### Lists
	* [x] GET /lists/{id} → Lists.getList()
	* [ ] PUT /lists/{id}
	* [ ] POST /lists
	* [ ] POST /lists/{id}/archiveAllCards
	* [ ] POST /lists/{id}/moveAllCards
	* [ ] PUT /lists/{id}/closed
	* [ ] PUT /lists/{id}/idBoard
	* [ ] PUT /lists/{id}/{field}
	* [ ] GET /lists/{id}/actions
	* [ ] GET /lists/{id}/board
	* [ ] GET /lists/{id}/cards
### Members
	* [ ] GET /members/{id}
	* [ ] PUT /members/{id}
	* [ ] GET /members/{id}/{field}
	* [ ] GET /members/{id}/actions
	* [ ] GET /members/{id}/boardBackgrounds
	* [ ] POST /members/{id}/boardBackgrounds
	* [ ] GET /members/{id}/boardBackgrounds/{idBackground}
	* [ ] PUT /members/{id}/boardBackgrounds/{idBackground}
	* [ ] DEL /members/{id}/boardBackgrounds/{idBackground}
	* [ ] GET /members/{id}/boardStars
	* [ ] POST /members/{id}/boardStars
	* [ ] GET /members/{id}/boardStars/{idStar}
	* [ ] PUT /members/{id}/boardStars/{idStar}
	* [ ] DEL /members/{id}/boardStars/{idStar}
	* [x] GET /members/{id}/boards → Members.getMemberBoards()
	* [ ] GET /members/{id}/boardsInvited
	* [ ] GET /members/{id}/cards
	* [ ] GET /members/{id}/customBoardBackgrounds
	* [ ] POST /members/{id}/customBoardBackgrounds
	* [ ] GET /members/{id}/customBoardBackgrounds/{idBackground}
	* [ ] PUT /members/{id}/customBoardBackgrounds/{idBackground}
	* [ ] DEL /members/{id}/customBoardBackgrounds/{idBackground}
	* [ ] GET /members/{id}/customEmoji
	* [ ] POST /members/{id}/customEmoji
	* [ ] GET /members/{id}/customEmoji/{idEmoji}
	* [ ] GET /members/{id}/customStickers
	* [ ] POST /members/{id}/customStickers
	* [ ] GET /members/{id}/customStickers/{idSticker}
	* [ ] DEL /members/{id}/customStickers/{idSticker}
	* [ ] GET /members/{id}/notifications
	* [ ] GET /members/{id}/organizations
	* [ ] GET /members/{id}/organizationsInvited
	* [ ] GET /members/{id}/savedSearches
	* [ ] POST /members/{id}/savedSearches
	* [ ] GET /members/{id}/savedSearches/{idSearch}
	* [ ] PUT /members/{id}/savedSearches/{idSearch}
	* [ ] DEL /members/{id}/savedSearches/{idSearch}
	* [ ] GET /members/{id}/tokens
	* [ ] POST /members/{id}/avatar
	* [ ] POST /members/{id}/oneTimeMessagesDismissed
	* [ ] GET /members/{id}/notificationsChannelSettings
	* [ ] PUT /members/{id}/notificationsChannelSettings
	* [ ] GET /members/{id}/notificationsChannelSettings/{channel}
	* [ ] PUT /members/{id}/notificationsChannelSettings/{channel}
	* [ ] PUT /members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}
### Notifications
	* [ ] GET /notifications/{id}
	* [ ] PUT /notifications/{id}
	* [ ] GET /notifications/{id}/{field}
	* [ ] POST /notifications/all/read
	* [ ] PUT /notifications/{id}/unread
	* [ ] GET /notifications/{id}/board
	* [ ] GET /notifications/{id}/card
	* [ ] GET /notifications/{id}/list
	* [ ] GET /notifications/{id}/member
	* [ ] GET /notifications/{id}/memberCreator
	* [ ] GET /notifications/{id}/organization
### Organizations
	* [ ] POST /organizations
	* [ ] GET /organizations/{id}
	* [ ] PUT /organizations/{id}
	* [ ] DEL /organizations/{id}
	* [ ] GET /organizations/{id}/{field}
	* [ ] GET /organizations/{id}/actions
	* [ ] GET /organizations/{id}/boards
	* [ ] GET /organizations/{id}/exports
	* [ ] POST /organizations/{id}/exports
	* [ ] GET /organizations/{id}/members
	* [ ] PUT /organizations/{id}/members
	* [ ] GET /organizations/{id}/memberships
	* [ ] GET /organizations/{id}/memberships/{idMembership}
	* [ ] GET /organizations/{id}/pluginData
	* [ ] GET /organizations/{id}/tags
	* [ ] POST /organizations/{id}/tags
	* [ ] PUT /organizations/{id}/members/{idMember}
	* [ ] DEL /organizations/{id}/members/{idMember}
	* [ ] PUT /organizations/{id}/members/{idMember}/deactivated
	* [ ] POST /organizations/{id}/logo
	* [ ] DEL /organizations/{id}/logo
	* [ ] DEL /organizations/{id}/members/{idMember}/all
	* [ ] DEL /organizations/{id}/prefs/associatedDomain
	* [ ] DEL /organizations/{id}/prefs/orgInviteRestrict
	* [ ] DEL /organizations/{id}/tags/{idTag}
	* [ ] GET /organizations/{id}/newBillableGuests/{idBoard}
### Plugins
	* [ ] GET /plugins/{id}/
	* [ ] PUT /plugins/{id}/
	* [ ] POST /plugins/{idPlugin}/listing
	* [ ] GET /plugins/{id}/compliance/memberPrivacy
	* [ ] PUT /plugins/{idPlugin}/listings/{idListing}
### Search
	* [ ] GET /search
	* [ ] GET /search/members/
### Tokens
	* [ ] GET /tokens/{token}
	* [ ] GET /tokens/{token}/member
	* [ ] GET /tokens/{token}/webhooks
	* [ ] POST /tokens/{token}/webhooks
	* [ ] GET /tokens/{token}/webhooks/{idWebhook}
	* [ ] PUT /tokens/{token}/webhooks/{idWebhook}
	* [ ] DEL /tokens/{token}/webhooks/{idWebhook}
	* [ ] DEL /tokens/{token}/
### Webhooks
	* [ ] POST /webhooks/
	* [ ] GET /webhooks/{id}
	* [ ] PUT /webhooks/{id}
	* [ ] DEL /webhooks/{id}
	* [ ] GET /webhooks/{id}/{field}

## Usage

````typescript
import { Members, Boards, Cards, Lists } from "trello.ts";

Members.getMemberBoards({ id: 'me' }, { filter: 'starred', fields: 'name,desc,starred' })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ getMemberBoards:', res, '\n');
    });

Boards.getBoardMemberships({ id: '66884501d7ef1f7f86227287' }, { filter: 'all', member: true, member_fields: 'id,username' })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ getBoardMemberships:', res, '\n');
    });

Boards.getBoard({ id: '66884501d7ef1f7f86227287' }, { fields: 'name,desc' })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ getBoard:', res, '\n');
    })

Boards.updateBoard({ id: '66884501d7ef1f7f86227287' }, { name: 'Quadro #1', closed: false })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ updateBoard:', res, '\n');
    });

Boards.deleteBoard({ id: '66905a4087c2e2b63ff8004c' })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ deleteBoard:', true, '\n');
    });

Boards.getBoardField({ id: '66884501d7ef1f7f86227287', field: 'name' })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ getBoardField:', res, '\n');
    });

Boards.getBoardActions({ boardId: '66884501d7ef1f7f86227287' }, { fields: 'id,date,data,type', limit: 3 })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ getBoardActions:', res, '\n');
    });

Boards.getBoardCard({ id: '66884501d7ef1f7f86227287', idCard: '66908353a4612845522ded37' }, {})
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ getBoardCard:', res, '\n');
    });

Boards.getBoardStars({ boardId: '66884501d7ef1f7f86227287' }, { filter: undefined })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ getBoardStars:', res, '\n');
    });

Boards.getBoardChecklists({ id: '66884501d7ef1f7f86227287' })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ getBoardChecklists:', res, '\n');
    });

Boards.getBoardCards({ id: '66884501d7ef1f7f86227287' })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ getBoardCards:', res, '\n');
    });

Boards.getBoardCardsByFilter({ id: '66884501d7ef1f7f86227287', filter: 'open' })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ getBoardCardsByFilter:', res, '\n');
    });

Boards.getBoardLists({ id: '66884501d7ef1f7f86227287' }, { cards: 'all', fields: 'name', card_fields: undefined })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ getBoardLists:', res, '\n');
    });

Boards.createBoardList({ id: '66884501d7ef1f7f86227287' }, { name: 'Nome maluco' })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ createBoardList:', res, '\n');
    });

Boards.createBoard({ name: 'Exemplo de Quadro' })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ createBoard:', res, '\n');
    });

Cards.createCard({ idList: '668e269a5211a160aa9cebcf', name: undefined, desc: 'Some description' })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ createCard:', res, '\n');
    });

Cards.getCard({ id: '6690854521ac10648a179780' }, { fields: 'name,desc' })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ getCard:', res, '\n');
    });

Cards.updateCard({ id: '6690854521ac10648a179780' }, { name: 'Outro Nome', desc: 'Algumas descrição', due: '2024-07-13T04:00:00.000Z', subscribed: true })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ updateCard:', res, '\n');
    });

Cards.deleteCard({ id: '6690854521ac10648a179780' })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ deleteCard:', res, '\n');
    });

Cards.getCardField({ id: '66908353a4612845522ded37', field: 'desc' })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ getCardField:', res, '\n');
    });

Lists.getList({ id: '669066e4fb4543dba9e62de2' }, { fields: undefined })
    .then(res => {
        console.log('\x1b[36m%s\x1b[0m', '✅ getList:', res, '\n');
    })
````
