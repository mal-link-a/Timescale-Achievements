import styled from "styled-components";

interface Props {
  year: number;
  text: string;
}

export const AchievementItem = ({ year, text }: Props) => {
  return (
    <Container>
      <Header>{year}</Header>
      <Text>{text}</Text>
    </Container>
  );
};
const Container = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: flex-start;
margin: 0 80px;
height: 150px;
  @media (max-width: 1024px) { 
      height: 180px;
      margin: 0 20px;
  }; 
`;

const Header = styled.h2`
  color: #3877ee;
  font-size: 25px;
  margin: 0;
  padding-bottom: 15px;
    @media (max-width: 480px) { 
      font-size: 16px; 
  };
`;
const Text = styled.p`
  margin: 0;
  font-size: 20px;
  color: #42567a;
  text-align: start;
  @media (max-width: 1024px) { 
      font-size: 18px; 
  };
  @media (max-width: 768px) { 
      font-size: 16px; 
  };
  @media (max-width: 480px) { 
      font-size: 14px; 
  };
`;
