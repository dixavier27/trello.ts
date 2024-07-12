export interface Action {
    id: string;
    date: string;
    data: {
        card: any;
        old: any;
        board: any;
        list: any;
    };
    type: string;
    memberCreator: {
        id: string;
        activityBlocked: boolean;
        avatarHash: string;
        avatarUrl: string;
        fullName: string;
        idMemberReferrer: null;
        initials: string;
        nonPublic: {};
        nonPublicAvailable: boolean;
        username: string;
    };
}
