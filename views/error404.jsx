const React = require('react')
const Def = require('./places/default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry we can't find this page!</p>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg"
                    alt="error cat"
                    />
                </div>
            </main>
        </Def>
    )
}

module.exports = error404
