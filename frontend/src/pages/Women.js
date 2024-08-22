import { NavLink } from "react-router-dom";
import Deals from "../components/Home-components/Deals";
import { PageNav } from "../components/Navbar";
import { SurfCard } from "../components/Cards";
import { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";

const Women = () => {
    const searchRef = useRef(null);
    const [filteredData, setFilteredData] = useState(null);
    const { data: products, isPending, error } = useFetch("https://likmat-demo-backend.onrender.com/api/products");

    useEffect(() => {
        if (products) {
            const filteredItems = products.filter(item => item.category === 'Unisex' || item.category === 'Women');
            setFilteredData(filteredItems);
        }
    }, [products])

    const searchButtonClicked = () => {
        searchRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="page">
            <PageNav />

            <div className="search">
                <input type="text" placeholder="search items e.g bags" />
                <button onClick={searchButtonClicked}>Search</button>
            </div>

            <div className="page-deals">
                <Deals />
            </div>

            <div className="page-header-box">
                <h2 ref={searchRef}>Women</h2>
            </div>

            {error && <div style={{ textAlign: "center", padding: "30px 50px" }}>
                <p style={{ color: "orangered", fontSize: "1.3rem" }}>{error}</p>
            </div>}

            {isPending && <div style={{ display: "flex", justifyContent: "center", padding: "30px 50px" }}>
                <Loader />
            </div>}

            {products &&
                <div className="surf-section">
                    <div className="surf-section-mobile mobile">
                        <div className="surf-section-flex-one">

                            {filteredData && filteredData.slice(0, 6).map((product) => (
                                <SurfCard
                                    key={product._id}
                                    image={product.image}
                                    price={product.price}
                                    description={product.description}
                                />
                            ))}
                        </div>

                        <div className="surf-section-flex-two">
                            {filteredData && filteredData.slice(0, 6).map((product) => (
                                <SurfCard
                                    key={product._id}
                                    image={product.image}
                                    price={product.price}
                                    description={product.description}
                                />
                            ))}


                        </div>
                    </div>

                    <div className="surf-section-laptop laptop">
                        {filteredData && filteredData.slice(0, 8).map((product) => (
                            <SurfCard
                                key={product._id}
                                image={product.image}
                                price={product.price}
                                description={product.description}
                            />
                        ))}

                        {/* delete for actual production */}
                        {filteredData && filteredData.slice(0, 9).map((product) => (
                            <SurfCard
                                key={product._id}
                                image={product.image}
                                price={product.price}
                                description={product.description}
                            />
                        ))}

                    </div>
                </div>
            }

        </div>
    );
}

export default Women;