type Props = {
  selectedPrice?: number;
  onChange: (value?: number) => void;
};

const PriceFilter = ({ selectedPrice, onChange }: Props) => {
  return (
    <div>
      <h4 className="text-md font-semibold mb-2">Max Price</h4>
      <input
        type="number"
        placeholder="Max Price"
        min={0}
        value={selectedPrice}
        step={100}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="rounded border border-gray w-full p-1"
      />
    </div>
  );
};

export default PriceFilter;
