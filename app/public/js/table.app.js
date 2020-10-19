waitingApp = new Vue({
  el: '#randomUsersId',
  data:{
    users: [{
      firstName: '',
      lastName: '',
    userId: ''
      }]
  },
  methods:{
    fetchUser(){
      fetch('api/comments/')
      .then(response => response.json())
      .then(json => {
        this.users=json;
        console.log(this.users);
      });
    }
  },
  created(){
    this.fetchUser();
  }
});
