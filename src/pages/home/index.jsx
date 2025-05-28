import Banner from './components/Banner';
import Featured from './components/Featured';
import NewProdact from './components/new_Products';
import Overview from './components/overview';
import SoupportSection from './components/souportSction';
import SpringMain from './components/Spring';

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
      <SpringMain></SpringMain>
    </div>
  );
};

export default HomePage;
