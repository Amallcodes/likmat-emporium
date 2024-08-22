import { useRef } from "react";
import { FeatureCard } from "../Cards";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader";

const FeaturesSection = () => {
    const { data: featuredProducts, isPending, error } = useFetch("https://likmat-demo-backend.onrender.com/api/products");
    const gridRef = useRef(null);

    const scrollLeft = () => {
        if (gridRef.current) {
            gridRef.current.scroll({
                left: gridRef.current.scrollLeft - gridRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    }

    const scrollRight = () => {
        if (gridRef.current) {
            gridRef.current.scroll({
                left: gridRef.current.scrollLeft + gridRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    }


    return (
        <div className="features-section">
            {error && <div style={{ textAlign: "center", padding: "30px 50px" }}>
                <p style={{ color: "orangered", fontSize: "1.3rem" }}>{error}</p>
            </div>}

            {isPending && <div style={{ display: "flex", justifyContent: "center", padding: "30px 50px" }}>
                <Loader />
            </div>}

            {featuredProducts &&
                <div ref={gridRef} className="featured-products grid">
                    {featuredProducts.slice(0, 10).map((product) => (
                        <FeatureCard
                            key={product._id}
                            image={product.image}
                            price={product.price}
                            item={product.item}
                            description={product.description}
                        />
                    ))}
                </div>
            }

            <div className="scroll-buttons">
                <button id="scrollLeftButton" onClick={scrollLeft} style={{fontSize:"1rem"}} className="laptop"><i className="fa-solid fa-left-long"></i></button>
                <button id="scrollRightButton" onClick={scrollRight} style={{fontSize:"1rem"}} className="laptop"><i className="fa-solid fa-right-long"></i></button>
            </div>

        </div>
    );
}

export default FeaturesSection;