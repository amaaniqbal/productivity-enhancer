import React from "react";
import {
  Chart,
  SeriesTemplate,
  CommonSeriesSettings,
  Title,
  Export,
} from "devextreme-react/chart";

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
      chartData.push({ productiveHour: key, count: map[key] });
    }

    return (
      <Chart id="bar" palette="Soft" dataSource={chartData}>
        <CommonSeriesSettings
          argumentField="productiveHour"
          valueField="count"
          type="bar"
          ignoreEmptyPoints={true}
        />
        <SeriesTemplate nameField="productiveHour" />
        <Export enabled={true} />
        <Title text="Most Productive Hours - Bar Chart" />
      </Chart>
    );
  }
}

export default App;
