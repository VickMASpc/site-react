import { useState } from 'react'
import './App.css'

function Header() {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li className='box'>Home</li>
          <li className='box'>Itens</li>
          <li className='box'>Sobre</li>
        </ul>
      </nav>
    </header>
  )
}

function Card({ nome, preco }: { nome: string; preco: string }) {
  return (
    <div className="box" style={{ border: '1px solid #ccc', margin: '10px', padding: '15px' }}>
      <h3>{nome}</h3>
      <p>Preço: {preco}</p>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2026 Loja Victor</p>
    </footer>
  )
}

function App() {
  const [dark, setDark] = useState(false)

  const estiloPagina = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333',
    minHeight: '100vh',
    transition: '0.3s'
  }

  return (
    <div className={dark ? 'dark-mode' : ''} style={estiloPagina}>
      <Header />
      
      <div className="container">
        <h1>Loja</h1>
        <button onClick={() => setDark(!dark)}>
          Alternar para modo {dark ? 'Claro' : 'Escuro'}
        </button>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
          <Card nome="Item" preco="R$ 59,90" />
          <Card nome="Item" preco="R$ 120,00" />
          <Card nome="Item" preco="R$ 250,00" />
          <Card nome="Item" preco="R$ 45,00" />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
