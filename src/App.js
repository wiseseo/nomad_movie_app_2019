import React from 'react';
import PropTypes from 'prop-types';

const animalILike = [
  {
    id:1,
    name:"cat",
    image : "https://images.mypetlife.co.kr/content/uploads/2019/06/06202021/adorable-animal-baby-416088-1024x774.jpg",
    
  },
  {
    id:2,
    name:"dog",
    image:"https://images.mypetlife.co.kr/content/uploads/2019/08/20141553/shutterstock_119617003.jpg",
    rating: 2.8
  },
  {
    id:3,
    name:"dolphin",
    image:"https://i.ytimg.com/vi/mSoUh6es0j4/maxresdefault.jpg",
    rating: 2.5
  }
]

Animal.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function Animal({name , picture, rating}) {
  //console.log(props);
  //console.log(props.fav);
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/3</h4>
    <img src={picture} alt={name}/>
  </div>
  
}

/*
function renderAnimal(animal) {
  console.log(animal);
  return <Animal name={animal.name} picture={animal.image}/>
}*/

function App() {
  return (
    <div>
      {animalILike.map(
        animal => (
         <Animal 
         key={animal.id} 
         name={animal.name}
         picture={animal.image} 
         rating={animal.rating}/>
        )
      )}
    </div>
  );
  
}

export default App;
