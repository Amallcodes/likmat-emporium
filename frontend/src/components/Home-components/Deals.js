// import { NavLink } from "react-router-dom";
import { useRef, useState, useMemo, useEffect } from "react";

const Deals = () => {
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
        <div className="deals" >
            <div ref={targetRef} className="fourth-section-grid" > {/*className={`fourth-section-grid start-flow animation-from-down ${isIntersecting && 'end-flow'}`}*/}

                <div className="offer-box">  {/*className={`offer-box start-flow animation-from-down ${isIntersecting && 'end-flow'}`}*/}

                    <div className="offer-img">
                        <img src="https://res.cloudinary.com/dwaxfgmgy/image/upload/v1694464043/seamaster_diver_300m_press-information-11_qeh7fr.jpg" alt="" />
                    </div>

                    <div className="offer-text">
                        <p> 22% off </p>
                        <p className="deal-title">Jewelry on discount</p>
                    </div>
                </div>

                <div className="offer-box">  {/*className={`offer-box start-flow animation-from-down ${isIntersecting && 'end-flow'}`}*/}

                    <div className="offer-img">
                        <img src="https://res.cloudinary.com/dwaxfgmgy/image/upload/v1694463138/pexels-andrea-piacquadio-1050244-scaled_mg6pu9.jpg" alt="" />
                    </div>

                    <div className="offer-text">
                        <p> 22% off </p>
                        <p className="deal-title">Holiday Deals</p>
                    </div>
                </div>

                <div className="offer-box"> {/*className={`offer-box start-flow animation-from-down ${isIntersecting && 'end-flow'}`}*/}

                    <div className="offer-img">
                        <img src="https://res.cloudinary.com/dwaxfgmgy/image/upload/v1694463138/backtoschool_-_Copy_eqm2ol.jpg" alt="" />
                    </div>

                    <div className="offer-text">
                        <p> 22% off </p>
                        <p className="deal-title">Back To School</p>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default Deals