import { connect } from 'react-redux';
import TodoList from '../components/screen/todoList';
import { toggleTodo } from '../redux/actions';

const mapStateToProps = state => ({
    todos: state.todos
})
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)