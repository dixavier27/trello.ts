# Documentation

**Instalation**
````
npm i git+https://github.com/dixavier27/trello.ts.git 
````

**Import the module**
````
import { Members, Boards, Cards, Lists } from "./Trello";
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

**Operations: 20/257**

**Total: 7,78%**

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
	* [ ] GET /boards/{id}/cards/{filter}
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
