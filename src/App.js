import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import UpdateProductComponent from './components/UpdateProductComponent';
import AddNewProductComponent from './components/AddNewProductComponent';
import ViewProductsComponent from './components/ViewProductsComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div>
    <Router>
      
    <HeaderComponent />
  <div className="container">
    <Switch> http://localhost:3001/ 
     <Route path="/"exact component={ViewProductsComponent}></Route>
     <Route path="/products" component={ViewProductsComponent}></Route>
     <Route path="/add-new" component={AddNewProductComponent}></Route>
     <Route path="/update-product/:id" component={UpdateProductComponent}></Route>
     

     
      </Switch>
  </div>
  
  
  </Router>
    </div>
  );
}

export default App;
