import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            return dispatch(decrement());
          }}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            return dispatch(increment());
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => {
            return setIncrementAmount(e.target.value);
          }}
        />
        <button
          className={styles.button}
          onClick={() => {
            return dispatch(incrementByAmount(incrementValue));
          }}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => {
            return dispatch(incrementAsync(incrementValue));
          }}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => {
            return dispatch(incrementIfOdd(incrementValue));
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
