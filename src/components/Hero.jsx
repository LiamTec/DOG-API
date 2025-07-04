const Hero = () => {
    return (
    <nav>
        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> 
            <h1 className="display-5 fw-bold text-body-emphasis">Perros random</h1> 
            <div className="col-lg-6 mx-auto"> 
                <p className="lead mb-4">perros</p> 
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"> 
                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button> 
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button> </div> </div> </div>                    
            </nav>
    )
}

export default Hero;