export interface Achievement {
    year: number;
    description: string;
}

export interface TimeLineItem {
    startYear: number;
    endYear: number;
    name: string;
    achievements: Achievement[];
}