const filters = [
  "All",
  "Music",
  "Gaming",
  "News",
  "Movies",
  "React",
  "Programming"
];

const FilterButtons = ({ setCategory }) => {
  return (
    <div className="flex gap-3 overflow-x-auto p-4 sticky top-16 bg-black z-40">
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className="bg-zinc-800 hover:bg-white hover:text-black px-5 py-2 rounded-full whitespace-nowrap"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;