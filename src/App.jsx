
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import ClientsList from './components/Clients/ClientsList ';
import ClientDetails from './components/Clients/ClientDetails';
import EditClient from './components/Clients/EditClient';
import AddClient from './components/Clients/AddClient';
import ClassesList from './components/Classes/ClassesList';
import AddClasses from './components/Classes/AddClasses';
import ClassesDetails from './components/Classes/ClassesDetails';
import EditClasses from './components/Classes/EditClasses';
import SideNav from './SideNav';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
    <Navbar/>
<div style={{display:"flex"}}>
<SideNav/>
<div className="main">

    
      <Routes>
      
        <Route path="/" element={<ClientsList />} />
        <Route path="/class" element={<ClassesList/>} />
        <Route path='/classes/add' element={<AddClasses/>} />
        <Route path='/classes/:id' element={<ClassesDetails/>} />
        <Route path="/classes/:id/edit" element={<EditClasses />} />

        <Route path="/clients/:id" element={<ClientDetails />} />
        <Route path="/clients/:id/edit" element={<EditClient />} />
        <Route path="/clients/add" element={<AddClient />} />
      </Routes>
  
</div>
</div>
    </Router>
  );
}





export default App;