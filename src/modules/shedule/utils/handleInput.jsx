import { actionError } from "../../../common/provider/slices/actionSlice";

const handleInput = (e, state, setState,dispatch = () => {}) => {
  dispatch(actionError({mode:false,message:''}))
  const { name, value } = e.target;
  setState({
    ...state,
    [name]: value,
  });
};

export default handleInput;
