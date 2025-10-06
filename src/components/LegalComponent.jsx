const LegalComponent = ({ clauses }) => {
  return (
    <div className="my-7 space-y-2">
      {clauses.map((clause, index) => (
        <div key={index} className="flex flex-col gap-3">
          {/* Title */}
          <h3 className="text-[#000000] font-bold">
            {clause.title}
          </h3>

          {/* Text */}
          <ul>
            {clause.items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-[#000000] leading-relaxed text-[0.9rem] list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LegalComponent;