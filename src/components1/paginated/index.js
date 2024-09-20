import React from "react";

const Paginated = ({ page, setPage, total }) => {
    const handleNext = () => {
        setPage(page + 1);
    };
    
    const handlePrev = () => {
        setPage(page - 1);
    };
    
    return (
        <div>
        <button onClick={handlePrev} disabled={page === 1}>Prev</button>
        <span>{page}</span>
        <button onClick={handleNext} disabled={page === total}>Next</button>
        </div>
    );
}

export default Paginated;