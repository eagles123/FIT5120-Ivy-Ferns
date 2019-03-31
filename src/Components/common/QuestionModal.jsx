import React, { Component } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Button,
  Input,
  Select
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function QuestionModal({
  open,
  marriage,
  child,
  handleCChange,
  handleMChange,
  handleModal
}) {
  return (
    <div>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className="form">
            <FormControl className="form control">
              <DialogContentText>
                <span>I am </span>
                <Select
                  native
                  value={marriage}
                  onChange={handleMChange}
                  input={<Input />}
                >
                  <option value="" />
                  <option value={"single"}>single</option>
                  <option value={"family"}>with family</option>
                </Select>
                <span>I have</span>
                <FormControl className="form control">
                  <Select
                    native
                    value={child}
                    onChange={handleCChange}
                    input={<Input />}
                  >
                    <option value="" />
                    <option value={0}>No</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>3+</option>
                  </Select>
                </FormControl>
                <span>Chidlren. </span>
                <span>I value</span>
                <FormControl className="form control">
                  <Select
                    native
                    value={child}
                    onChange={handleCChange}
                    input={<Input />}
                  >
                    <option value="" />
                    <option value={"health"}>Health</option>
                    <option value={"education"}>Education</option>
                    <option value={"property"}>Property Price</option>
                    <option value={"job"}>Jobs</option>
                  </Select>
                </FormControl>
                <span>most</span>
              </DialogContentText>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Link to="/">
            <Button color="primary">Back</Button>
          </Link>
          <Button color="primary" onChange={handleModal}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
