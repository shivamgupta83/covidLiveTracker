import React, { useEffect, useState } from "react";

const App = () => {

    let [confirmed, setconfirmed] = useState(0);
    let [testedData, settestedData] = useState(0);
    let [deceasedData, setdeceasedData] = useState(0);
    let [recoveredData, setrecoveredData] = useState(0);
    let [vaccinated1Data, setvaccinated1Data] = useState(0);
    let [vaccinated2Data, setvaccinated2Data] = useState(0);

    // console.log(data2)
    const getcovidData = async () => {
        const res = await fetch('https://data.covid19india.org/v4/min/data.min.json');

        const data = await res.json()

        for (let keys in data) {

            setconfirmed(confirmed += data[keys]["total"]["confirmed"]);
            settestedData(testedData += data[keys]["total"]["tested"]);
            setdeceasedData(deceasedData += data[keys]["total"]["deceased"]);
            setrecoveredData(recoveredData += data[keys]["total"]["recovered"]);
            setvaccinated1Data(vaccinated1Data += data[keys]["total"]["vaccinated1"]);
            setvaccinated2Data(vaccinated2Data += data[keys]["total"]["vaccinated2"]);

            console.log(data)
            // setData2(data[keys]["total"])
        }
    }
    useEffect(() => {
        getcovidData()
    }, [])

    return (
        <>

            <h3 className="upper1"> Live Data</h3>

            <h2 className="upper2">covid 19 Live tracker</h2>
<div className="pdiv">
<div className="div2"> 
            <h4 className="box">testedData   {testedData}</h4>


            <h4 className="box">confirmedData {confirmed}</h4>


            <h4 className="box">deceasedData {deceasedData}</h4>
</div>

<div className="div3">
            <h4 className="box">recoveredData {recoveredData}</h4>



            <h4 className="box">vaccinated1Data {vaccinated1Data}</h4>


            <h4 className="box">vaccinated2Data {vaccinated2Data}</h4>
</div>
</div>
        </>

    )
}

export default App;