export interface Evaluation {
    _id: number;
    title: string;
    introduction: string;
    questions: Array<Object>;
    ev_i1: boolean;
    ev_i2: boolean;
    ev_i3: boolean;
    deadline: Date;
    n_3day: boolean;
    n_1day: boolean;
    evaluted: Array<string>;
    evaluter: Array<string>;
    company: string;
    answers: Array<Object>;
}
