//index
const Blog = require('../models/blog')

const index = (req, res) => {
    Blog.find()
      .sort({ createdAt: -1 })
      .then((result) => {
        res.render("index", { title: "All blogs", blogs: result });
      })
      .catch((err) => {
        console.log(err);
      });
}

const create =  (req, res) => {
	res.render("create", {
	  title: "Create Blog",
	});
};

const show =  (req, res) => {
  let id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { title: "Blog Details", blog: result });
    })
    .catch((err) => console.log(err));
}


const store = (req, res) => {
	const blog = new Blog(req.body);
	blog
	  .save()
	  .then((ressult) => {
		res.redirect("/");
	  })
	  .catch((e) => console.log(e));
};


const post_delete =  (req, res) => {
	const id = req.params.id;
	Blog.findByIdAndDelete(id)
	  .then((result) => {
		res.json({ redirect: "/" });
	  })
	  .catch((err) => console.log(err));
};



module.exports = {
    index,
    create,
    show,
	store,
    post_delete,
}