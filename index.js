import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema.js';
import db from './_db.js'

const resolvers ={
    Query :{
        games (){
            return db.games
        },
        authors(){
            return db.authors
        },
        reviews(){
            return db.reviews
        },
        review (parents,args,content){
            return db.reviews.find((review)=>review.id === args.id)
        },

        game (parents,args,content){
            return db.games.find((review)=>review.id === args.id)
        },
        author (parents,args,content){
            return db.authors.find((review)=>review.id === args.id)
        },
    },
    Game:{
        reviews(parent){
            return db.reviews.filter((r)=>r.game_id === parent.id)
        }
    },

    Author:{
        reviews(parent){
            return db.reviews.filter((r)=>r.author_id ===parent.id)
        }
    },
    Review: {
        game(parent) {
            return db.games.find((game) => game.id === parent.game_id);
        },
        author(parent) {
            return db.authors.find((author) => author.id === parent.author_id);
        }
    },
    Mutation:{
        deleteGame(parent,args){
            db.games=db.games.filter((game)=>game.id !==args.id)
            return db.games
        },

        addGame(parent,args){
            let game={
                ...args.game,
                id:Math.floor(Math.random()*10000).toString()
            }
            db.games.push(game);
            return game
        },
        updateGame(parent,args){
            db.games= db.games.map((g)=>{
                if(g.id===args.id){
                    return {...g,...args.edits}
                }
                return g;
            })

            return db.games.find((g)=>g.id===args.id)
        }
    }

}

// server setup
const server=new ApolloServer({
// typedefs -- definitions of types of data game
typeDefs,
// resolvers
resolvers
})

const {url}=await startStandaloneServer(server,{
    listen:{port:4000}
})

console.log(`server reat at port`,4000)