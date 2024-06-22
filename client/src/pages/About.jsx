import { useAuth } from "../store/auth";

export const About = () => {
    const { user } = useAuth();
    
    return(
        <>
        <main>
            <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <p>Welcome, { user ? ` ${user.username} to our website` : ` to our website`}</p>
                    <h1>Why Choose Us</h1>
                    <p>
                        Expertise Our team consists of experienced IT professionals who
                        are passionate about staying up-to-date with the latest industry trends
                        </p>

                        <p>
                        Customization We understands tht every business is unique .Thats 
                        why we create solutions that are talented to your specific needs and goals
                        </p>

                        <p>
                        Customer-Centric Approach. We prioritize your satisfaction and provide
                        top-notch support to address your IT concerns
                        </p>
                        <p>
                        Affordable We offer competitive pricing without comprimising on the
                        quality of our services
                        </p>
                        <p>

                        Relability Count on us to be there when you need us. We committed
                        to ensure your IT environment in relable and available 24/7
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
                    <img src="/images/about.png" alt="Coding Together"
                    width="600"
                    height="600"
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
                    <h2>150+</h2>
                    <p>Project Done</p>
                    </div>
                    <div className="div1">
                    <h2>500+</h2>
                    <p>Happy Clients</p>
                    </div>
                    <div className="div1">
                    <h2>650K+</h2>
                    <p>Socia Media Clients</p>
                </div>
           </div>
    </section> 

    </>
    );
};