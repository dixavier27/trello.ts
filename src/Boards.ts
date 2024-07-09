export const Boards = {};

// GET /boards/{id}/memberships
async function getBoardMemberships(
    id: string,
    params?: {
        filter?: string;
        activity?: boolean;
        orgMemberType?: boolean;
        member?: boolean;
        member_fields?: any; // interface
    }
): Promise<any> {
    const url = `/1/boards/${id}/memberships`; // GET
}

// GET /boards/{id}
async function getBoard(
    id: string,
    params?: {
        actions?: string;
        boardStars?: string;
        cards?: string;
        card_pluginData?: boolean;
        checklists?: string;
        customFields?: boolean;
        fields?: string;
        labels?: string;
        lists?: string;
        members?: string;
        memberships?: string;
        pluginData?: boolean;
        organization?: boolean;
        organization_pluginData?: boolean;
        myPrefs?: boolean;
        tags?: boolean;
    }
): Promise<any> {
    const url = `/1/boards/${id}`; // GET
}

// PUT /boards/{id}
async function updateBoard(
    id: string,
    params?: {
        name?: string;
        desc?: string;
        closed?: boolean;
        subscribed?: string; // trelloID
        idOrganization?: string;
        prefs?: {
            permissionLevel?: string;
            selfJoin?: boolean;
            cardCovers?: boolean;
            hideVotes?: boolean;
            invitations?: string;
            voting?: string;
            comments?: string;
            background?: string;
            cardAging?: string;
            calendarFeedEnabled?: boolean;
        };
        labelNames?: {
            green?: string;
            yellow?: string;
            orange?: string;
            red?: string;
            purple?: string;
            blue?: string;
        };
    }
): Promise<any> {
    const url = `/1/boards/${id}`; // PUT
}

// DEL /boards/{id}
// GET /boards/{id}/{field}
// GET /boards/{boardId}/actions
// GET /boards/{id}/cards/{idCard}
// GET /boards/{boardId}/boardStars
// GET /boards/{id}/checklists
// GET /boards/{id}/cards
// GET /boards/{id}/cards/{filter}
// GET /boards/{id}/customFields
// GET /boards/{id}/labels
// POST /boards/{id}/labels
// GET /boards/{id}/lists
// POST /boards/{id}/lists
// GET /boards/{id}/lists/{filter}
// GET /boards/{id}/members
// PUT /boards/{id}/members
// PUT /boards/{id}/members/{idMember}
// DEL /boards/{id}/members/{idMember}
// PUT /boards/{id}/memberships/{idMembership}
// PUT /boards/{id}/myPrefs/emailPosition
// PUT /boards/{id}/myPrefs/idEmailList
// PUT /boards/{id}/myPrefs/showListGuide
// PUT /boards/{id}/myPrefs/showSidebar
// PUT /boards/{id}/myPrefs/showSidebarActivity
// PUT /boards/{id}/myPrefs/showSidebarBoardActions
// PUT /boards/{id}/myPrefs/showSidebarMembers
// POST /boards/
// POST /boards/{id}/calendarKey/generate
// POST /boards/{id}/emailKey/generate
// POST /boards/{id}/idTags
// POST /boards/{id}/markedAsViewed
// GET /boards/{id}/boardPlugins
// POST /boards/{id}/boardPlugins
// DEL /boards/{id}/boardPlugins/{idPlugin}
// GET /boards/{id}/plugins