import { useEffect, useState } from "react"
import { Input, Space } from 'antd';
const { Search } = Input;



export function Cryptocurrencies() {
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
  const onSearch = (value:string) => console.log(value);
  return (<>
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  </>)
}