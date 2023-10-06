const Event = ({event}) => {

    const {name,id,image,short_description,price,detailed_description}=event;
  return (
    <div className="pb-20">
      <div className="card  lg:h-60 lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2  ">
          <img className="object-fill rounded-xl lg:h-full lg:w-auto"
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{short_description}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
