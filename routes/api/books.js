const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router
     .route("/")

     .post(booksController.create)
     .get(booksController.findAll)

     .put(booksController.update);
router.route("/:id").delete(booksController.remove);

module.exports = router;
