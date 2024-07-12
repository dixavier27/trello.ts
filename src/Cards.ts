import axios from 'axios';
import { apiAuth, apiUrl } from './Trello';
import { Card } from './Interfaces/Card'

// POST /cards
export async function createCard(
    queryParams?: {
        name?: string;
        desc?: string;
        pos?: string | number;
        due?: string;
        start?: string
        dueComplete?: boolean;
        idList: string;
        idMembers?: string[];
        idLabels?: string[];
        urlSource?: string;
        fileSource?: string;
        mimeType?: string;
        idCardSource?: string;
        keepFromSource?: string;
        address?: string;
        locationName?: string;
        coordinates?: string;
    }
): Promise<Card> {
    try {
        const url = `${apiUrl}/cards?${apiAuth}`; // POST
        const response = await axios.post(url, queryParams);
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// GET /cards/{id}
export async function getCard(
    pathParams: { id: string },
    queryParams?: {
        fields?: string,
        actions?: string,
        attachments?: string | boolean,
        attachment_fields?: string,
        members?: boolean,
        member_fields?: string,
        membersVoted?: boolean,
        memberVoted_fields?: string,
        checkItemStates?: boolean,
        checklists?: string,
        checklist_fields?: string,
        board?: boolean,
        board_fields?: string,
        list?: boolean,
        pluginData?: boolean,
        stickers?: boolean,
        sticker_fields?: string,
        customFieldItems?: boolean,
    }): Promise<Card> {
    try {
        const url = `${apiUrl}/cards/${pathParams.id}?${apiAuth}`; // POST
        const response = await axios.get(url, { params: queryParams });
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// PUT /cards/{id}
export async function updateCard(
    pathParams: { id: string },
    queryParams?: {
        name?: string,
        desc?: string,
        closed?: boolean,
        idMembers?: string,
        idAttachmentCover?: string,
        idList?: string,
        idLabels?: string,
        idBoard?: string,
        pos?: string | number,
        due?: string,
        start?: string,
        dueComplete?: boolean,
        subscribed?: boolean,
        address?: string,
        locationName?: string,
        coordinates?: string,
        cover?: object,
    }): Promise<Card> {
    try {
        const url = `${apiUrl}/cards/${pathParams.id}?${apiAuth}`; // PUT
        const response = await axios.put(url, queryParams);
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// DEL /cards/{id}
export async function deleteCard(id: string): Promise<Card> {
    try {
        const url = `${apiUrl}/cards/${id}?${apiAuth}`; // POST
        const response = await axios.delete(url);
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// GET /cards/{id}/{field}
export async function getCardField(id: string, field: string): Promise<Card> {
    try {
        const url = `${apiUrl}/cards/${id}/${field}?${apiAuth}`; // POST
        const response = await axios.get(url);
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// GET /cards/{id}/actions
// GET /cards/{id}/attachments
// POST /cards/{id}/attachments
// GET /cards/{id}/attachments/{idAttachment}
// DEL /cards/{id}/attachments/{idAttachment}
// GET /cards/{id}/board
// GET /cards/{id}/checkItemStates
// GET /cards/{id}/checklists
// POST /cards/{id}/checklists
// GET /cards/{id}/checkItem/{idCheckItem}
// PUT /cards/{id}/checkItem/{idCheckItem}
// DEL /cards/{id}/checkItem/{idCheckItem}
// GET /cards/{id}/list
// GET /cards/{id}/members
// GET /cards/{id}/membersVoted
// POST /cards/{id}/membersVoted
// GET /cards/{id}/pluginData
// GET /cards/{id}/stickers
// POST /cards/{id}/stickers
// GET /cards/{id}/stickers/{idSticker}
// PUT /cards/{id}/stickers/{idSticker}
// DEL /cards/{id}/stickers/{idSticker}
// PUT /cards/{id}/actions/{idAction}/comments
// DEL /cards/{id}/actions/{idAction}/comments
// PUT /cards/{idCard}/customField/{idCustomField}/item
// PUT /cards/{idCard}/customFields
// GET /cards/{id}/customFieldItems
// POST /cards/{id}/actions/comments
// POST /cards/{id}/idLabels
// POST /cards/{id}/idMembers
// POST /cards/{id}/labels
// POST /cards/{id}/markAssociatedNotificationsRead
// DEL /cards/{id}/idLabels/{idLabel}
// DEL /cards/{id}/idMembers/{idMember}
// DEL /cards/{id}/membersVoted/{idMember}
// PUT /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}
// DEL /cards/{id}/checklists/{idChecklist}