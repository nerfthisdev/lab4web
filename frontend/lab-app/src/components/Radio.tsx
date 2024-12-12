interface Props {
  items: string[];
}

export function Radio({ items }: Props) {
  return (
    <div className="container-sm p-2 m-2">
      {items.map((items) => (
        <div className="form-check form-control" key={items}>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id={`flexradiodefault${items}`}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {`${items}`}
          </label>
        </div>
      ))}
    </div>
  );
}
