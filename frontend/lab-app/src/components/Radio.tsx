interface Props {
  items: string[];
}

export default function Radio({ items }: Props) {
  items.map((items) => (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      />
      <label className="form-check-label" htmlFor="flexRadioDefault1">
        {items}
      </label>
    </div>
  ));

  return <>{items}</>;
}
