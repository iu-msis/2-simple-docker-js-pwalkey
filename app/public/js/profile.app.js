var app = new Vue ({
  el: '#userProfile',
  data: {
    userName: 'John Doe',
    userEmail: 'jdoe@iu.edu',
    userImgLarge: ' ',
    userImgthumb: ' ',
    userDOB: '',
    userAge: '',
    userCountry: ''
  },
  created() {
    this.fetchuser();
    console.log('this vue app has been created!');
  },
  methods: {
    fetchuser: function (){
      fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(data => {
        var userData = data.results[0];
        console.log(userData);
        this.userName = userData.name.first + " " + userData.name.last;
        this.userEmail = userData.email;
        this.userImgLarge = userData.picture.large;
        this.userImgthumb = userData.picture.thumbnail;
        this.userDOB = userData.dob.date.slice(0,10);
        this.userAge = userData.dob.age;
        this.userCountry = userData.location.country;
      })
    }
  }
})
