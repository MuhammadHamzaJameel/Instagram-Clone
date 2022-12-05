import Header from './Header';
function Feed() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-4xl max-auto">
      {/*Sections 1*/}
      <section className ="col-span-2 bg-red-300" >
      <Header/>
      </section>

      {/*Section 2*/}
      <section className ="bg-blue-200">
      </section>
    </div>
  );
}

export default Feed;