import { useAuth } from "../store/auth";
export const Services = () => {
    const { services } = useAuth();

    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>

            <div className="container grid grid-three-cols">
                {services.map((curElem, index) => {
                    const {price, description, provider, services} = curElem;
                    return(
                    <div className="card" key={index}>
                    <div className="card-img">
                        <img src="/images/about.png" alt="our services info" width="200"/>
                    </div>

                    <div className="card-details">
                        <div className="grid grid-two-cols">
                            <p>{provider}</p>
                            <p>{price}</p></div>
                            <h2>{services}</h2>
                            <p>{description}</p> 
                            </div>
                            </div>)
                })}
            </div>
        </section>
    )
};