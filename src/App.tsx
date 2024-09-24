
import styled from 'styled-components';
import './App.css';
import { TimeLineEvents } from './features/TimelineEvents/ui/TimeLineEvents';

function App() {
  return (
    <Main className="App">
      <TimeLineEvents/>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;`

export default App;
