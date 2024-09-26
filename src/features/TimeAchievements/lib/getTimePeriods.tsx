import { TimeAchievement, TimeAchievementPeriod } from "../model/types";

    export const getTimePeriods =(data: TimeAchievement[]):TimeAchievementPeriod[] => 
        data.map((item) => {
        const { "achievements": string, ...periods } = item;
        return periods as TimeAchievementPeriod;
      });
