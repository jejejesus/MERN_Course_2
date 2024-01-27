import { 
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import Layout from './layouts/Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <p>Home</p>
        </Layout>} />
        <Route path="/search" element={<Layout>
          <p>Search</p>
        </Layout>} />
        <Route path="*" element={<p>Default</p>} />
      </Routes>
    </Router>
  )
}

export default App
