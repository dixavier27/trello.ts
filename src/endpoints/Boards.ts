import axios from 'axios';
import { apiUrl, apiAuth } from '..';
import { Board } from '../interfaces/Board';
import { List } from '../interfaces/List';
import { Action } from '../interfaces/Action';
import { Card } from '../interfaces/Card';

// GET /boards/{id}/memberships
export async function getBoardMemberships(
    pathParams: { id: string },
    queryParams?: {
        filter?: 'admins' | 'all' | 'none' | 'normal',
        activity?: boolean;
        orgMemberType?: boolean;
        member?: boolean;
        member_fields?: string;
    }
): Promise<any> {
    try {
        const url = `${apiUrl}/boards/${pathParams.id}/memberships?${apiAuth}`; // GET
        const response = await axios.get(url, { params: queryParams });
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// GET /boards/{id}
export async function getBoard(
    pathParams: { id: string },
    queryParams?: {
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
): Promise<Board> {
    try {
        const url = `${apiUrl}/boards/${pathParams.id}?${apiAuth}`; // GET
        const response = await axios.get(url, { params: queryParams });
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// PUT /boards/{id}
export async function updateBoard(
    pathParams: { id: string },
    queryParams?: {
        name?: string;
        desc?: string;
        closed?: boolean;
        subscribed?: any; // string
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
): Promise<Board> {
    try {
        const url = `${apiUrl}/boards/${pathParams.id}?${apiAuth}`; // PUT
        const response = await axios.put(url, queryParams);
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// DEL /boards/{id}
export async function deleteBoard(
    pathParams: { id: string },
): Promise<any> {
    try {
        const url = `${apiUrl}/boards/${pathParams.id}?${apiAuth}`; // PUT
        const response = await axios.delete(url);
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// GET /boards/{id}/{field}
export async function getBoardField(
    pathParams: { id: string, field: string }
): Promise<Board> {
    try {
        const url = `${apiUrl}/boards/${pathParams.id}/${pathParams.field}?${apiAuth}`; // GET
        const response = await axios.get(url);
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// GET /boards/{boardId}/actions
export async function getBoardActions(
    pathParams: { boardId: string },
    queryParams?: {
        fields?: string,
        filter?: string,
        format?: string,
        idModels?: string,
        limit?: number,
        member?: boolean,
        member_fields?: string,
        memberCreator?: boolean,
        memberCreator_fields?: string,
        page?: number,
        reactions?: boolean,
        before?: string,
        since?: string
    }
): Promise<Action[]> {
    try {
        const url = `${apiUrl}/boards/${pathParams.boardId}/actions?${apiAuth}`; // GET
        const response = await axios.get(url, { params: queryParams });
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// GET /boards/{id}/cards/{idCard}
export async function getBoardCard(
    pathParams: { id: string, idCard: string },
    queryParams?: {
        fields?: string,
        filter?: string,
        format?: string,
        idModels?: string,
        limit?: number,
        member?: boolean,
        member_fields?: string,
        memberCreator?: boolean,
        memberCreator_fields?: string,
        page?: number,
        reactions?: boolean,
        before?: string,
        since?: string
    }
): Promise<Card> {
    try {
        const url = `${apiUrl}/boards/${pathParams.id}/cards/${pathParams.idCard}?${apiAuth}`; // GET
        const response = await axios.get(url, { params: queryParams });
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// GET /boards/{boardId}/boardStars
export async function getBoardStars(
    pathParams: { boardId: string },
    queryParams?: { filter?: string }
): Promise<any> {
    try {
        const url = `${apiUrl}/boards/${pathParams.boardId}/boardStars?${apiAuth}`; // GET
        const response = await axios.get(url, { params: queryParams });
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// GET /boards/{id}/checklists
export async function getBoardChecklists(
    pathParams: { id: string }
): Promise<any> {
    try {
        const url = `${apiUrl}/boards/${pathParams.id}/checklists?${apiAuth}`; // GET
        const response = await axios.get(url);
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// GET /boards/{id}/cards
export async function getBoardCards(
    pathParams: { id: string }
): Promise<Card[]> {
    try {
        const url = `${apiUrl}/boards/${pathParams.id}/cards?${apiAuth}`; // GET
        const response = await axios.get(url);
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// GET /boards/{id}/cards/{filter}
export async function getBoardCardsByFilter(
    pathParams: { id: string, filter: string }
): Promise<Card[]> {
    try {
        const url = `${apiUrl}/boards/${pathParams.id}/cards/${pathParams.filter}?${apiAuth}`; // GET
        const response = await axios.get(url);
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// GET /boards/{id}/customFields
// GET /boards/{id}/labels
// POST /boards/{id}/labels

// GET /boards/{id}/lists
export async function getBoardLists(
    pathParams: { id: string },
    queryParams?: {
        cards?: 'all' | 'closed' | 'none' | 'open',
        card_fields?: string,
        filter?: 'all' | 'closed' | 'none' | 'open',
        fields?: string
    }
): Promise<List[]> {
    try {
        const url = `${apiUrl}/boards/${pathParams.id}/lists?${apiAuth}`; // GET
        const response = await axios.get(url, { params: queryParams });
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// POST /boards/{id}/lists
export async function createBoardList(
    pathParams: { id: string },
    queryParams?: {
        name: string,
        pos?: string
    }
): Promise<List> {
    try {
        const url = `${apiUrl}/boards/${pathParams.id}/lists?${apiAuth}`; // GET
        const response = await axios.post(url, queryParams);
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

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
export async function createBoard(
    queryParams: {
        name: string,
        defaultLabels?: boolean,
        defaultLists?: boolean,
        desc?: string,
        idOrganization?: string,
        idBoardSource?: string,
        keepFromSource?: string,
        powerUps?: string,
        prefs_permissionLevel?: string,
        prefs_voting?: string,
        prefs_comments?: string,
        prefs_invitations?: string,
        prefs_selfJoin?: boolean,
        prefs_cardCovers?: boolean,
        prefs_background?: string,
        prefs_cardAging?: string
    }): Promise<Board> {
    try {
        const url = `${apiUrl}/boards/?${apiAuth}`; // POST
        const response = await axios.post(url, queryParams);
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// POST /boards/{id}/calendarKey/generate
// POST /boards/{id}/emailKey/generate
// POST /boards/{id}/idTags
// POST /boards/{id}/markedAsViewed
// GET /boards/{id}/boardPlugins
// POST /boards/{id}/boardPlugins
// DEL /boards/{id}/boardPlugins/{idPlugin}
// GET /boards/{id}/plugins