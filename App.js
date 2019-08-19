import React from 'react';
import { BrowserRouter,Link,Route} from "react-router-dom";
import Khalil from './khalil';
import Amal from './amal';
import './App.css';
import NavbarPage from './navbar';
import Carousel from './carousel';
import Spinner from './spinner';
import Card from './card';
import image1 from './im.jpg';
import image2 from './image2.jpg';
import image3 from './img.jpg';



class App extends React.Component {

  render(){
    const tab=[
{src:image1, title:"tofeha",subtitle:"tofeha1",infos:"aasal"},
{src:image2, title:"khoukha",subtitle:"khoukha1",infos:"bnina"},
{src:image3, title:"mouza",subtitle:"mouza1",infos:"safra"}
];

 return (
   <BrowserRouter>
    <div className="App">
      <NavbarPage/>
    <Spinner/>
    
    
   <Route path="/" exact component={Amal}/>   
   <Route path="/Khalil" exact component={Khalil}/>
   <Route path="/Carousel" exact component={Carousel}/>              
   <Link to="Khalil" >khalil</Link>
    {tab.map(e=>
     <Card 
    src={e.src}
    title= {e.title} 
    subtitle= {e.subtitle}
    infos={e.infos}/> 
    )}
 
</div>
</BrowserRouter>
  );

  
 
 }
}

export default App;
