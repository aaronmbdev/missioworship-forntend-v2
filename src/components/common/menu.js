
const Menu = () => {
    const no_link = "#";
    return (
        <div className="topnav">
            <div className="container-fluid">
                <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
    
                    <div className="collapse navbar-collapse" id="topnav-menu-content">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">
                                    <i className="mdi mdi-storefront mr-2"></i>Dashboard
                                </a>
                            </li>
    
                            <li className="nav-item dropdown mega-dropdown">
                                <a className="nav-link dropdown-toggle arrow-none" href={no_link} id="topnav-uielement" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="mdi mdi-format-underline mr-2"></i>UI Elements <div className="arrow-down"></div>
                                </a>
                                <div className="dropdown-menu mega-dropdown-menu" aria-labelledby="topnav-uielement">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div>
                                                <a href="ui-alerts.html" className="dropdown-item">Alerts</a>
                                                <a href="ui-badge.html" className="dropdown-item">Badge</a>
                                                <a href="ui-buttons.html" className="dropdown-item">Buttons</a>
                                                <a href="ui-cards.html" className="dropdown-item">Cards</a>
                                                <a href="ui-dropdowns.html" className="dropdown-item">Dropdowns</a>
                                                <a href="ui-navs.html" className="dropdown-item">Navs</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div>
                                                <a href="ui-tabs-accordions.html" className="dropdown-item">Tabs &amp; Accordions</a>
                                                <a href="ui-modals.html" className="dropdown-item">Modals</a>
                                                <a href="ui-images.html" className="dropdown-item">Images</a>
                                                <a href="ui-progressbars.html" className="dropdown-item">Progress Bars</a>
                                                <a href="ui-pagination.html" className="dropdown-item">Pagination</a>
                                                <a href="ui-popover-tooltips.html" className="dropdown-item">Popover & Tooltips</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div>
                                                <a href="ui-spinner.html" className="dropdown-item">Spinner</a>
                                                <a href="ui-carousel.html" className="dropdown-item">Carousel</a>
                                                <a href="ui-video.html" className="dropdown-item">Video</a>
                                                <a href="ui-typography.html" className="dropdown-item">Typography</a>
                                                <a href="ui-grid.html" className="dropdown-item">Grid</a>
                                            </div>
                                        </div>
                                    </div>
                        
                                </div>
                            </li>
    
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle arrow-none" href={no_link} id="topnav-components" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="mdi mdi-cloud-print-outline mr-2"></i>Components <div className="arrow-down"></div>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="topnav-components">
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href={no_link} id="topnav-email"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Email <div className="arrow-down"></div>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-email">
                                            <a href="email-inbox.html" className="dropdown-item">Inbox</a>
                                            <a href="email-read.html" className="dropdown-item">Email Read</a>
                                            <a href="email-compose.html" className="dropdown-item">Email Compose</a>
                                        </div>
                                    </div>
                                    <a href="calendar.html" className="dropdown-item">Calendar</a>
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href={no_link} id="topnav-icon"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Icons <div className="arrow-down"></div>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-icon">
                                            <a href="icons-materialdesign.html" className="dropdown-item">Material Design</a>
                                            <a href="icons-dripicons.html" className="dropdown-item">Dripicons</a>
                                            <a href="icons-fontawesome.html" className="dropdown-item">Font awesome 5</a>
                                            <a href="icons-themify.html" className="dropdown-item">Themify</a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href={no_link} id="topnav-table"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Tables <div className="arrow-down"></div>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-table">
                                            <a href="tables-basic.html" className="dropdown-item">Basic Tables</a>
                                            <a href="tables-datatable.html" className="dropdown-item">Data Tables</a>
                                            <a href="tables-responsive.html" className="dropdown-item">Responsive Table</a>
                                            <a href="tables-editable.html" className="dropdown-item">Editable Table</a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href={no_link} id="topnav-form"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Forms <div className="arrow-down"></div>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-form">
                                            <a href="form-elements.html" className="dropdown-item">Form Elements</a>
                                            <a href="form-validation.html" className="dropdown-item">Form Validation</a>
                                            <a href="form-advanced.html" className="dropdown-item">Form Advanced</a>
                                            <a href="form-editors.html" className="dropdown-item">Form Editors</a>
                                            <a href="form-uploads.html" className="dropdown-item">Form File Upload</a>
                                            <a href="form-mask.html" className="dropdown-item">Form Mask</a>
                                            <a href="form-summernote.html" className="dropdown-item">Summernote</a>
                                        </div>
                                    </div>
                        
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href={no_link} id="topnav-table"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Charts <div className="arrow-down"></div>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-table">
                                            <a href="charts-morris.html" className="dropdown-item">Morris</a>
                                            <a href="charts-apex.html" className="dropdown-item">Apex</a>
                                            <a href="charts-chartist.html" className="dropdown-item">Chartist</a>
                                            <a href="charts-chartjs.html" className="dropdown-item">Chartjs</a>
                                            <a href="charts-flot.html" className="dropdown-item">Flot</a>
                                            <a href="charts-sparkline.html" className="dropdown-item">Sparkline</a>
                                            <a href="charts-knob.html" className="dropdown-item">Jquery Knob</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
    
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle arrow-none" href={no_link} id="topnav-advancedui" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="mdi mdi-package-variant-closed mr-2"></i>Advanced UI <div className="arrow-down"></div>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="topnav-advancedui">
                                    <a href="advanced-alertify.html" className="dropdown-item">Alertify</a>
                                    <a href="advanced-rating.html" className="dropdown-item">Rating</a>
                                    <a href="advanced-nestable.html" className="dropdown-item">Nestable</a>
                                    <a href="advanced-rangeslider.html" className="dropdown-item">Range Slider</a>
                                    <a href="advanced-sweet-alert.html" className="dropdown-item">Sweet-Alert</a>
                                    <a href="advanced-lightbox.html" className="dropdown-item">Lightbox</a>
                                    <a href="advanced-maps.html" className="dropdown-item">Maps</a>
                                </div>
                            </li>
    
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle arrow-none" href={no_link} id="topnav-more" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="mdi mdi-file-document-box-multiple-outline mr-2"></i>Extra pages <div className="arrow-down"></div>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="topnav-more">
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href={no_link} id="topnav-auth"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Authentication <div className="arrow-down"></div>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-auth">
                                            <a href="auth-login.html" className="dropdown-item">Login</a>
                                            <a href="auth-register.html" className="dropdown-item">Register</a>
                                            <a href="auth-recoverpw.html" className="dropdown-item">Recover Password</a>
                                            <a href="auth-lock-screen.html" className="dropdown-item">Lock Screen</a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-item dropdown-toggle arrow-none" href={no_link} id="topnav-utility"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Utility <div className="arrow-down"></div>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-utility">
                                            <a href="pages-starter.html" className="dropdown-item">Starter Page</a>
                                            <a href="pages-maintenance.html" className="dropdown-item">Maintenance</a>
                                            <a href="pages-comingsoon.html" className="dropdown-item">Coming Soon</a>
                                            <a href="pages-timeline.html" className="dropdown-item">Timeline</a>
                                            <a href="pages-gallery.html" className="dropdown-item">Gallery</a>
                                            <a href="pages-faqs.html" className="dropdown-item">FAQs</a>
                                            <a href="pages-pricing.html" className="dropdown-item">Pricing</a>
                                            <a href="pages-404.html" className="dropdown-item">Error 404</a>
                                            <a href="pages-500.html" className="dropdown-item">Error 500</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle arrow-none" href={no_link} id="topnav-layout" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="mdi mdi-flip-horizontal mr-2"></i>Layouts <div className="arrow-down"></div>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="topnav-layout">
                                    <a href="layouts-topbar-light.html" className="dropdown-item">Topbar light</a>
                                    <a href="layouts-boxed-width.html" className="dropdown-item">Boxed width</a>
                                    <a href="layouts-colored-header.html" className="dropdown-item">Colored Header</a>
                                </div>
                            </li>
    
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Menu;
