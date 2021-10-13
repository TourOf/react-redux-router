// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) => {
    return setTimeout(() => {
      return resolve({ data: amount });
    }, 500);
  });
}
