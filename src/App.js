import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>

 <nav>
    <Button
        buttonType="button"
        isDisabled={false}
    > to the collection </Button>

     <Button
         buttonType="button"
         isDisabled={false}
     > shop all bags </Button>

     <Button
         buttonType="button"
         isDisabled={true}
     > pre-orders </Button>



 </nav>

          <main>
              <Product
              label="Best seller"
              image={bag_1}
              name="The handy bag"
              price="€400,-"
              />

              <Product
                  label="Best seller"
                  image={bag_2}
                  name="The stylish bag"
                  price="€250,-"
              />

              <Product
                  label="New collection"
                  image={bag_3}
                  name="The simple bag"
                  price="€300,-"
              />

              <Product
                  label="New collection"
                  image={bag_4}
                  name="The trendy bag"
                  price="€150,-"
              />

          </main>

          <footer>
              <Tile>
                  <h2>The brand</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto at atque blanditiis dicta error eum ex minus tempore voluptatibus.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore dolorum impedit ipsa ipsum neque nihil quo, unde? Laudantium, quisquam!</p>
              </Tile>
              <Tile>
                  <img src={brand} alt="The brand"/>
              </Tile>
              <Tile>
                  <img src={our_story} alt="Our story" />
              </Tile>
              <Tile>
                  <h2>Our story</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto autem delectus ea expedita, iure libero non quam qui sed sunt vero voluptates voluptatibus, voluptatum.</p>
              </Tile>
          </footer>

      </>
  );
}

export default App;



