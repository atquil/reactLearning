import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import TextArea from './component/TextArea';


function App() {
  return (
   <>
    <NavBar navBarTitle='atquil'/>
    <div className="container mx-2">
      <TextArea></TextArea>
    </div>    
   </>
  );
}

export default App;
