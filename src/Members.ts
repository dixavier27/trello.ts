import axios from "axios";
import { apiUrl, apiAuth } from "./Trello";
import { Board } from "./Interfaces/Board";

// GET /members/{id}
// PUT /members/{id}
// GET /members/{id}/{field}
// GET /members/{id}/actions
// GET /members/{id}/boardBackgrounds
// POST /members/{id}/boardBackgrounds
// GET /members/{id}/boardBackgrounds/{idBackground}
// PUT /members/{id}/boardBackgrounds/{idBackground}
// DEL /members/{id}/boardBackgrounds/{idBackground}
// GET /members/{id}/boardStars
// POST /members/{id}/boardStars
// GET /members/{id}/boardStars/{idStar}
// PUT /members/{id}/boardStars/{idStar}
// DEL /members/{id}/boardStars/{idStar}

// GET /members/{id}/boards
export async function getMemberBoards(
    id: string,
    params?: {
        filter?: 'all' | 'closed' | 'members' | 'open' | 'organization' | 'public' | 'starred',
        fields?: string,
        lists?: string,
        organization?: boolean,
        organization_fields?: string
    }): Promise<Board[]> {
    try {
        const url = `${apiUrl}/members/${id}/boards?${apiAuth}`; // GET
        const response = await axios.get(url, { params });
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// GET /members/{id}/boardsInvited
// GET /members/{id}/cards
// GET /members/{id}/customBoardBackgrounds
// POST /members/{id}/customBoardBackgrounds
// GET /members/{id}/customBoardBackgrounds/{idBackground}
// PUT /members/{id}/customBoardBackgrounds/{idBackground}
// DEL /members/{id}/customBoardBackgrounds/{idBackground}
// GET /members/{id}/customEmoji
// POST /members/{id}/customEmoji
// GET /members/{id}/customEmoji/{idEmoji}
// GET /members/{id}/customStickers
// POST /members/{id}/customStickers
// GET /members/{id}/customStickers/{idSticker}
// DEL /members/{id}/customStickers/{idSticker}
// GET /members/{id}/notifications
// GET /members/{id}/organizations
// GET /members/{id}/organizationsInvited
// GET /members/{id}/savedSearches
// POST /members/{id}/savedSearches
// GET /members/{id}/savedSearches/{idSearch}
// PUT /members/{id}/savedSearches/{idSearch}
// DEL /members/{id}/savedSearches/{idSearch}
// GET /members/{id}/tokens
// POST /members/{id}/avatar
// POST /members/{id}/oneTimeMessagesDismissed
// GET /members/{id}/notificationsChannelSettings
// PUT /members/{id}/notificationsChannelSettings
// GET /members/{id}/notificationsChannelSettings/{channel}
// PUT /members/{id}/notificationsChannelSettings/{channel}
// PUT /members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}