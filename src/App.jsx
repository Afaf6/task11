
import './App.css';
import DetailsContainer from './Component/DetailsContainer/DetailsContainer';
import ImageContainer from './Component/ImageContainer/ImageContainer';
import TopNav from './Component/TopNav/TopNav';

function App() {

  return (
    <>
      <div id="topnav">
        <TopNav></TopNav>
      </div>
      <main>
      <ImageContainer></ImageContainer>

      <DetailsContainer></DetailsContainer>
      </main>
      
      
    </>
  );
}

export default App;
