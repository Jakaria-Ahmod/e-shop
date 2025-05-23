import Banner from './components/Banner';
import Featured from './components/Featured';
import PrevButton from './components/Featured/PrevButton';
import NewProdact from './components/new_Products';
import Overview from './components/overview';
import SoupportSection from './components/souportSction';

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <Banner></Banner>
        <SoupportSection></SoupportSection>
        <Featured></Featured>
        <Overview></Overview>
        <NewProdact></NewProdact>
      </div>
    </div>
  );
};

export default HomePage;
