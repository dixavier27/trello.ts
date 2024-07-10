import { Card } from "./Card";

export interface Board {
    id: string;
    name: string;
    desc?: string;
    descData?: string | null;
    closed: boolean;
    idMemberCreator: string;
    idOrganization?: string;
    pinned: boolean;
    url: string;
    shortUrl: string;
    prefs: any;
    labelNames: { [color: string]: string };
    starred: boolean;
    limits: any;
    memberships: any[];
    enterpriseOwned: boolean;
    cards: Card[];
}
