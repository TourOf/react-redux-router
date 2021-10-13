import { Card, Spin } from 'antd';
import styles from './Coin.module.css';
import { useCoinListQuery } from './coinsAPI';

export function CoinCards() {
  const { data, error, isLoading } = useCoinListQuery(10);

  console.log('coins', data, error, isLoading);
  if (isLoading) return <Spin />;
  return (
    <div className={styles['grid-card']}>
      {data?.data?.coins?.map((coin) => {
        return (
          <Card
            key={coin.symbol}
            size="small"
            title={coin.symbol}
            extra={<img src={coin.iconUrl} style={{ width: 30 }} alt={coin.symbol} />}
          >
            <p>Price: {coin.price}</p>
            <p>Market Cap: {coin.marketCap}</p>
            <p>Daily Change: {coin.change}</p>
          </Card>
        );
      })}
    </div>
  );
}
