import routes from "../Trender Documentation.postman_collection.json"

export default function Root() {

    console.log(routes.item);
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <nav>
            {
                routes.item.map((i, idx) => (
                    <p key={idx}>{i.name}</p>
                ))
            }
            </nav>
        </div>
      </>
    );
  }