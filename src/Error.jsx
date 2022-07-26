import React from 'react'
import { Link } from 'react-router-dom'
import notfound404 from "./images/404notfound.gif"
const Error = () => {
  return (
    <main>
        <div className="container card " >
            <div className="row pd0">
                <div className="col-12 pd0">
                    <div className="notfound">
                    <img src={notfound404} alt="" />
                    </div>
                    <h1 className="h404">Topilmadi !</h1>
                    <h1 className="h404">404</h1>
                    <h1><Link to={'/'}>Bosh sahifaga qaytish</Link> </h1>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Error