import { useDog } from "../store/dog.store";

const DogList = ({ data }) => {
  const count = useDog(state => state.dog);
  console.log(count);
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {data.map((item, index) => {
        return (
          <div className="col" key={item || index}>
            <div className="card shadow-sm h-100">
              <img 
                src={item} 
                className="card-img-top mx-auto d-block"
                style={{ height: '220px', width: 'auto', objectFit: 'cover', marginBottom: '10px', maxWidth: '100%' }}
              />
              <div className="card-body p-2">
                <h5 className="card-title mb-1 text-center fw-bold">perro {count}</h5>
                <div className="mb-2 text-center">
                  <span className="badge bg-secondary me-1">raza</span>
                  <span className="badge bg-info text-dark">genero</span>
                </div>
                </div>
              </div>
            </div>
        );
      })}   
    </div>
  );
};

export default DogList;