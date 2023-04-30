import {Routes , Route} from 'react-router-dom';

// styles
import './styles/header.scss';
import './styles/display.scss';
import './styles/addBook.scss';
import './styles/register.scss';
import './styles/book.scss';


import Display from './components/display/Display';
import Header from './components/layout/Header';
import AddBook from './components/add/AddBook';
import SignUp from './components/authentication/SignUp';
import Login from './components/authentication/Login';


function App() {
  return (

    <>

      <Header/>

      <Routes>

        <Route path='/' element={<Display/>}/>
        <Route path='/add' element={<AddBook/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    
    
    </>
  );
}

export default App;