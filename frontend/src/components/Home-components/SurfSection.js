import { NavLink } from "react-router-dom";
import { SurfCard } from "../Cards";
import useFetch from "../../hooks/useFetch"
import Loader from "../../components/Loader"

const SurfSection = () => {
    const { data: products, isPending, error } = useFetch("https://likmat-demo-backend.onrender.com/api/products");

    return (
        <div className="">

            {error && <div style={{ textAlign: "center", padding: "30px 50px" }}>
                <p style={{ color: "orangered", fontSize: "1.3rem" }}>{error}</p>
            </div>}

            {isPending && <div style={{ display: "flex", justifyContent: "center", padding: "30px 50px" }}>
                <Loader />
            </div>}

            {products &&
                <div>
                    <div className="surf-section-mobile mobile">
                        <div className="surf-section-flex-one">
                            {products.slice(0, 7).map((product) => (
                                <SurfCard
                                    key={product._id}
                                    image={product.image}
                                    price={product.price}
                                    description={product.description}
                                />
                            ))}
                        </div>

                        <div className="surf-section-flex-two">
                            {products.slice(7, 14).map((product) => (
                                <SurfCard
                                    key={product._id}
                                    image={product.image}
                                    price={product.price}
                                    description={product.description}
                                />
                            ))}

                            {/* <div className="more-items">
                                <SurfCard></SurfCard>
                            </div> */}
                        </div>
                    </div>

                    <div className="surf-section-laptop laptop">
                        {products.slice(0, 17).map((product) => (
                            <SurfCard
                                key={product._id}
                                image={product.image}
                                price={product.price}
                                description={product.description}
                            />
                        ))}

                        {/* <div className="more-items">
                            <SurfCard></SurfCard>
                        </div> */}
                    </div>
                </div>
            }

        </div>
    );
}

export default SurfSection;