import './App.css'
import { useState } from 'react'
import { __allowUnsafeValue } from './tt-policy'

function App() {
  const [safe, toggleSafe] = useState(false)
  const [unsafe, toggleUnsafe] = useState(false)

  return (
    <div className="App">
      <h1>Trusted Types are enabled in this site</h1>
      <button onClick={() => toggleSafe(!safe)}>Toggle safe</button>
      {safe && <iframe title="safe" srcDoc={__allowUnsafeValue('<p>hi<p/>') as any}></iframe>}
      <button onClick={() => toggleUnsafe(!unsafe)}>Toggle unsafe</button>
      {unsafe && <iframe title="unsafe" srcDoc={'<p>hi<p/>'}></iframe>}
    </div>
  )
}

export default App
