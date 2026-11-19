import './App.css'
import Products from './Products'
import Profile from './userProfile'

function App() {
  const MacBookProducts = ["MacBook Air", "MacBook Pro", "MacBook Neo", "MacBook Ultra", "MacBook Max", "MacBook Mini", "MacBook Nano", "MacBook Micro", "MacBook Mega", "MacBook Giga", "MacBook Tera", "MacBook Peta", "MacBook Exa", "MacBook Zetta", "MacBook Yotta"]
  const Profiles = [
    {
      img: "./photo1.jpg",
      name: "John Doe"
    },
    {
      img: "./photo2.jpg",
      name: "Jane Doe"
    },
    {
      img: "./photo3.jpg",
      name: "Jim Doe"
    }
  ]

  return (
    <div className="p-4">
      <div className="profile-container">
        {Profiles.map((profile)=> (
          <Profile img={profile.img} name={profile.name} />
        ))}
      </div>

      
    <div className="product-container">
      {MacBookProducts.map((product)=> (
        <Products product={product} />
      ))}
    </div>
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