"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var authors = [
    { id: 1, firstName: 'Tom', lastName: 'Coleman' },
    { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
];
var posts = [
    { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
    { id: 2, authorId: 2, title: 'GraphQL Rocks', votes: 3 },
    { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
];
exports.resolvers = {
    Query: {
        posts: function () {
            return posts;
        },
        author: function (_, _a) {
            var id = _a.id;
            return lodash_1.find(authors, { id: id });
        }
    },
    Mutation: {
        upvotePost: function (_, _a) {
            var postId = _a.postId;
            var post = lodash_1.find(posts, { id: postId });
            if (!post) {
                throw new Error("Couldn't find post with id " + postId);
            }
            post.votes += 1;
            return post;
        }
    },
    Author: {
        posts: function (author) {
            return lodash_1.filter(posts, { authorId: author.id });
        }
    },
    Post: {
        author: function (post) {
            return lodash_1.find(authors, { id: post.authorId });
        }
    }
};
