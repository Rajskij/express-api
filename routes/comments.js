const express = require("express");
const router = express.Router();

const comments = require("../data/comments");

router
    .route("/")
    .get((req, res) => comments)
    .post((req, res) => {
        const body = req.body;
        const param = req.params;
        if (body) {
            comments.push({
                id: comments.length + 1,
                userId: param.userId,
                postId: param.postId,
                body: body.text
            });
        } else {
            next(error(400, "Insufficient Data"));
        }
    })


module.export = router;
