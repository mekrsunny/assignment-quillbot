import './App.css';
import AdvantageSection from './AdvantageSection';
import Details from './Details';
import HeaderSection from './HeaderSection';
import PremiumSection from './PremiumSection';

function App() {
  return (
    <div className='outerDiv'>
      <HeaderSection />
      <AdvantageSection />
      <PremiumSection />
      <Details />
    </div>
  );
}

export default App;
