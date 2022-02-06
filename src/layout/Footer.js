export default function Footer() {
    return (
        <>
            <footer className="footer w-100 bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <span className="text-white text-left">&copy; {new Date().getFullYear()} Copyright ShahNur Software</span>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <h5 className="text-white text-right">
                                Movies App
                            </h5>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}