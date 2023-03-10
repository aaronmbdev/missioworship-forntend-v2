import Footer from "./components/common/footer"
import Header from "./components/common/header"
import Menu from "./components/common/menu"

function App() {
  return (
    <div className="App">
      <div id="layout-wrapper">
            
        <Header />
  
        <Menu />
  
        <div class="main-content">
  
            <div class="page-content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-flex align-items-center justify-content-between">
                                <h4 class="mb-0 font-size-18">Starter Page</h4>
  
          
                                
                            </div>
                        </div>
                    </div>     
                </div> 
            </div>
            
            <Footer />
            </div>
        </div>
    </div>
  );
}

export default App;
