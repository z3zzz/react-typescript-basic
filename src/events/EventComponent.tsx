const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    console.log(e);
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("i am dragged", e);
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drage Me
      </div>
    </div>
  );
};

export default EventComponent;
