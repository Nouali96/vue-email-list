const app = new Vue(
    {
        el: '#app',
        data: {
            arrayListaEmail: [],
        },

        mounted() {
            /* genero indirizzi email*/
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')               
                .then((rispostaDelServer) => {
                    this.arrayListaEmail.push (rispostaDelServer.data.response)
                });
            }
        }
    }
)
