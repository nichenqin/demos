class Comment {
    constructor(comment, children) {
        this.comment = comment;
        this.children = children;
    }

    *[Symbol.iterator]() {
        yield this.comment;
        for (let child of this.children) {
            yield* child;
        }
    }
}

const children = [
    new Comment('comment1', []),
    new Comment('comment2', []),
    new Comment('comment3', [])
]

const tree = new Comment('shafa!!!!!!!!', children);

let comments = [];

for (let comment of tree) {
    comments.push(comment);
}

console.log(comments); // [ 'shafa!!!!!!!!', 'comment1', 'comment2', 'comment3' ]
