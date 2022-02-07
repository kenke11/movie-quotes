const Textarea = (props) => {
  return (
    <label htmlFor={props.id}>
      <textarea
        name={props.name}
        id={props.id}
        cols='30'
        rows='8'
        placeholder={props.placeholder}
        className='focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400 w-full bg-gray-800 rounded-lg px-5 py-3 text-white caret-orange-400'
      />
    </label>
  );
};

export default Textarea;
