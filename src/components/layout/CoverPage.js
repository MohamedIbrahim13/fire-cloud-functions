import React from 'react'

const CoverPage = () => {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <main role="main" className="cover">
                <h2 className="cover-heading">Cover your page.</h2>
                <samp>Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</samp>
                <p className="lead">
                    <a href="/join-us" className="btn btn-lg btn-secondary mr-2">Join us</a>
                    <a href="/log-in" className="btn btn-lg btn-secondary ml-2">Login</a>
                </p>
            </main>
       </div>
    )
}

export default CoverPage
