import axios from 'axios';
import { apiAuth, apiUrl } from '..';

// GET /lists/{id}
export async function getList(
    pathParams: { id: string },
    queryParams?: { fields?: string }
): Promise<any> {
    try {
        const url = `${apiUrl}/lists/${pathParams.id}?${apiAuth}`; // POST
        const response = await axios.get(url, { params: queryParams });
        return response.data
    } catch (error: any) {
        const err = `❌ Error (${error.response.status}): ${error.response.statusText} - ${error.response.data}`
        console.error(err);
        throw new Error(err);
    }
}

// PUT /lists/{id}
// POST /lists
// POST /lists/{id}/archiveAllCards
// POST /lists/{id}/moveAllCards
// PUT /lists/{id}/closed
// PUT /lists/{id}/idBoard
// PUT /lists/{id}/{field}
// GET /lists/{id}/actions
// GET /lists/{id}/board
// GET /lists/{id}/cards