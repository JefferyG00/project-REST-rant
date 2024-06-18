const React = require('react')
const Def = require('./default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <div>
                    <img src={data.place.pic} alt={data.place.name} />
                    <p className="text-center">
                        Located in {data.place.city}, {data.place.state}
                    </p>
                </div>
                <div>
                    <h2>Rating</h2>
                    <p>Currently unrated</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                <a href="/places">
                    <button className="btn-primary">Back to Places</button>
                </a>
            </main>
        </Def>
    );
}

module.exports = show

