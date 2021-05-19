import React, { Component } from "react";
import { connect } from "react-redux";
import { getUnresolvedBugs, loadBugs, resolveBug } from "../store/bugs";
class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs();
  }

  render() {
    return (
      <ul>
        {this.props.bugs.map((bug) => (
          <li key={bug.id}>
            {bug.description}
            <button
              onClick={() => {
                console.log(bug.id);
                this.props.resolveBug(bug.id);
              }}
            >
              Resolve
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

// bugs: state.entities.bugs.list
const mapStateToProps = (state) => ({
  bugs: getUnresolvedBugs(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
  resolveBug: (id) => dispatch(resolveBug(id)),
});

// Container Component
// Presentation Component (Bugs)

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
// We don't have to subscribe or unsubscribe whenever componentDidMount or UnMount
