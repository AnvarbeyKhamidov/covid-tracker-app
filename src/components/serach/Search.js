import React, {useState} from 'react';
import "./search.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Loader from "../loader/Loader";

function Search({onChildStateChange}) {
    const[search,setSearch] = useState("");

    const handleSearch = (e) => {
        const Search = e.target.value;
        setSearch(Search);
        onChildStateChange(Search);
    };
    return (
        <>
            <div className="container-fluid bg-success">
                <div className="row">

                    <div className="col-lg-5 col-sm-10 col-md-6 ml-auto mt-3">
                        <form>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button className="input-group-text bg-dark">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>

                                <input
                                    type="search"
                                    className="form-control bg-dark text-white"
                                    placeholder="Search Country..."
                                    value={search}
                                    onChange={handleSearch}
                                />
                            </div>
                        </form>


                    </div>

                    <div className="col-lg-1 col-sm-2 mt-3">
                        <div className="arrows d-flex align-items-center">
                            <a href="#" className="bi bi-arrow-up"></a>
                            <a href="#231" className="bi bi-arrow-down"></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;