export interface Achievement {
    year: number;
    description: string;
}

export interface TimeAchievement{
    startYear: number;
    endYear: number;
    name: string;
    achievements: Achievement[];
}
export type TimeAchievementPeriod = Omit<TimeAchievement, "achievements">