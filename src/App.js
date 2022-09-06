import Address from './Component/profile/Address'
import Fullname from './Component/profile/Fullname'
import Profilephoto from './Component/profile/Profilephoto'
import './App.css';

function App() {
  return (
    <div className='app' >
      <Profilephoto/>
      <Fullname/>

   <Address/>

   </div>
    
  );
}

export default App;
