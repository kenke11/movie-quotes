const Button = (props) => {
  return (
    <button
      type={props.type}
      disabled={!props.disabled}
      onClick={props.onClick ? props.onClick : ''}
      className='border-2 border-orange-400 px-5 py-3 hover:bg-orange-700 transition duration-200 uppercase rounded-lg cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed'
    >
      {props.children}
    </button>
  );
};

export default Button;
