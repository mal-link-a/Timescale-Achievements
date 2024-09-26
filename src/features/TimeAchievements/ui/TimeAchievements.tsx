import { TimePeriod } from "./TimePeriod/TimePeriod";
import { data } from "../model/data";
import {
  Achievement,
  TimeAchievementPeriod,
} from "../model/types";
import { Achievements } from "./Achievements/Achievements";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getTimePeriods } from "../lib/getTimePeriods";

export const TimeAchievements = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); //Индекс активного объекта отображения
  const [timePeriods, setTimePeriods] = useState<TimeAchievementPeriod[]>(
    getTimePeriods(data)
  ); //Данные для компонента TimePeriod
  const [achievements, setAchievements] = useState<Achievement[]>(
    data[activeIndex].achievements
  ); //Данные для компонента Achievements

  useEffect(() => {
    setAchievements(data[activeIndex].achievements);
  }, [activeIndex]);

  return (
    <Section>
      <TimePeriod
        timeLines={timePeriods}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <Achievements achievements={achievements} />
      <DecorativeVertical />
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.23);
  width: 1440px;
  height: 1080px;
  padding-top: 70px;

  @media (max-width: 1440px) {
    width: 90vw;
    height: auto;
  }

  @media (max-width: 1024px) {
    padding-top: 30px;
  }

  @media (max-width: 480px) {
    margin: 59px 0px 13px 0px;
    height: 568px;
    width: 100vw;
  }
`;
const DecorativeVertical = styled.div`
  z-index: 1000;
  margin: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.23);
  position: absolute;
  top: 0%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 0%);
  @media (max-width: 480px) {
    display: none;
  }
  @media (max-width: 1440px) {
  }
`;
