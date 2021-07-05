export enum Status {
    INCOMPLETE,
    COMPLETED,
    PROGRESS
}
export interface ITodo {
    status: Status,
    task: string;
}