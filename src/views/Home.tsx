import { Stats } from '../features/stats/Stats';
let foo = () => 0 // this line should be auto fix by Eslint and add `;` by prettier
foo();
export function Home() {
  return (
    <>
      <Stats />
    </>
  );
}
