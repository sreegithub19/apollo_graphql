var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const applications = `
<!DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1"> <style> body, html { height: 100%; margin: 0; } .content { position: absolute; top: 15%; left:25%; background: rgb(0, 0, 0); /* Fallback color */ background: rgba(0, 0, 0, 0.76); /* Black background with 0.5 opacity */ color: #f1f1f1; width: 50%; padding: 20px; } .bg { /* The image used */ background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRqNquWxQHJAPgugDwzXokAU_dQUXzknUTA&usqp=CAU"); /* Full height */ height: 100%; /* Center and scale the image nicely */ background-position: center; background-repeat: no-repeat; background-size: cover; } table { font-family: arial, sans-serif; border-collapse: collapse; width: 100%; } td, th { border: 1px solid #dddddd; text-align: left; padding: 8px; } div.parent { text-align: center; } ul { display: inline-block; text-align: left; }</style>
    </head> <body> <div class="bg"></div>  <div class="content"> <h1 id="home" 
        style="text-align: center;font-weight: bold;text-decoration: underline;">
            WELCOME TO JAVASCRIPT APPLICATIONS!!</h1> 
   <h3 style="text-align:center;"> Click on any of the below JavaScript apps!</h3>
   <div class="parent"> <ul>
        <li><a href='/calculator'>Calculator</a></li> 
       <li><a href='/maze'>Maze</a></li>
        <li><a href='/tic_tac_toe'>Tic-tac-toe</a></li>
        <li><a href='/clock'>Analogue clock</a></li>
        <li><a href='/hangman'>Hangman</a></li>
        <li><a href='/puzzles'>Estonian puzzles</a></li>
        <li><a href='/sudoku'>Sudoku</a></li>
        <li><a href='/virtual_keyboard'>Virtual keyboard</a></li>
	<li><a href='/solitaire'>Solitaire</a></li>
	<li><a href='/chess'>Chess</a></li>
	<li><a href='/dino'>Dino</a></li>
	<li><a href='/tilt_maze'>Tiled Maze</a></li>
	<li><a href='/codepen/html'>Codepen</a></li>
  <li><a href='/sass_'>Sass</a></li>
   </ul> </div> 
       </div> </body> </html>
  `

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello graphql!';
  },
};

var applications_ = {
  hello: () => {
    return applications;
  },
};



var app = express();


app.get("/applications", (req, res) => {
  res.send(applications);
});


app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.use('/applications_', graphqlHTTP({
  schema: schema,
  rootValue: applications_,
  graphiql: true,
}));


app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');