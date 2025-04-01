import { useState } from 'react';
import AppHeader from './components/AppHeader'
import DebtTable from './components/DebtTable'

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="App">
      <AppHeader onSearch={setSearchQuery} />
      <main>
        <DebtTable searchQuery={searchQuery} />
      </main>
    </div>
  );
}

export default App;
