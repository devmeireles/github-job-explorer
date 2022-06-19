export interface IJobLabel {
    id: number;
    name: string;
    color: string;
}

export interface IJob {
    id: number;
    title: string;
    labels: IJobLabel[],
    body: string;
    createdAt: string;
}

export interface IJobState {
    items: IJob[],
    loading: boolean
}
