// import image from "../image42.jpg"
import { useState, useEffect, useRef } from "react";

const FeatureCard = ({item, image, price, description}) => {
    return (
        <div>
            <div className="featured-card">

                <div className="card-image">
                    <img src={image} alt="" />
                </div>

                <div className="featured-card-text surf-text">
                    <div className="featured-card-text-flex">
                        <h3>{item}</h3>
                        <p>₦{price}</p>
                    </div>

                    <div className="laptop">
                        <p>{description}</p>
                    </div>

                </div>

            </div>
        </div>
    );
}



const SurfCard = ({image, price, description}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const targetRef = useRef(null);

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             setIsIntersecting(entry.isIntersecting);
    //         });
    //     });

    //     if (targetRef.current) {
    //         observer.observe(targetRef.current);
    //     }

    //     return () => {
    //         if (targetRef.current) {
    //             observer.unobserve(targetRef.current);
    //         }
    //     };
    // }, []);

    return (
        <div ref={targetRef} className="surf-card"> {/*className={`surf-card start-flow animation-from-down ${isIntersecting && 'end-flow'}`}*/}

            <div className="surf-text flex-text-illusion">
                <h3>₦{price}</h3>
                <p>{description}</p>
            </div>

            <div className="surf-card-image">
                <img src={image} alt="" />
            </div>

            <div className="surf-text flex-text-solid">
                <h3>₦{price}</h3>
                <p>{description}</p>
            </div>

        </div>
    );
}

export { SurfCard, FeatureCard };