import React from "react";
import PieChart, {
  Legend,
  Series,
  Tooltip,
  Format,
  Label,
  Connector,
  Export,
} from "devextreme-react/pie-chart";

class App extends React.Component {
  render() {
    const map = {};
    this.props.data.items.forEach(function (arrayItem) {
      var productiveHour = arrayItem.column_values.find((obj) => {
        return obj.title === "Most Productive Hours";
      }).text;

      map[productiveHour] = map[productiveHour] + 1 || 1;
    });

    const chartData = [];
    for (const key in map) {
      chartData.push({ productiveHour: key, val: map[key] });
    }

    return (
      <PieChart
        id="pie"
        type="doughnut"
        title="Most Productive Hours - Donut Chart"
        palette="Soft Pastel"
        dataSource={chartData}
      >
        <Series argumentField="productiveHour">
          <Label visible={true}>
            <Connector visible={true} />
          </Label>
        </Series>
        <Export enabled={true} />
        <Legend
          margin={0}
          horizontalAlignment="right"
          verticalAlignment="top"
        />
        <Tooltip enabled={true} customizeTooltip={this.customizeTooltip}>
          <Format />
        </Tooltip>
      </PieChart>
    );
  }

  customizeTooltip(arg) {
    return {
      text: `${arg.argument} : ${(arg.percent * 100).toFixed(2)}%`,
    };
  }
}

export default App;
