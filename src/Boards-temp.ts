
// GET /boards/{id}/{field}
export async function getBoardField(
    id: string,
    field: string
): Promise<any> {
    const url = `${apiUrl}/boards/${id}/${field}?${apiAuth}`; // GET
}

// GET /boards/{boardId}/actions
export async function getBoardActions(): Promise<any> { }

// GET /boards/{id}/cards/{idCard}
export async function getBoardCard(id: string, idCard: string): Promise<any> {
    const url = `${apiUrl}/boards/${id}/cards/${idCard}?${apiAuth}`; // GET
}

// GET /boards/{boardId}/boardStars
export async function getBoardStars(boardId: string, filter?: string): Promise<any> {
    const url = `${apiUrl}/boards/${boardId}/boardStars?${apiAuth}`; // GET
}

// GET /boards/{id}/checklists
export async function getBoardChecklists(id: string): Promise<any> {
    const url = `${apiUrl}/boards/${id}/checklists?${apiAuth}`; // GET
}

// GET /boards/{id}/cards
export async function getBoardCards(id: string): Promise<any> {
    const url = `${apiUrl}/boards/${id}/cards?${apiAuth}`; // GET
}

// GET /boards/{id}/cards/{filter}
export async function getBoardCardsByFilter(id: string, filter: string): Promise<any> {
    const url = `${apiUrl}/boards/${id}/cards/${filter}?${apiAuth}`; // GET
}

// GET /boards/{id}/customFields
export async function getBoardCustomFields(id: string): Promise<any> {
    const url = `${apiUrl}/boards/${id}/customFields?${apiAuth}`; // GET
}

// GET /boards/{id}/labels
export async function getBoardLabels(id: string): Promise<any> {
    const url = `${apiUrl}/boards/${id}/labels?${apiAuth}`; // GET
}

// POST /boards/{id}/labels
export async function createBoardLabel(id: string, params?: { name: string; color: string }): Promise<any> {
    const url = `${apiUrl}/boards/${id}/labels?${apiAuth}`; // POST
}

// GET /boards/{id}/lists
export async function getBoardLists(id: string): Promise<any> {
    const url = `${apiUrl}/boards/${id}/lists?${apiAuth}`; // GET
}

// POST /boards/{id}/lists
export async function createBoardList(id: string, params?: { name: string; pos: string }): Promise<any> {
    const url = `${apiUrl}/boards/${id}/lists?${apiAuth}`; // POST
}

// GET /boards/{id}/lists/{filter}
export async function getBoardListsByFilter(id: string, filter: string): Promise<any> {
    const url = `${apiUrl}/boards/${id}/lists/${filter}?${apiAuth}`; // GET
}

// GET /boards/{id}/members
export async function getBoardMembers(id: string): Promise<any> {
    const url = `${apiUrl}/boards/${id}/members?${apiAuth}`; // GET
}

// PUT /boards/{id}/members
export async function inviteMemberToBoardByEmail(
    id: string,
    params: { email: string, type?: string },
    body?: { fullName?: string }): Promise<any> {
    const url = `${apiUrl}/boards/${id}/members?${apiAuth}`; // PUT
}

// PUT /boards/{id}/members/{idMember}
export async function addMemberToBoard(id: string, idMember: string, param: { type: string, allowBillableGuest?: boolean }): Promise<any> {
    const url = `${apiUrl}/boards/${id}/members/${idMember}?${apiAuth}`; // PUT
}

// DEL /boards/{id}/members/{idMember}
export async function removeMemberFromBoard(id: string, idMember: string): Promise<void> {
    const url = `${apiUrl}/boards/${id}/members/${idMember}?${apiAuth}`; // DEL
}

// PUT /boards/{id}/memberships/{idMembership}
export async function updateBoardMembership(id: string, idMembership: string, params: { type: string, member_fields?: string }): Promise<any> {
    const url = `${apiUrl}/1/boards/${id}/memberships/${idMembership}?${apiAuth}`; // PUT
}

// PUT /boards/{id}/myPrefs/emailPosition
export async function updateBoardEmailPosition(id: string, params: { value: string }): Promise<any> {
    const url = `${apiUrl}/1/boards/${id}/myPrefs/emailPosition?${apiAuth}`; // PUT
}

// PUT /boards/{id}/myPrefs/idEmailList
export async function updateBoardEmailList(id: string, params: { value: string }): Promise<any> {
    const url = `${apiUrl}/1/boards/${id}/myPrefs/idEmailList?${apiAuth}`; // PUT
}

// PUT /boards/{id}/myPrefs/showListGuide
export async function updateBoardShowListGuide(id: string, params: { value: string }): Promise<any> {
    const url = `${apiUrl}/1/boards/${id}/prefs/showListGuide?${apiAuth}`; // PUT
}

// PUT /boards/{id}/myPrefs/showSidebar
// PUT /boards/{id}/prefs/showSidebar
export async function updateBoardShowSidebar(boardId: string, showSidebar: boolean): Promise<any> {
    const url = `${apiUrl}/boards/${boardId}/prefs/showSidebar?${apiAuth}`; // PUT
    const params = {
        value: showSidebar,
    };
    // ... (implement logic for sending PUT request with params)
}

// PUT /boards/{id}/myPrefs/showSidebarActivity
export async function updateBoardShowSidebarActivity(boardId: string, showSidebarActivity: boolean): Promise<any> {
    const url = `${apiUrl}/boards/${boardId}/myPrefs/showSidebarActivity?${apiAuth}`; // PUT
    const body = {
        value: showSidebarActivity,
    };
    // ... (implement logic for sending PUT request with JSON body)
}

// PUT /boards/{id}/myPrefs/showSidebarBoardActions
export async function updateBoardShowSidebarBoardActions(boardId: string, showSidebarBoardActions: boolean): Promise<any> {
    const url = `${apiUrl}/boards/${boardId}/myPrefs/showSidebarBoardActions?${apiAuth}`; // PUT
    const body = {
        value: showSidebarBoardActions,
    };
}

// PUT /boards/{id}/myPrefs/showSidebarMembers
export async function updateBoardShowSidebarMembers(boardId: string, showSidebarMembers: boolean): Promise<any> {
    const url = `${apiUrl}/boards/${boardId}/myPrefs/showSidebarMembers?${apiAuth}`; // PUT
    const body = {
        value: showSidebarMembers,
    };
}

// POST /boards/{id}/calendarKey/generate
export async function createBoardCalendarKey(id: string): Promise<any> {
    const url = `${apiUrl}/boards?${apiAuth}`; // POST
}

// POST /boards/{id}/emailKey/generate
export async function createBoardEmailKey(id: string): Promise<any> {
    const url = `${apiUrl}/boards?${apiAuth}`; // POST
}

// POST /boards/{id}/idTags
export async function createBoardTag(id: string, params: { value: string }): Promise<any> {
    const url = `${apiUrl}/boards/${id}/labels?${apiAuth}`; // POST
}


// POST /boards/{id}/markedAsViewed
export async function markBoardAsViewed(id: string): Promise<void> {
    const url = `${apiUrl}/boards/${id}/markedAsViewed?${apiAuth}`; // POST
}


// GET /boards/{id}/boardPlugins
export async function getBoardEnabledPowerUps(id: string): Promise<any> {
    const url = `${apiUrl}/boards/${id}/powerUps?${apiAuth}`; // GET
}

// POST /boards/{id}/boardPlugins
export async function enableBoardPowerUp(id: string, params?: { idPlugin: string }): Promise<any> {
    const url = `${apiUrl}/boards/${id}/powerUps?${apiAuth}`; // GET
}

// DEL /boards/{id}/boardPlugins/{idPlugin}
export async function disableBoardPowerUp(id: string, idPlugin: string): Promise<any> {
    const url = `${apiUrl}/boards/${id}/powerUps?${apiAuth}`; // GET
}

// GET /boards/{id}/plugins
export async function getBoardPowerUp(id: string, params?: { filter?: string }): Promise<any> {
    const url = `${apiUrl}/boards/${id}/powerUps?${apiAuth}`; // GET
}
