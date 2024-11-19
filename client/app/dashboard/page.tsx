'use client';

import {
  VictoryPie,
  VictoryTheme,
} from "victory";

export default function Dashboard() {
  return (
    <>
      <VictoryPie
          data={[
            { x: "Cats", y: 35 },
            { x: "Dogs", y: 40 },
            { x: "Birds", y: 55 },
          ]}
          theme={VictoryTheme.clean}
        />
    </>
  );
}
