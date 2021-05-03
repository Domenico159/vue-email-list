
const main = new Vue({
    el:'#app',
    data:{

        mail:[],
        statoLoading:false,
        completed:false,

    },
    methods:{

        generated(){

            this.getEmail()
            this.mail = []

            this.completed = false
        
            this.statoLoading = true

            let count = 0;

           let cont = setInterval(() => {
                
                this.mail.push(this.getEmail())
                count++

                if(count === 10){
                    clearInterval(cont)
                    this.statoLoading = false
                    this.completed = true

                    console.log(this.mail);

                }

            },500);
            
           

        },
        getEmail(){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response) {
              // handle success
              return console.log(response.data.response);;
            })
            .catch(function (error) {
              // handle error
              return console.log(error);
            })

        }
    },
});