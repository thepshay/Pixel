# Pixel

Pixel is a clone of the popular PC gaming marketplace, Steam.

**[Live Deployment](https://pixel-made.herokuapp.com/#/)**

## Features
### User Authentication 
Users are able to login new account and signup to existing accounts. 

![user-auth](https://user-images.githubusercontent.com/16026728/155015588-a2171248-776c-46fb-b245-184c2e225390.gif)
## Carousel
The carousel is used to display the games featured on the home page. The carousel takes in an array of games then checks if the 
state index matches the index of the game's index. If it does, the carousel item is given a class of active which gives it a `display: block`
else all other carousel items have `display: none`. 
```js script
{games.map((game, index) => {
  return (
    <div key={game.id} className={index === this.state.currPos ? `${itemClassName} active` : `${itemClassName}`}>
      <Link to={source === 'home' ? `/game/${game.id}` : `/game/${game.id}`}>
        <CarouselGameItem key={game.id} game={game}/>
      </Link>
    </div> 
  )
})}
```

![carousel](https://user-images.githubusercontent.com/16026728/155015643-276170a0-6510-4ca8-890e-7b7dbb123115.gif)
### Cart 
Users are able to add games to cart and purchases said items inside of cart. Purchased games will display on user's library. 
![cart](https://user-images.githubusercontent.com/16026728/155015714-34260de6-e6e7-4e9f-9262-d6f0912e2ccc.gif)
### Reviews 
Users are able to leave review on games they have purchased. Users are then able to edit and delete their own reviews. 
![review](https://user-images.githubusercontent.com/16026728/155015746-db91a41f-08b3-4f82-a048-b4a4302d4da8.gif)

## Technology
Pixel was built using
- React
  - Used to structure the frontend
- Redux
  - Library used to manage state data for react components
- Ruby on Rails
  - Backend used to manage routing and fetch data from databases
- PostgreSQL  
  - Databased used to store data and manage relations
- JBuilder
  - Used to structure fetched data into JSON form
- HTML5 / CSS3 / SCSS 
  - Used to organized styling for React components 
- Amazon S3
  - Cloud storage for hosting site images. 
- Heroku
  - Cloud platform used to host Pixel site
