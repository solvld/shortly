import Wrapper from './Components/Wrapper/Wrapper';
import Header from './Components/Header/Header';
import MainSection from './Components/MainSection/MainSection';
import InputField from './Components/InputField/InputField';
import LinksSection from './Components/LinksSection/LinksSection';
import TestComp from './Components/TestComp';

function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <MainSection />
      </Wrapper>
      <LinksSection />
      <TestComp />  
    </>
  );
}

export default App;
