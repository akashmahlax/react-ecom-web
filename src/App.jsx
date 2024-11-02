import './App.css'
import Navbar from './components/nav'
import Hero from './components/hero'
import CallToAction from './components/CTA'
import Footer from './components/footer'
import Checkout from './components/checkout'
import QuantityProductCard from './components/QuantityProductcard'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <QuantityProductCard  name = "Optimum Nutrition (ON)" price ='2139' image="https://mensfitnesstoday.com/wp-content/uploads/sites/2/2023/05/Optimum-Nutrition-Gold.jpg"  />
      <CallToAction/>
      <QuantityProductCard  name = "Optimum Nutrition (ON)" price ='2139' image="https://mensfitnesstoday.com/wp-content/uploads/sites/2/2023/05/Optimum-Nutrition-Gold.jpg"  />
      <CallToAction/>
      <QuantityProductCard  name = "Optimum Nutrition (ON)" price ='2139' image="https://mensfitnesstoday.com/wp-content/uploads/sites/2/2023/05/Optimum-Nutrition-Gold.jpg"  />
      <CallToAction/>
      <QuantityProductCard  name = "Optimum Nutrition (ON)" price ='2139' image="https://mensfitnesstoday.com/wp-content/uploads/sites/2/2023/05/Optimum-Nutrition-Gold.jpg"  />
      <CallToAction/>
      <Checkout/>
      <Footer/>
    </>
  )
}
export default App
