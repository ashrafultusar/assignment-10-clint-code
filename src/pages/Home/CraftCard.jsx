const CraftCard = ({ craft }) => {
  // console.log(craft);
  const { photo, subcategoryName, stockStatus, itemName } = craft;

  return (
    <div>
      <div className="card h-[420px] bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{itemName}</h2>
          <h2 className="text-sm font-semibold">{subcategoryName}</h2>
          <p>{stockStatus}</p>
          <div className="card-actions ">
            <button className="btn w-full bg-green-500">View Detiels</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftCard;
