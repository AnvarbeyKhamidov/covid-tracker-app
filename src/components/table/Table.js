import React, {useEffect, useState} from 'react';
import "./table.css";
import axios from "axios";
import Search from "../serach/Search";
import "bootstrap-icons/font/bootstrap-icons.css";
import Loader from "../loader/Loader";

function Table() {
    const[data,setData] = useState([]);
    const date = new Date();

    const[parentSearch,setParentSearch] = useState("");

    useEffect(() => {
             axios.get("https://disease.sh/v3/covid-19/countries")
            .then((response) => {
                console.log(response);

                setData(response.data);
            })

                 .catch((error) => {

                 })
    },[]);


    const handleChildStateChange = (newValue) => {
        setParentSearch(newValue)
    };


    return (
        <>

            <Search onChildStateChange = {handleChildStateChange}/>
            <div className="container-table">

                <table className="table table-dark table-striped table-hover table-bordered">
                    <thead className="thead">
                       <tr style={{background: "orange"}}>
                           <th>№</th>
                           <th className="text-primary">Country</th>
                           <th className="text-success">Country Code</th>
                           <th className="text-info">Flag</th>
                           <th>Cases</th>
                           <th>Today Cases</th>
                           <th className="text-success">Recovered</th>
                           <th className="text-primary">Active</th>
                           <th>Population</th>
                           <th className="text-danger">Deaths</th>
                           <th>Continent</th>
                           <th>Date</th>
                       </tr>
                    </thead>

                    <tbody >
                    {data.filter((value) => {
                      if (parentSearch === ""){
                          return value;
                      } else if (value.country.toLowerCase().includes(parentSearch.toLowerCase())){
                          return value;
                      }
                    }).map((item,index) => {
                        return(
                            <tr key={item["_id"]} id={index+1}>
                                <td className="font-weight-bold">
                                    {index+1}.
                                </td>

                                <td>
                                    {item.country}
                                </td>

                                <td>
                                    {item.countryInfo.iso2}
                                </td>

                                <td>
                                    <img className="flag" src={item.countryInfo.flag} alt="`${data.country}` flag"/>
                                </td>

                                <td>
                                    {item.cases}
                                </td>

                                <td>
                                    {item.todayCases}
                                </td>

                                <td>
                                    {item.recovered}
                                </td>

                                <td>
                                    {item.active}
                                </td>

                                <td>
                                    {item.population}
                                </td>

                                <td>
                                    {item.deaths}
                                </td>

                                <td>
                                    {item.continent}
                                </td>

                                <td>
                                    {date.getDate()}.0{date.getMonth()+1}.{date.getFullYear()}
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>

                    <tfoot id="tfoot">

                    </tfoot>
                </table>

                {data.length <= 0 ? <Loader/> : ""}

            </div>


        </>
    );
}

export default Table;