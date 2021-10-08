
import { Card } from 'antd';
import styles from './Coin.module.css';
import {
  useCoinListQuery
} from './coinsAPI';

import { useAppDispatch } from '../../app/hooks';
import {
  setStatus
} from '../page/pageSlice';


export function CoinCards() {
  const { data, error, isLoading } = useCoinListQuery(10)

  console.log('coins', data, error, isLoading)
  const dispatch = useAppDispatch();

  dispatch(setStatus(isLoading? 'loading':'idle'))

  return (
    <div className={styles["grid-card"]}>
      {
        data?.data?.coins?.map(coin => <Card key={coin.symbol} size='small' title={coin.symbol} extra={<img src={coin.iconUrl} style={{'width': 30}}/>}>
          <p>Price: {coin.price}</p>
          <p>Market Cap: {coin.marketCap}</p>
          <p>Daily Change: {coin.change}</p>
        </Card>)
      }
    </div>)
}