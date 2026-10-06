const MyButton = () => {
    const handleClick = () => {
        alert('Button clicked!');
    }
  return <button style={{height: '50px', width: '100px'}} onClick={handleClick}>Click Me</button>;
};

const Event = () => {
  return (
    <div>
      <MyButton />
    </div>
  );
};

export default Event;