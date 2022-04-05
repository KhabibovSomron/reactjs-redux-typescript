import * as UserActionCreators from "../action-creators/user"
import * as TodoActionCreators from "../action-creators/todo"

export default  {
    ...TodoActionCreators,
    ...UserActionCreators
}