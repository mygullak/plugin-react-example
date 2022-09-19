import { useEffect, useState } from 'react';
import './App.css'




function App() {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://plugin.myhubble.money/hubble-1.0.1.js'; 
      script.onerror = () => {
        
      };
      script.onload = async () => {
        window.hubble.init({clientID: 'croma'});
        setLoading(false);
      };
      document.body.appendChild(script);
  })

  // Here on click of button we are calling the openHubble function
  // You can call this function from anywhere in your app
  // For example you can call this function from a button click
  return (
    isLoading ? 'Loading..':
      <button onClick={() => window.hubble.open()}>start</button>
  );
}

export default App;
