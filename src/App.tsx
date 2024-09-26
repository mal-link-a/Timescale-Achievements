
import styled from 'styled-components';
import './App.css';
import { TimeAchievements } from './features/TimeAchievements/ui/TimeAchievements';

function App() {
  return (
    <Main className="App">
      <TimeAchievements/>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;`

export default App;
