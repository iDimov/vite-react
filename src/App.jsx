import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import SearchBox from './components/SearchBox'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Book</h1>
      </header>
      
      <div className="content-wrapper">
        <div className="left-column">
          <ContactForm />
        </div>
        
        <div className="right-column">
          <SearchBox />
          
          <div className="contacts-section">
            <ContactList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
