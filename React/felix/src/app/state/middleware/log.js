import content from "../../../content";

const log = ({ dispatch, getState }) => (next) => (action) => {
  console.log(
    { dispatch, getState, next, action }
  );

  return next(action);
};

export default log;