const NoResultFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="https://assets.fyers.in/images/global-header/empty-product-list.svg"
        alt="empty-product-list"
        className="mx-auto"
      />
      <h5 className="mt-4 text-[#2a394e] text-xl font-bold">
        No result available!
      </h5>
    </div>
  );
};

export default NoResultFound;
