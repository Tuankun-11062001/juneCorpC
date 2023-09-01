const handleInput = (e, state, setState) => {
  const { name, value } = e.target;
  setState({
    ...state,
    [name]: value,
  });
};

export default handleInput;
