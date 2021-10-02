import { useEffect, useState } from "react"


export function Stats() {
  const [totalCoins, setTotalCoins] = useState(0)

  useEffect(() => {
    fetch("https://coinranking1.p.rapidapi.com/stats", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "e7dad98537msh6794aa3acc3598fp18c43cjsn35cf4e2be9c7"
      }
    })
    .then(async response => {
      const {
        totalCoins
      } = (await response.json()).data
      console.log(totalCoins);
      setTotalCoins(totalCoins)
    })
    .catch(err => {
      console.error(err);
    }); 
  })
  return (<>
    <h1>Global Crypto Stats</h1>
    <div className="global-stats">
      <div className="stats-item">
        <p>Total Cryptocurrencies</p>
        <p>{totalCoins}</p>
      </div>
    </div>
  </>)
}