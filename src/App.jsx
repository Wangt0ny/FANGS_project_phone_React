import AnchorList from "./components/AnchorList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ProductList from "./components/ProductList"

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <AnchorList />
      <ProductList />
      <Footer />
    </div>
  )
}

export default App
