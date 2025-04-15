import { useState } from 'react';

function ShowHide() {
  const [show, setShow] = useState(true);
  const [theme, setTheme] = useState('light');

  return (
   <div style={{backgroundColor: theme ==='light'? '#fff' : '#000', color : theme === 'light' ? '#000' : '#fff' }} >
    <h1>Conditional rendering </h1>
    <button onClick={()=>setShow(!show)}> {show ? 'Hide' : 'Show'} </button>
    {show && <p>This is a toggle message</p>}

    <button onClick={()=>setTheme(theme==='light'?'dark': 'light')} >Change Theme</button>
   </div>
  );
}

export default ShowHide;
