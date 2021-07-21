const posts = [
{
	title: "Post 1",
	body: "This Page one"
},
{
	title: "Post 2",
	body: "Tis post two"
}
]

// Create ke object post 2 detik
const createPost = (post, callback) =>{
	setTimeout(() => {
		posts.push(post) 
		callback()
	}, 2000)
}

// get post selama 1 detik
const getPosts = () => {
  setTimeout(() => {
    posts.forEach(post => {
      console.log(post)
    })
  }, 1000)
}

const newPost = {
  title: "Post 3",
  body: "This is post three"
}

createPost(newPost, getPosts)
getPosts()