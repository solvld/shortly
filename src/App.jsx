import Wrapper from './Components/Wrapper/Wrapper';
import Header from './Components/Header/Header';
import MainSection from './Components/MainSection/MainSection';
import InputField from './Components/InputField/InputField';
import LinksSection from './Components/LinksSection/LinksSection';

function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <MainSection />
      </Wrapper>
      <LinksSection />
    </>
  );
}

export default App;
