import React from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import VisualizationDialog from "./VisualizationDialog";

function getBackgroundColorForProductiveHours(time) {
  if (time === "Morning (9 - 12)") return "#00c875";
  else if (time === "Afternoon (12 - 3)") return "#ffcb00";
  else return "#784bd1";
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const name = row.column_values.find((obj) => {
    return obj.title === "Name";
  }).text;

  const email = row.column_values.find((obj) => {
    return obj.title === "Email";
  }).text;

  const role = row.column_values.find((obj) => {
    return obj.title === "Role";
  }).text;

  const team = row.column_values.find((obj) => {
    return obj.title === "Team";
  }).text;

  const productiveHours = row.column_values.find((obj) => {
    return obj.title === "Most Productive Hours";
  }).text;

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell scope="row">{name}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{role}</TableCell>
        <TableCell>{team}</TableCell>
        <TableCell
          style={{
            backgroundColor: getBackgroundColorForProductiveHours(
              productiveHours
            ),
          }}
        >
          {productiveHours}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Box>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Box display="flex" justifyContent="center">
                  <Typography variant="span" gutterBottom component="div">
                    <strong>Productive Hours</strong>
                  </Typography>
                </Box>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow
                      style={{
                        backgroundColor: "#c4c4c4",
                      }}
                    >
                      <TableCell align="center">9 - 10 AM</TableCell>
                      <TableCell align="center">10 - 11 AM</TableCell>
                      <TableCell align="center">11 AM - 12 PM</TableCell>
                      <TableCell align="center">12 - 1 PM</TableCell>
                      <TableCell align="center">1 - 2 PM</TableCell>
                      <TableCell align="center">2 - 3 PM</TableCell>
                      <TableCell align="center">3 - 4 PM</TableCell>
                      <TableCell align="center">4 - 5 PM</TableCell>
                      <TableCell align="center">5 - 6 PM</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell scope="row" align="center">
                        <Checkbox
                          disabled
                          checked={
                            row.column_values.find((obj) => {
                              return obj.title === "9-10";
                            }).text === "v"
                          }
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          disabled
                          checked={
                            row.column_values.find((obj) => {
                              return obj.title === "10-11";
                            }).text === "v"
                          }
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          disabled
                          checked={
                            row.column_values.find((obj) => {
                              return obj.title === "11-12";
                            }).text === "v"
                          }
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          disabled
                          checked={
                            row.column_values.find((obj) => {
                              return obj.title === "12-1";
                            }).text === "v"
                          }
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          disabled
                          checked={
                            row.column_values.find((obj) => {
                              return obj.title === "1-2";
                            }).text === "v"
                          }
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          disabled
                          checked={
                            row.column_values.find((obj) => {
                              return obj.title === "2-3";
                            }).text === "v"
                          }
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          disabled
                          checked={
                            row.column_values.find((obj) => {
                              return obj.title === "3-4";
                            }).text === "v"
                          }
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          disabled
                          checked={
                            row.column_values.find((obj) => {
                              return obj.title === "4-5";
                            }).text === "v"
                          }
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Checkbox
                          disabled
                          checked={
                            row.column_values.find((obj) => {
                              return obj.title === "5-6";
                            }).text === "v"
                          }
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </Box>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function Board(props) {
  return (
    <Box py={1} px={3}>
      <Box my={1} display="flex">
        <Box component="h2" flexGrow={1} color="white">
          {props.settings.heading !== ""
            ? props.settings.heading
            : props.data.name}
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Box display="flex">
            <Box mr={2}>
              <VisualizationDialog data={props.data} />
            </Box>
            <Box>
              <Button
                variant="contained"
                color="secondary"
                href="https://forms.monday.com/forms/ef29872dcd363e280ed03fff062d071f"
                startIcon={<AddCircleIcon />}
              >
                Create Entry
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box boxShadow={3}>
        <TableContainer component={Paper} style={{ maxHeight: 400 }}>
          <Table
            aria-label="collapsible table"
            stickyHeader
            style={{ background: props.settings.tableColor }}
          >
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>
                  <strong>Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Email</strong>
                </TableCell>
                <TableCell>
                  <strong>Role</strong>
                </TableCell>
                <TableCell>
                  <strong>Team</strong>
                </TableCell>
                <TableCell>
                  <strong>Most Productive Hours</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.items.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
