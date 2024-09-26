import styled from "styled-components";
import "./animations.css";

interface Props {
  counter: number;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

export const CircleButton = ({ text, counter, isActive, onClick }: Props) => {
  return (
    <TimeLineButton $isActive={isActive} onClick={onClick}>
      <p>{counter}</p>
      <TimeLineDescriprion $isActive={isActive}>{text} </TimeLineDescriprion>
    </TimeLineButton>
  );
};

const TimeLineButton = styled.button<{$isActive: boolean}>`
  z-index: 200;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  background-color: ${props => props.$isActive ? "white": "rgba(0, 0, 0, 0)"};
  border: ${props => props.$isActive ? "2px solid #42567a": "none"};
  box-sizing: content-box;
  color: ${props => props.$isActive ? "#42567a": "rgba(0, 0, 0, 0)"};
  transition: 1s;
  &:hover {
    color: #42567a;
    opacity: 1;
    background-color: white;
    border: 2px solid #42567a;
  }
`;

const TimeLineDescriprion = styled.p<{$isActive: boolean}>` 
  font-weight: 700; 
  font-size: 20px;
  color: ${props => props.$isActive ? "#42567a": "rgba(0, 0, 0, 0)"};
  position: absolute;
  left: 50px;
  animation-name:  ${props => props.$isActive ? "showText": "hideText"};
  animation-duration: 1.4s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
`;
