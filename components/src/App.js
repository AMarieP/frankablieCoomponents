import logo from './logo.svg';
import './App.css';
import ProfileImage from './component/about/ProfileImage';
import pfpplaceholder from './images/pfp_placeholder.jpg';
import pfpplaceholder2 from './images/pfpplaceholder2.jpg';


function App() {
  return (
    <>
    <ProfileImage image={pfpplaceholder2} />
    </>
  );
}

export default App;
