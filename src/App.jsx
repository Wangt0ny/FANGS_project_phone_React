import { useState } from "react";
import AnchorList from "./components/AnchorList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ProductList from "./components/ProductList"

function App() {

  let [openOrderPage, setOrderPage] = useState(false); // 開/關 訂單紀錄

  return (
    <div className="page-wrapper" id="page-wrapper">
      <Header openOrderPage={openOrderPage}
        setOrderPage={setOrderPage} />
      <AnchorList />
      <ProductList openOrderPage={openOrderPage} s
        setOrderPage={setOrderPage} />
      <Footer />
    </div>
  )
}

export default App
