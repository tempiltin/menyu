import React from 'react'
import notfound404 from "./images/404notfound.gif"
const Error = () => {
  return (
    <main>
        <div className="container card " >
            <div className="row">
                <div className="col-12">
                    <div className="notfound">
                    <img src={notfound404} alt="" />
                    </div>
                    <h1 className="h404">NOT FOUND</h1>
                    <h1 className="h404">404</h1>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Error