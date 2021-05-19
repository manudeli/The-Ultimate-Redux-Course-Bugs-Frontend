import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBugs, getUnresolvedBugs } from "../store/bugs";

function BugsList() {
  const dispatch = useDispatch();
  const bugs = useSelector(getUnresolvedBugs);

  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  return (
    <ul>
      {bugs.map((bug) => (
        <li key={bug.id}>{bug.description}</li>
      ))}
    </ul>
  );
}

export default BugsList;
