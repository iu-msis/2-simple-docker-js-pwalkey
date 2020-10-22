var table = new Vue({
  el: '#commentTable',
  data:{
    comments: []
      },
    create(){
      fetch('api/comments/index.php')
      .then(response => response.json())
      .then(json => {
        this.comments=json;
        console.log(this.newComment)}
      );
    }
  })
var form = new Vue ({
  el: '#CommentForm',
  data: {
    newComment: {
      id: '',
      commentText: ''
    }
  },
  methods: {
    createComments(){
      fetch('api/comments/post.php', {
        method: 'POST',
        body: JSON.stringify(this.newComment),
        headers: {
        "Content-Type": "application/json; charset=utf-8"
        }
  })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.Comments.push(json[0]);
          this.newComment = this.newCommentData();
        });
        console.log("Creating (POSTing)...!");
        console.log(this.newComment);
        },
        newCommentData() {
      return {
        id: '',
        commentText: ''
      };
    }
  }
})
