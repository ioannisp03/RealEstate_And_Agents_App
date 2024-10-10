import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AgentsPage from './pages/AgentsPage';
import PropertiesPage from './pages/PropertiesPage';
import MyNavBar from './components/MyNavBar';
import PropertyAgentsList from "./components/PropertyAgentsList"
import AgentPropertiesList from "./components/AgentPropertiesList"



function App() {

  return (
    <div className='App'>
      <ToastContainer/>
      <Router>
        <MyNavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route path="/agents" element={<AgentsPage />} />

          <Route path="/properties" element={<PropertiesPage />} />

          <Route exact path="/propertyagents" element={<PropertyAgentsList />} />

          <Route exact path="/agentproperties" element={<AgentPropertiesList />} />
        </Routes>


      </Router>




    </div>
  )
}

export default App;
