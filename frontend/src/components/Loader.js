const Loader = () => {
    return (
        <div className="loader">
            <div>
                <div className='loader'>
                    <span style={{ "--i": "1" }}></span>
                    <span style={{ "--i": "2" }}></span>
                    <span style={{ "--i": "3" }}></span>
                    <span style={{ "--i": "4" }}></span>
                    <span style={{ "--i": "5" }}></span>
                    <span style={{ "--i": "6" }}></span>
                    <span style={{ "--i": "7" }}></span>
                </div>
                <svg>
                    <filter id='gooey'>
                        <feGaussianBlur in=':SourceGraphic' stdDeviation="10"></feGaussianBlur>
                        <feColorMatrix values='
                        1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 20 -10
                        '></feColorMatrix>
                    </filter>
                </svg>

                <p className="loader-text">Loading..</p>
            </div>
        </div>
    );
}

export default Loader;