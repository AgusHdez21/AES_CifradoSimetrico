import { useState } from 'react'
import CryptoJS from 'crypto-js';
import './App.css';

function App() {
  const [txtFrase, setFrase] = useState('')
  const [txtEncriptado, setEncriptado] = useState('')
  
  const [txtDescifrado, setDescifrado] = useState('')
  const [txtDesencriptado, setDesencriptado] = useState('')
  
  const handleEn = (text) => {
    setFrase(text.target.value);
  };
  const handleDes = (text) => {
    setDescifrado(text.target.value);
  };
  
  const fnEncriptar = () =>{
    const key = 'agus010402'
    const textoEncrypt = CryptoJS.AES.encrypt(txtFrase, key).toString();
    setEncriptado(textoEncrypt)
  }
  
  const fnDesencriptar = () => {
    const key = 'agus010402';
    const numDes = CryptoJS.AES.decrypt(txtDescifrado, key);
    const textoDesncrypt = numDes.toString(CryptoJS.enc.Utf8);
    setDesencriptado(textoDesncrypt);
  };
  
  return (
    <>
    <section>
      <div>
        <label>encriptar</label>
        <input 
          type="text"
          value={txtFrase}
          onChange={handleEn}
        />
        <button onClick={fnEncriptar}>Encriptar</button>
        <h1>Texto encriptado: {txtEncriptado} </h1>
      </div>
      <div  >
        <label>desencriptar</label>
        <input 
          type="text"
          value={txtDescifrado}
          onChange={handleDes}
          />
        <button onClick={fnDesencriptar}  >Desncriptar</button>
        <h1>Texto desencriptado: {txtDesencriptado} </h1>
      </div>
    </section>
    </>
  )
}
export default App
