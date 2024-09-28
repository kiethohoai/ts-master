interface ListProps<T> {
  items: T[];
  render: (item: T) => React.ReactNode;
}

const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default List;
