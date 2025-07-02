import { useDog } from "../store/dog.store";

const DogList = ({ data }) => {
  const count = useDog(state => state.dog);
  console.log(count);
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {data.map((item, index) => {
        return (
          <div className="col" key={item || index}>
            <div className="card shadow h-100 border-0">
              <img 
                src={item} 
                alt="dog"
                className="card-img-top mx-auto d-block rounded mt-3 mb-2"
                style={{ height: '220px', width: 'auto', objectFit: 'cover', maxWidth: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.10)' }}
              />
              <div className="card-body p-2">
                <h5 className="card-title mb-1 text-center fw-bold">Perro {index + 1}</h5>
                <div className="mb-2 text-center">
                  <span className="badge bg-secondary me-1">Raza</span>
                  <span className="badge bg-info text-dark">Género</span>
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