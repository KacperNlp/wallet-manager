import { VictoryChart, VictoryBar, VictoryTheme } from "victory";

export type Props = {
  pieData: {
    x: string;
    y: number;
  }[];
};

export default function AppBar({ pieData }: Props) {
  return (
    <div>
      <VictoryChart domainPadding={{ x: 20 }} theme={VictoryTheme.clean}>
        <VictoryBar data={[1, 2, 3, 4, 5]} />
      </VictoryChart>
    </div>
  );
}
