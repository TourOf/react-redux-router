export interface ICoin {
  symbol: string;
  iconUrl: string;
  price: number;
  marketCap: number;
  change: number;
}

export interface ICoins {
  coins: ICoin[];
}

type TStatus = 'success' | 'error';

export interface IRes<T> {
  data: T;
  status: TStatus;
}
