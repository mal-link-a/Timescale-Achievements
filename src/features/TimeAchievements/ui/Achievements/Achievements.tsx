import styled from "styled-components";
import { CustomSwiper } from "../../../../components/CustomSwiper/CustomSwiper";
import { Achievement } from "../../model/types";
import { AchievementItem } from "./AchievementItem/AchievementItem";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./animations.css";

interface Props {
  achievements: Achievement[];
}

export const Achievements = ({ achievements }: Props) => {  
  const firstRender = useRef<boolean>(true);
  const [animBool, setAnimBool] = useState<boolean>(false);
  const [currentData, setCurrentData] =
    useState<Achievement[]>(achievements);

  const isPhoneOrTablet = useMediaQuery({ query: '(max-width: 1024px)' })


  useEffect(() => {
    setAnimBool((prev) => !prev);
    const timer = setTimeout(() => {
      setCurrentData(achievements);
    }, 700);
    return () => {clearTimeout(timer);
      firstRender.current = false;
    };
  }, [achievements]);
  const data = currentData.map((item) => (
    <AchievementItem year={item.year} text={item.description} />
  ));
  const keys = currentData.map((item, i) => (
    `${item.description.slice(5)}+${i}`
  ));

  return (
    <Container $isActive={animBool} $isFirstRender={firstRender.current}>
      <CustomSwiper data={data} keys={keys} slidesPerView={isPhoneOrTablet? 1.3: 3} />
    </Container>
  );
};
const Container = styled.div<{ $isActive: boolean, $isFirstRender: boolean }>`
  width: 100%;
  height: 135px;
  animation-name: ${(props) =>
    props.$isActive ? "updateText" : !props.$isFirstRender ? "updateText2" : ""};
  animation-duration: 1.4s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  margin: 0 auto;
  @media (max-width: 1440px) { 
  height: 200px;
  };
`;
