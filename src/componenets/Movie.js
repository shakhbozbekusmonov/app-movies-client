export default function Movie(props){
    const {Title, Year, imdbID, Type, Poster} = props;

    return (
        <>
            <div className="col-12 col-md-4 col-lg-4 col-xl-4 my-3">
                <div className="card" key={imdbID}>
                    <img src={Poster} className="w-100" alt="Error"/>
                    <div className="card-body">
                        <h3 className="text-primary">{Title}</h3>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <p className="text-secondary">{Year}</p>
                        <p className="text-secondary">{Type}</p>
                    </div>
                </div>
            </div>
        </>
    )
}