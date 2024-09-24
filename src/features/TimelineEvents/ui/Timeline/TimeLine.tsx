import styled from "styled-components";
import { TimeLineItem } from "./TimeLineItem";
import { useState } from "react";

const arr = ["Кино", "Музыка", "Наука", "Литература", "Техника", "Культура"];

export const TimeLine = () => {
  const [angle, setAngle] = useState<number>(360);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onClickDiagram = (angle: number, index: number) => {
    setAngle(angle);
    setActiveIndex(index);
  };
  const onClickPrevious = () => {
    let index=arr.length-1;
    if (activeIndex!==0) {
      index=activeIndex -1;
    } 
    onClickDiagram((arr.length - index) * 360/ arr.length,  index);
  }
  const onClickNext = () => {
    let index=0;
    if (activeIndex!==arr.length-1) {
      index=activeIndex+1;

    }    
    onClickDiagram((arr.length - index) * 360/ arr.length,  index);
  }

  return (
    <TimeLineMain>
      
      <Header>Исторические даты</Header>

      <div>
      <p>{activeIndex+1} из {arr.length}</p>
      <TimeLineButton onClick={onClickPrevious}>{"<"}</TimeLineButton>
      <TimeLineButton onClick={onClickNext}>{">"}</TimeLineButton>



      </div>
      
      <Container>
        {arr.map((item, i, arr) => {
          const currentAngle = (i * 360) / arr.length + 297 + angle;
          return (
            <Item key={i} $angle={currentAngle}>
              <TimeLineItem
                counter={i + 1}
                text={item}
                isActive={activeIndex === i}
                onClick={() => {
                  onClickDiagram(((arr.length - i) * 360) / arr.length, i);
                }}
              />
              <Point />
            </Item>
          );
        })}
        <Years $left={false}>2022</Years>
        <Years $left={true}>2016</Years>
        <DecorativeHorizontal />
      </Container>
      
    </TimeLineMain>
  );
};
const TimeLineMain = styled.div`
  width: 1080px;
  height: 620px;
  position: relative;
  display: grid;
  justify-items: start;
  align-content: space-between;
  padding-top: 170px;
`;

const Container = styled.div`
  border: 1px solid red;
  margin: 50px auto;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  transition: 1s;
    position: absolute;
    top: 60%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
`;

const Item = styled.div<{ $angle: number }>`
  --num-icons: 5;
  --angle: calc(360deg / var(--num-icons) * var(--i));
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  olor: ${(props) => props.$angle};
  transform: translate(-50%, -50%) rotate(${(props) => props.$angle}deg)
    translate(250px) rotate(-${(props) => props.$angle}deg);
  transition: 1s;
  transition-delay: 0.2s;
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
  height: 150px;
  width: 300px;
  font-size: 120px;
  font-weight: 700;
  position: absolute;
  top: 45%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  color: ${(props) => (props.$left ? "#5d5fef" : "#ef5da8")};
  left: ${(props) => (props.$left ? "5%" : "95%")};
  margin-right: ${(props) => (props.$left ? "-95%" : "-5%")};
  pointer-events: none;
  z-index: -100;
  
`;

const DecorativeHorizontal = styled.div`
z-index: -1000;
  margin: 0;
 height:2px;
 width: 1080px;
 background-color: rgba(0, 0, 0, 0.23);
 position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%) }
 `;
 const Header = styled.h1`
 display: block;
 height: 120px;
width: 300px;
 line-height: 60px;
 text-align: start;
 font-size: 56px;
   top: 50%;                        
   transform: translate(0, -50%);
color: #42567A;
 height: 120px;
 padding-left: 80px;
 border-left: 5px solid skyblue;
  border-image: linear-gradient(to top, #EF5DA8, #3877EE);
  border-image-slice: 1;
 `

 const HeadDiv = styled.div`
 position: relative;
height: 120px;
width: 300px;
 `

 const TimeLineButton = styled.button`
 border-radius: 50%;
 width: 40px;
 height: 40px;
 border: none;
 border: 1px solid black;
 margin: 10px;
 `