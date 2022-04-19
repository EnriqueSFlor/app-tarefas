const List = () => {
  const items = [
    {
      id: 1,
      name: "Enrique",
    },
    {
      id: 2,
      name: "Regina",
    },
    {
      id: 3,
      name: "Eduardo",
    },
  ];
  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>
          {item.id} - {item.name}
        </p>
      ))}
    </div>
  );
};

export default List;
