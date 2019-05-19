import React, { useState, useContext, useEffect } from "react";
import { ChoiceContext } from "../context/ParameterContext";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";
import { getSuburbByIdQuery } from "../../queries/queries";
import CompareList from "./../common/CompareList";
import CompareTable from "./../common/CompareTable";
import Sidebar from "react-sidebar";
import {
  Fab,
  Button,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core/";

let tempList = [];
function Compare({ data, client, match, history }) {
  const { suburbList } = useContext(ChoiceContext);
  const [open, setOpen] = useState(true);
  const [alert, setAlert] = useState(false);
  const [compareSuburbs, setSuburbs] = useState([]);
  //state and method to handle check list in compare
  const [checked, setChecked] = useState([match.params.id]);
  function handelCheck(value) {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1 && checked.length < 3) {
      newChecked.push(value);
    } else if (currentIndex === -1 && checked.length === 3) {
      // alert("Error: You can only select maximum three suburbs to compare.");
      alertOpen();
    } else if (currentIndex !== -1 && checked.length <= 3) {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  }

  function alertOpen() {
    setAlert(true);
  }

  function alertClose() {
    setAlert(false);
  }

  function handleOpen() {
    setOpen(!open);
  }

  function handlePre() {
    history.push(`/dashboard/${match.params.id}`);
  }

  useEffect(() => {
    if (data.loading === false) setSuburbs([data.suburb]);
  }, [data.loading]);

  //hook to fetch new data and to delet the suburb from the compareSuburbs list
  useEffect(() => {
    if (checked.length > tempList.length) {
      tempList = checked;
      client
        .query({
          query: getSuburbByIdQuery,
          variables: { id: checked[checked.length - 1] }
        })
        .then(({ data }) => {
          const newSuburb = [...compareSuburbs];
          newSuburb.push(data.suburb);
          setSuburbs(newSuburb);
        });
    } else if (checked.length <= tempList.length) {
      tempList = checked;
      const newSuburb = compareSuburbs.filter(s => checked.includes(s._id));
      setSuburbs(newSuburb);
    }
  }, [checked]);

  return (
    <div className="container-fluid comparemain">
      <div className="row">
        <div className="col s1 m1">
          <Tooltip title="Back" placement="bottom">
            <Fab
              size="small"
              color="primary"
              aria-label="Add"
              onClick={handlePre}
              style={{ margin: "20px 0px 0px 0px", zIndex: 1 }}
            >
              <i className="fas fa-arrow-left" />
            </Fab>
          </Tooltip>
          <p />
          <Tooltip title="Compare Suburbs" placement="bottom">
            <Fab
              size="small"
              color="primary"
              aria-label="Add"
              onClick={handleOpen}
              style={{
                margin: "10px 0px 10px 0px",
                position: "absolute",
                zIndex: 1
              }}
            >
              <i className="fas fa-tasks fa-lg" />
            </Fab>
          </Tooltip>
          <Sidebar
            sidebar={
              <CompareList
                suburbList={suburbList}
                checked={checked}
                handelCheck={handelCheck}
                handleOpen={handleOpen}
              />
            }
            open={open}
            onSetOpen={handleOpen}
            styles={{ sidebar: { background: "#9ccc65" } }}
          />
        </div>
        <Dialog
          open={alert}
          onClose={alertClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Error!"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You can only select maximum three suburbs to compare.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={alertClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        <div className="col s10 m10">
          <h4 style={{ fontSize: "35px" }}>Compare Up to Three Suburbs</h4>
          <CompareTable compareSuburbs={compareSuburbs} />
        </div>
      </div>
    </div>
  );
}

export default withApollo(
  graphql(getSuburbByIdQuery, {
    options: props => {
      return {
        variables: {
          id: props.match.params.id
        }
      };
    }
  })(Compare)
);
