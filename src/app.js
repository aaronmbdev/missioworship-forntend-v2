import Footer from "./components/common/footer"
import Header from "./components/common/header"
import Menu from "./components/common/menu"
import AdminSection from "./sections/adminSection";
import DashboardSection from "./sections/dashboardSection";

function App(props) {

    if(localStorage.getItem('auth_token') === null) {
        window.location.replace("/login");
    }

    let name = localStorage.getItem("name");
    let section = (<DashboardSection />);

    if(props.section == "admin") {
        section = (<AdminSection />);
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
                                <h4 className="mb-0 font-size-18">Bienvenid@ {name}! </h4>
                            </div>
                        </div>
                    </div>  
                    {section}     
                </div> 
            </div>
            
            <Footer />
            </div>
        </div>
    </div>
  );
}

export default App;
