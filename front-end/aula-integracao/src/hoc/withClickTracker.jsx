export function withClickTracker(WrappedComponent, componentName) {
  function wrapper(props) {
    function onClickHandler() {
      console.log("CLICKED: ", componentName);
    }

    return (
      <div onClick={onClickHandler}>
        <WrappedComponent {...props} />
      </div>
    );
  }

  return wrapper;
}
