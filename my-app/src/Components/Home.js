import Slider from "./Slider";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './flavors'
import './home.css';
import './flavors.css';
import flawer from './card.json'; // Assuming the JSON file is in the same directory
export default function Home() {
 const {isAuthenticated , user} = useAuth0();
  return(
        <>
      <home/>
  <title>Ice Cream Delight - Home</title>
  <h1>🍦 Ice Cream Delight</h1>  
  <Slider/>
      
  <hr/>
    {  isAuthenticated? (
          <h2>Hello {user.name} Welcome to Ice Cream Delight!</h2>          
        ):(
       <h2>Welcome to Ice Cream Delight!</h2>
      )}  
      <hr/>
 {  isAuthenticated? (
          <img src= {user.picture}/>         
        ):(
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAYFBMVEX///8AAADl5eVGRkb8/PwEBARDQ0P39/dcXFzx8fHIyMhmZmbr6+vd3d2wsLBsbGyfn5+MjIwcHByCgoJ8fHxPT08XFxfT09Opqalzc3MwMDCTk5MhISEmJibBwcG6urrqeUXtAAADLElEQVR4nO2ai46qMBBAWxgobwVEUXb1//9yW1+7iLQ1Wqa5d06yGxMS9+wMnemLMYIgCIIgCIIgCIIgCIIgiDcBAAZ/PgKuzoSLXVoEQZECY77pnSmrTdKFYZdsqoD55Shd0lPH/9AdU78Us4Q/kGQeGUK9ffTjfFt741espnqKVYFtpgAmJum9p1n4kGWRz/lxngtsOxnBNefRrOEaOYLyz++a+QBy3uxw/WRD6zTxk486hlptgJW6+ClK1HECsDEJbnCnDUFsEgxxi2H2pIWM2WaogmuTn6w0mH7mV1C9hJiCmi5yI8cUnG/DvySY7c57Qe9TDK1ZsEUt1L1ZsMf0Y5l2LqNocAt1EZoEkVsdq3mkm25FfECe9QdcY6ieBMjTLbbXZ3iPHEA5Yz3o/A4lqt6ZSidYYdupGNbzfrUH62K5cL+8huOhEqkBsvdi4S6nDMPE78zgwbJdIYPUP2koTe/N9hYwCCb7R6vAG78LZR3eF1DbsPagvIyRwQqy9T4Jw2S/znyLnmK8Pvduk5/4T4DLy+fx+wf3X54iUoknDe7GNV6irNq8C2NJ2OVtVYrRY0Skgdj1+WQbbpv3O+GDIBNVfnicbl0+H/IKN90qOkX9NT9f5fyrLhhaGFX7Hb51eorvAa8xwzHWLTrPuZZP4yOS3/kMMTKti9VDhFNF2TAy4wb/L3G28PwGAHquO6MbB1L+9LCoIcytk+YNB7GcoPxL7Qt6V8V2wcEsLDZWp7TLVe3hlrdXIiizvIicfNct9n2f0y8xlsFwhK2j2S3xGqYWZyNzJKljOfX/WxzPzbNhbuuh/PLdO36cO04ygEzwS8N3TCST7DaC+v1UGxzvucILM4TnxG7H8eldP85PLv1sjl9NODyeBYujOTNN5mwgA2g29O2p3Y3j1Hh0aEPoqp2oIq1fItkQuSvWwLQ38WwFI2c3adRNt4/QuRIE4z0oGyLeuCk0wMq383tVdHVl7wNt5IKrZmJxk8wOV6PkI2Va4egKuM1VNztaJ34MDNcT7Nk7iSCINg4/QlyDk0IDRfAhCletzsevIgiCIAiCIAiCIAiCIAji3+UHpMYf4vVuQrkAAAAASUVORK5CYII="/>
      )}
 <hr/>
  
  <p>
    Discover a world of creamy, cold, and delicious treats. Handcrafted flavors made from natural ingredients just for you.
  </p>
  <p><Link to="./flavors" className="nav-link " aria-current="page">Explore Our Flavors</Link></p>
  <hr/>

  <h2>Popular Flavors</h2>
    <div className="card-wrapper">
      {flawer.flavorData.slice(1, 4).map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} className="card-img-top" alt={item.name} />
          <div className="card-body">
            <Link className="card-link" to={item.link}>
              {item.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  <hr/>

  <h2>Come Visit Us!</h2>
  <p>
    Visit our shop or place your order online. Serving smiles daily!
  </p>
  <p><a href="#">Order Now</a></p>
  <hr/>
  <p>&copy; 2025 Ice Cream Delight. All rights reserved.</p>

    </>)
}