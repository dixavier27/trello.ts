import axios from "axios";
import { apiUrl, apiAuth } from "./Trello";
import { Board } from "./Interfaces/Board";
export const Members = {};

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