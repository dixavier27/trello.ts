export interface List {
    id: string;
    name: string;
    closed: boolean;
    pos: number;
    softLimit: string;
    idBoard: string;
    subscribed: boolean;
    limits: {
        attachments: {
            perBoard: any
        };
    };
}