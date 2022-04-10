const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("i am changed", e);
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("i am dragged", e);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("i am clicked", e);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("i am submitted", e);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} />
        <button>Submit</button>
      </form>
      <div draggable onDragStart={onDragStart}>
        Drage Me
      </div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default EventComponent;
