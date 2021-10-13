import { Stats } from "../features/stats/Stats";
let foo = () => 0 // this line should be auto fix by Eslint

export function Home() {
  return (
    <>
      <Stats />
    </>
  );
}
