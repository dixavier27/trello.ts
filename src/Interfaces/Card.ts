export interface Card {
    id: string;
    address: string;
    badges: {
        attachmentsByType: {
            trello: {
                board: number;
                card: number;
            };
        };
        location: boolean;
        votes: number;
        viewingMemberVoted: boolean;
        subscribed: boolean;
        fogbugz: string;
        checkItems: number;
        checkItemsChecked: number;
        comments: number;
        attachments: number;
        description: boolean;
        due: string;
        start: string;
        dueComplete: boolean;
    };
    checkItemStates: string[];
    closed: boolean;
    coordinates: string;
    creationMethod: string;
    dateLastActivity: string;
    desc: string;
    descData: {
        emoji: {};
    };
    due: string;
    dueReminder: string;
    idBoard: string;
    idChecklists: {
        id: string;
    }[];
    idLabels: {
        id: string;
        idBoard: string;
        name: string;
        color: string;
    }[];
    idList: string;
    idMembers: string[];
    idMembersVoted: string[];
    idShort: number;
    labels: string[];
    limits: {
        attachments: {
            perBoard: {
                status: string;
                disableAt: number;
                warnAt: number;
            };
        };
    };
    locationName: string;
    manualCoverAttachment: boolean;
    name: string;
    pos: number;
    shortLink: string;
    shortUrl: string;
    subscribed: boolean;
    url: string;
    cover: {
        color: string;
        idUploadedBackground: boolean;
        size: string;
        brightness: string;
        isTemplate: boolean;
    };
}
