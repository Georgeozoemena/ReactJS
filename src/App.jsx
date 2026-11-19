import './App.css'
import NavBar from './Navbar'
import Products from './Products'
import Profile from './userProfile'

function App() {
  const firstName = "Flora"
  const lastName = "Ozoemena"
  const fullName = `${firstName} ${lastName}`
  const MacBookProducts = ["MacBook Air", "MacBook Pro", "MacBook Neo"]

  return (
    <div className="p-4">
    <Profile img="./photo1.jpg" name={fullName} />
    <Products product={MacBookProducts} />
    </div>
  )
}

export default App


// Props destructuring
// Passing variables as props
// Passing arrays as props
// Mapping props to components
// Passing objects as props
// Passing Boolean props
// Default values in props
// Passing functions as props