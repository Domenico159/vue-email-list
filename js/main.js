
const main = new Vue({
    el:'#app',
    data:{

        mail:[],
        statoLoading:false,
        completed:false,

    },
    methods:{

        generated(){

            this.mail = []

            this.completed = false
        
            this.statoLoading = true

            let count = 0;

           let cont = setInterval(() => {
                
              this.getEmail();
                count++

                if(count === 10){
                    setTimeout(() => {
                        clearInterval(cont)
                    this.statoLoading = false
                    this.completed = true

                    console.log(this.mail);
                    },500);

                }

            },800);
            
           

        },
        getEmail(){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (result) =>{
              // handle success
              return  this.mail.push(result.data.response)
            })
            .catch( (error)=> {
              // handle error
              return console.log(error);
            })

        }
    },
});