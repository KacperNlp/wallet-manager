import { VictoryPie, VictoryTheme } from "victory";

export type Props = {
  pieData: {
    x: string;
    y: number;
  }[];
};

export default function AppPie({ pieData }: Props) {
  return <VictoryPie data={pieData} theme={VictoryTheme.clean} />;
}
