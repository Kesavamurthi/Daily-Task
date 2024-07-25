import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js"

import db from './_db.js'

const resolvers = {
    
    Query : {
        games() {
            return db.games
        },
        reviews() {
            return db.reviews
        },
        authors(){
            return db.authors
        },
        review(_, args){
            return db.reviews.find((review) => review.id === args.id)
        },
        game(_, argso){
            return db.games.find((game) => game.id === argso.id)
        },
        author(_, argso){
            return db.authors.find((author) => author.id === argso.id)
        }
    },
    
    Game:{
        reviews(parent){
            return db.reviews.filter((f) => f.game_id === parent.id)
        }
    },
    
    Mutation:{
        deleteGame(_,args){
            db.games = db.games.filter((g) => g.id !== args.id)
            return db.games
        },
        addGame(_,args){
            let game = {
                ...args.game,
                id: Math.floor(Math.random() * 1000).toString()
            }
            db.games.push(game)
            return db.games
        }
    }
}

const server = new ApolloServer({
 typeDefs,resolvers
})

const {url} = await startStandaloneServer(server, {
    listen: { port: 4000}
})

console.log('server ready at port', 4000);