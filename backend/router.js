const Router = require("express");

const mongodbcontrol = require("./mongodbcontrol");
const router = Router();
router.use(Router.json());
router.use(Router.urlencoded({ extended: true }));


router.get("/",mongodbcontrol.gettodo);
router.post("/save", mongodbcontrol.savetodos);
router.post("/delete",mongodbcontrol.deletetodos);
router.post("/update",mongodbcontrol.updatetodo);
module.exports = router;
