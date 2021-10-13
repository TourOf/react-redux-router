import { Stats } from '../features/stats/Stats';
let foo = () => {
  return 0;
}; // this line should be auto fix by Eslint
foo();
export function Home() {
  return (
    <>
      <Stats />
    </>
  );
}
