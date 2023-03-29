const router = require("express").Router(),
userController = require("../controllers/userController");

router.get("/", function(req, res){
    userController.read(req,res)
});
router.post("/", function(req, res){
    userController.create(req,res)
});
router.put("/:id", function(req, res){
    userController.update(req,res)
});
router.delete("/:id/delete", function(req, res){
    userController.delete(req,res)
});

router.post("/login", function(req, res){
    userController.login(req,res)
});
router.post("/create_user", function(req, res){
    userController.createUser(req,res)
});
router.post("/get_user_info", function(req, res){
    userController.getUserInfo(req,res)
});
router.post("/delete_user", function(req, res){
    userController.deleteUser(req,res)
});
router.get("/test/user/create", function(req, res){
    userController.testUserCreate(req,res)
    console.log("userController.testUser")
})
module.exports = router;