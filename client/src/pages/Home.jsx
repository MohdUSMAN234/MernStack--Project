export const Home = () => {

    return(
        <>
        <img src="/images/logo11.png" alt="logo" width= "150px " height="60px"   className="logo" />
        <main>
            <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <p>We are the World Best Logistics Company</p>
                    <h1>Welcome to Usman Logistics</h1>
                    <p>
                        Are you ready to take your business to the next level with 
                        cutting-edge IT solution? Look no further! At Usman Logistics,
                        we specialize in providing innovative IT services and solutions
                        tailored to meet your unique needs. 
                    </p>
                    <div className="btn btn-group">
                        <a href="/contact">
                            <button className="btn">connect now</button>
                        </a>
                        <a href="/services">
                            <button className="btn secondary-btn">learn more</button>
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/images/2.png" alt="Coding Together"
                    width="400"
                    height="500"
                     />
                </div>
            </div>
        </section>    
        </main>

        <section className="section-analytics">
            <div className="container grid grid-four-cols">
                <div className="div1">
                    <h2>50+</h2>
                    <p>registered companies</p>
                </div>
                <div className="div1">
                    <h2>100,00+</h2>
                    <p>Happy Clients</p>
                    </div>
                    <div className="div1">
                    <h2>500+</h2>
                    <p>Well Known Developers  </p>
                    </div>
                    <div className="div1">
                    <h2>24/7</h2>
                    <p>services</p>
                </div>
           </div>
    </section> 


    <section className="section-hero">
            <div className="container grid grid-two-cols">

            <div className="hero-image">
                    <img src="/images/tt.webp" alt="Coding Together"
                    width="400"
                    height="500"
                     />
                </div>

                <div className="hero-content">
                    <p>We are here to help to you</p>
                    <h1>Get Started Today</h1>
                    <p>
                        Ready to take the first step towards a more effective and secure
                        IT infrastruture? Contact us today for a free consultation and 
                        lets discuss how Usman Logistics can help your buisness thrive in
                        the digital ago.
                        </p>
                    <div className="btn btn-group">
                        <a href="/contact">
                            <button className="btn">connect now</button>
                        </a>
                        <a href="/services">
                            <button className="btn secondary-btn">learn more</button>
                        </a>
                    </div>
                </div>

                
            </div>
        </section>  

    </>
    );
};