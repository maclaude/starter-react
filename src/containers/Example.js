/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Example from 'src/components/Example';

// Action Creators
import { doSomething } from 'src/store/reducer';

/* === State (data) ===
 * 
 * @param {object} state : state(s) of the store (getState).
 * @param {object} ownProps : props passed to the container.
 * @return {obejct} props object for the component.
 * 
 * no data to share ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  message: state.message,
});

/* === Actions ===
 * 
 * @param {function} dispatch : function of the store to dispatch an action.
 * @param {object} ownProps : props passed to the container.
 * @return {obejct} props object for the component.
 * 
 * no disptach to share ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  doSomething: () => {
    dispatch(doSomething('hello'));
  },
});

// Container
const ExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);

/* OR
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default ExampleContainer;
