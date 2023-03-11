import Footer from "../components/common/footer"
import Header from "../components/common/header"
import Menu from "../components/common/menu"

function Dashboard() {

    if(localStorage.getItem('auth_token') === null) {
        window.location.replace("/login");
    }

  return (
    <div className="App">
      <div id="layout-wrapper">
            
        <Header />
  
        <Menu />
  
        <div className="main-content">
  
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between">
                                <h4 className="mb-0 font-size-18">Starter Page</h4>
  
          
                                
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

export default Dashboard;
