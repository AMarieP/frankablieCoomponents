import logo from './logo.svg';
import './App.css';
import ProfileImage from './component/about/ProfileImage';
import pfpplaceholder from './images/pfp_placeholder.jpg';
import pfpplaceholder2 from './images/pfpplaceholder2.jpg';
import testProdImage from './images/productimage_test.jpeg'
import OutlineButton from './component/buttons/OutlineButton';
import BackgroundButton from './component/buttons/BackgroundButton';
import Banner from './component/landing/Banner';
import ImageCard from './component/landing/ImageCard';


const productTest = {
  name: 'test',
  imageUrl: testProdImage
}

function App() {
  return (
    <>
    <ProfileImage image={pfpplaceholder2} />
    <h1>Hello</h1>
    <h2>Hello</h2>
    <h3>Hello</h3>
    <OutlineButton onClick={() => alert("You Clicked")} >outlinn</OutlineButton>
    <BackgroundButton onClick={() => alert("You Clicked")} >Bkgnrd</BackgroundButton>
    <Banner>This is the text in the banner</Banner>
    <ImageCard product={productTest} />

    </>
  );
}

export default App;
