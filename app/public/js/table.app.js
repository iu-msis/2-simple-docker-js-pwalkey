table = new Vue({
  el: '#commentapp',
  data:{
    comment: [{
      id: '',
      commentText: ''
    }],
      newComment: {
       id: '',
       commentText: ''
     }
   },
  methods:{
    fetchcomments(){
      fetch('api/comments/')
      .then(response => response.json())
      .then(json => {
        this.comment=json;
        console.log(this.comment);
      });
    },
    createComment(){
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
        this.comment.push(json[0]);
        this.newComment = this.newCommentData();
      });
      console.log("Creating (POSTing)...!");
      console.log(this.newComment);
    },
    newCommentData() {
      return {
        id: '',
        commentText: ''
      }
    }
 },
  created(){
    this.fetchcomments();
  }
});
