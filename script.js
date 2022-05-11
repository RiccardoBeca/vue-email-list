/*
Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

*/

const app = new Vue({

  el: "#app",

  data: {
    emails:[],
    totalEmails: 10
  },

  mounted() {
    this.getEmails()
  },
  
  methods: {
    getEmails() {
      for (let i = 0; i < this.totalEmails; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(res => {
          this.emails.push(res.data.response);
          console.log(this.email);
        })
      }
    }
  },
  
})