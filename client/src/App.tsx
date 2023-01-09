import './App.css'
import Header from './components/Header/Header';
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

function App() {

  return (
      <>
        <Header />
        <RegisterPage />
        {/*<LoginPage />*/}
      </>
  )
}

export default App
