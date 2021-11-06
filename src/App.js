import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Achievements from './components/pages/AchievementPage/Achievements';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      
      <Switch>
        <Route path='/Achievements' exact component={Achievements} />
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
