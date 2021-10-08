import { useEffect, useState } from "react"


export function Stats() {
  const [total24hVolume, setTotal24hVolume] = useState(0)
  const [totalCoins, setTotalCoins] = useState(0)
  const [totalExchanges, setTotalExchanges] = useState(0)
  const [totalMarketCap, setTotalMarketCap] = useState(0)
  const [totalMarkets, setTotalMarkets] = useState(0)

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
        total24hVolume,
        totalCoins,
        totalExchanges,
        totalMarketCap,
        totalMarkets
      } = (await response.json()).data
      setTotal24hVolume(total24hVolume)
      setTotalCoins(totalCoins)
      setTotalExchanges(totalExchanges)
      setTotalMarketCap(totalMarketCap)
      setTotalMarkets(totalMarkets)

    })
    .catch(err => {
      console.error(err);
    }); 
  }, [])
  return (<>
    <h1>Global Crypto Stats</h1>
    <div className="global-stats">
      <div className="stats-item">
        <p>Total Cryptocurrencies</p>
        <p>{totalCoins}</p>
      </div>
      <div className="stats-item">
        <p>Total Exchanges</p>
        <p>{totalExchanges}</p>
      </div>
      <div className="stats-item">
        <p>Total Market Cap</p>
        <p>{totalMarketCap}</p>
      </div>
      <div className="stats-item">
        <p>Total 24h Volume</p>
        <p>{total24hVolume}</p>
      </div>
      <div className="stats-item">
        <p>Total Markets</p>
        <p>{totalMarkets}</p>
      </div>
    </div>
  </>)
}