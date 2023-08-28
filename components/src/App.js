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
import ProductCarousel from './component/landing/ProductCarousel';
import Footer from './component/misc/Footer';
import ProductCard from './component/prodpage/ProductCard';
import ImageTextTile from './component/landing/ImageTextTile';

const productTest = {
  name: 'test',
  imageUrl: testProdImage,
  id: 1
}
const productTest2 = {
  name: 'test',
  imageUrl: testProdImage,
  id: 2
}
const productTest3 = {
  name: 'testing',
  imageUrl: testProdImage,
  id: 3
}
const productTest4 = {
  name: 'test',
  imageUrl: testProdImage,
  id: 4
}
const productTest5 = {
  name: 'test',
  imageUrl: testProdImage,
  id: 5
}

const listProdTest = [productTest, productTest2, productTest3, productTest4, productTest5]

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
    {/* <ImageCard product={productTest} /> */}
    <ProductCarousel products={listProdTest} />
    <ProductCard product={productTest}/>
    <ImageTextTile image={pfpplaceholder} />
    <Footer />

    </>
  );
}

export default App;
