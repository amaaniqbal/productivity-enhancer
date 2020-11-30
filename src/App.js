import React from "react";
import "./App.css";
import Board from "./Board";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import mondaySdk from "monday-sdk-js";
import { Box } from "@material-ui/core";
const monday = mondaySdk();

class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      context: { boardIds: [882172337] },
      name: "",
    };
  }

  componentDidMount() {
    monday.listen("settings", (res) => {
      this.setState({ settings: res.data });
      console.log(res.data);
    });

    monday.listen("context", (res) => {
      this.setState({ context: res.data });
      console.log(res.data);
      monday
        .api(
          `query ($boardIds: [Int]) {
            boards(ids: $boardIds) {
              name
              items {
                name
                column_values {
                  title
                  text
                }
              }
            }
          }`,
          { variables: { boardIds: this.state.context.boardIds } }
        )
        .then((res) => {
          this.setState({ boardData: res.data });
        });
    });
  }

  render() {
    console.log(this.state);
    if (!this.state.boardData)
      return (
        <Box pt={5} display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      );

    return (
      <div
        className="App"
        style={{ background: this.state.settings.background }}
      >
        <Container maxWidth="lg">
          <Board
            settings={this.state.settings}
            data={this.state.boardData.boards[0]}
          />
        </Container>
      </div>
    );
  }
}

export default App;
