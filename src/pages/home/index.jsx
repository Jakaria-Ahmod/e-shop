import Banner from './components/Banner';
import BestSellerSection from './components/BestSeller';
import Companeys from './components/companey';
import Featured from './components/Featured';
import FaqSection from './components/FQA';
import NewProdact from './components/new_Products';
import Overview from './components/overview';
import SoupportSection from './components/souportSction';
import SpringMain from './components/Spring';
import TechTalkSection from './components/TechTalk';
import UptadesIndex from './components/uptades';

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
      <div className="container">
        <BestSellerSection></BestSellerSection>
      </div>
      <FaqSection></FaqSection>
      <div className="container">
        <TechTalkSection></TechTalkSection>
        <Companeys></Companeys>
        <UptadesIndex></UptadesIndex>
      </div>
    </div>
  );
};

export default HomePage;
