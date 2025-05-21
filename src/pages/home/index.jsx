import Banner from './components/Banner';
import Featured from './components/Featured';
import SoupportSection from './components/souportSction';

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <Banner></Banner>
        <SoupportSection></SoupportSection>
        <Featured></Featured>
      </div>
    </div>
  );
};

export default HomePage;
