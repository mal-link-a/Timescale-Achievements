import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { TimeAchievementPeriod } from "../../model/types";
import { wait } from "../../../../lib/wait";

import { ReactComponent as LeftArrow } from "../../../../shared/leftArrow.svg";
import { CircleButton } from "./CircleButton/CircleButton";
import { useMediaQuery } from "react-responsive";

interface Props {
  timeLines: TimeAchievementPeriod[];
  activeIndex: number;
  setActiveIndex: (arg1: number) => void;
}

export const TimePeriod = ({
  timeLines,
  activeIndex,
  setActiveIndex,
}: Props) => {
  const lastIndex = useRef<number>(activeIndex);
  const arrLength = useRef<number>(timeLines.length);
  const [angle, setAngle] = useState<number>(360);
  const [startYear, setStartYear] = useState<number>(timeLines[0].startYear);
  const [endYear, setEndYear] = useState<number>(timeLines[0].endYear);

  const changeEndYear = async (index: number) => {
    const endDelay = timeLines[activeIndex].endYear - timeLines[index].endYear;
    if (endDelay > 0) {
      for (let i = 0; i < endDelay; i++) {
        setEndYear((prev) => prev + 1);
        await wait(800 / endDelay);
      }
    } else {
      for (let i = 0; i > endDelay; i--) {
        setEndYear((prev) => prev - 1);
        await wait(800 / -endDelay);
      }
    }
  };

  const changeStartYear = async (index: number) => {
    const startDelay =
      timeLines[activeIndex].startYear - timeLines[index].startYear;
    if (startDelay > 0) {
      for (let i = 0; i < startDelay; i++) {
        setStartYear((prev) => prev + 1);
        await wait(800 / startDelay);
      }
    } else {
      for (let i = 0; i > startDelay; i--) {
        setStartYear((prev) => prev - 1);
        await wait(800 / -startDelay);
      }
    }
  };

  useEffect(() => {
    setAngle(((arrLength.current - activeIndex) * 360) / arrLength.current);
    changeEndYear(lastIndex.current);
    changeStartYear(lastIndex.current);
    lastIndex.current = activeIndex;
  }, [activeIndex]);
  const onClickPrevious = () => {
    let index = arrLength.current - 1;
    if (activeIndex !== 0) {
      index = activeIndex - 1;
    }
    setActiveIndex(index);
  };
  const onClickNext = () => {
    let index = 0;
    if (activeIndex !== arrLength.current - 1) {
      index = activeIndex + 1;
    }
    setActiveIndex(index);
  };

  return (
    <MainContainer>
      <Header>Исторические даты</Header>
      <YearsMobileContainer>
        <YearsMobile $left={true}>{startYear}</YearsMobile>
        <YearsMobile $left={false}>{endYear}</YearsMobile>
      </YearsMobileContainer>
      <TimePeriodButtons>
        <p>
          {activeIndex + 1}/{arrLength.current}
        </p>
        <div>
          <TimePeriodButton onClick={onClickPrevious}>
            <LeftArrow />
          </TimePeriodButton>
          <TimePeriodButton onClick={onClickNext}>
            <RightArrow />
          </TimePeriodButton>
        </div>
      </TimePeriodButtons>

      <CircleContainer>
        {timeLines.map((item, i) => {
          const currentAngle = (i * 360) / arrLength.current + 297 + angle;
          return (
            <CircleButtonContainer key={i} $angle={currentAngle}>
              <CircleButton
                counter={i + 1}
                text={item.name}
                isActive={activeIndex === i}
                onClick={() => {
                  setActiveIndex(i);
                }}
              />
              <Point />
            </CircleButtonContainer>
          );
        })}
        <Years $left={false}>{endYear}</Years>
        <Years $left={true}>{startYear}</Years>
        <DecorativeHorizontal />
      </CircleContainer>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  height: 615px;
  position: relative;
  display: grid;
  justify-items: start;
  align-content: space-between;
  color: #42567a;
  margin-bottom: 56px;
  @media (max-width: 1440px) {
    height: 40vw;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    height: 273px;
    padding: 0 27px 0 20px;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    position: static;
    margin-bottom: 20px;
  }
`;

const CircleContainer = styled.div`
  border: 1px solid #d0d5e0;
  margin: 50px auto;
  width: 530px;
  height: 530px;
  border-radius: 50%;
  transition: 1s;
  position: absolute;
  top: 47%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -53%);
  @media (max-width: 1440px) {
    width: 32vw;
    height: 32vw;
  }
  @media (max-width: 768px) {
    top: 40%;
    transform: translate(-50%, -60%);
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const CircleButtonContainer = styled.div<{ $angle: number }>`
  --num-icons: 5;
  --angle: calc(360deg / var(--num-icons) * var(--i));
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  transition: 1s;
  transition-delay: 0.2s;
  @media (max-width: 1440px) {
    transform: translate(-50%, -50%) rotate(${(props) => props.$angle}deg)
      translate(16vw) rotate(-${(props) => props.$angle}deg);
  }
  @media (min-width: 1440px) {
    transform: translate(-50%, -50%) rotate(${(props) => props.$angle}deg)
      translate(265px) rotate(-${(props) => props.$angle}deg);
  }
`;

const Point = styled.div`
  z-index: 100;
  border-radius: 50%;
  opacity: 1;
  background-color: #42567a;
  width: 8px;
  height: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

const Years = styled.div<{ $left: boolean }>`
  font-size: min(120px, 120px);
  font-weight: 700;
  position: absolute;
  top: 48%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  color: ${(props) => (props.$left ? "#5d5fef" : "#ef5da8")};
  left: ${(props) => (props.$left ? "0%" : "100%")};
  margin-right: ${(props) => (props.$left ? "-100%" : "0%")};
  pointer-events: none;
  z-index: -100;
  @media (max-width: 1200px) {
    font-size: 6em;
  }
  @media (max-width: 768px) {
    font-size: 4em;
  }
`;

const YearsMobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 1px 0px 0px rgba(199, 205, 217, 1);

  @media (min-width: 480px) {
    display: none;
  }
`;

const YearsMobile = styled(Years)`
  font-size: 56px;
  position: static;
  z-index: 10000;
  transform: translate(0, 0);
  margin-right: 0;
  padding-bottom: 57px;
  margin-top: 57px;
  height: 73px;
`;
const DecorativeHorizontal = styled.div`
  z-index: -1000;
  margin: 0;
  height: 1px;
  width: 1440px;
  background-color: rgba(0, 0, 0, 0.23);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1440px) {
    width: 90vw;
  }
`;
const Header = styled.h1`
  display: block;
  width: 300px;
  line-height: 60px;
  text-align: start;
  font-size: 56px;
  top: 50%;
  transform: translate(0, -50%);
  color: #42567a;
  height: 120px;
  padding-left: 80px;
  border-left: 5px solid skyblue;
  border-image: linear-gradient(to top, #ef5da8, #3877ee);
  border-image-slice: 1;
  @media (max-width: 1440px) {
    font-size: max(calc(5vw - 10px), 20px);
    width: 100px;
    height: auto;
    line-height: calc(2vw + 20px);
  }
  @media (max-width: 1024px) {
    padding-left: 20px;
  }

  @media (max-width: 480px) {
    transform: translate(0, 0);
    font-size: 20px;
    width: 100px;
    height: 48px;
    margin: 0;
    line-height: 24px;
    padding-left: 0px;
    border: none;
  }
`;

const TimePeriodButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 80px;
  & p {
    font-size: 18px;
  }
  @media (max-width: 1440px) {
    & p {
      margin: 0 0 5px 0;
    }
  }
  @media (max-width: 1024px) {
    padding-left: 20px;
  }
  @media (max-width: 480px) {
    position: absolute;
    left: 0px;
    top: 470px;
    & p {
      margin: 0;
      padding-bottom: 10px;
      font-size: 14px;
    }
  }
`;

const TimePeriodButton = styled.button`
  border-radius: 50%;
  max-width: 50px;
  max-height: 50px;
  min-width: 30px;
  min-height: 30px;
  width: 5vw;
  height: 5vw;
  border: none;
  border: 1px solid rgba(66, 86, 122, 0.5);
  background-color: white;
  margin-right: 20px;
  &:hover {
    background-color: rgba(185, 183, 231, 0.8);
  }
  @media (max-width: 768px) {
    & svg {
      width: 6px;
      height: 10px;
    }
  }
  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
    margin-right: 8px;
    z-index: 100;
    position: relative;
  }
`;

const RightArrow = styled(LeftArrow)`
  transform: rotate(180deg);
`;
