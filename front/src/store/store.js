import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from "../router/index"


Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    books: [{
      id: 1,
      title: "Ogniem i Mieczem",
      author: "Henryk Siekiewicz",
      description: "Wybucha powstanie Kozaków pod wodzą Chmielnickiego. Butny przywódca odnosi kolejne zwycięstwa. Jan Skrzetuski z niepokojem śledzi rozwój wypadków. Bardzo niepokoi się losem Heleny Kurcewiczówny, swojej ukochanej, ale przedkłada patriotyczny"
    },
    {
      id: 2,
      title: "Potop",
      author: "Henryk Siekiewicz",
      description: "Rok 1655, w granice Rzeczpospolitej wkracza olbrzymia armia szwedzka. Polacy zapamiętają ten najazd jako potop szwedzki. Mnożą się zdrady - ulega szlachta pospolitego ruszenia pod Ujściem, Janusz Radziwiłł poddaje Litwę Szwedom."
    }, {
      id: 3,
      title: "Pan Wołodyjowski",
      author: "Henryk Siekiewicz",
      description: "an Wołodyjowski jest trzecią powieścią historyczną wchodzącą w skład Trylogii Henryka Sienkiewicza, obok Ogniem i mieczem i Potopu. Akcja rozgrywa się w okresie wojen z Turcją w latach 1668?1673. Dramatyczne wydarzenia historyczne z dziej"
    }

    ],
    bookOne: [],
    dialog: true,
    snackbar: false,
  },

  actions: {
    books(context, payload) {
      axios.get("api/books").then(result => {

        this.payload = result.data;
        context.commit('booksGet');

      });

    },
    delteBook(context, payload) {
      axios.delete(`/api/book/${payload}`).then(res => {

        router.push('/books')

      });

    },
    dialogMes() {
      this.dialog = false
    },

    editBook(context, payload) {
      console.log(payload.title)

      axios
        .put(`/api/book/${payload.id}`, {

          author: payload.author,
          title: payload.title,
          description: payload.description,
          rating: payload.rating

        })

        .then(res => {
          console.log("koniec")
          router.push('/books')

        })

    },
    addbook(context, payload) {

      axios
        .post("/api/addbook", {
          title: payload.title,
          author: payload.author,
          description: payload.description,
          rating: payload.rating,
          typeBook: payload.typeBook,

        })
        .then(
          res => {


            payload.title = '';
            payload.author = "";
            payload.description = "";
            payload.typeBook = ""
            payload.rating = 0;
            payload.snackbar = true;
            context.commit('dialog')



            router.push('/books')
          },

          err => {
            console.log(err);
          }
        );


    },


    bold() {
      document.execCommand("bold", false, null);
    },
    italic() {
      document.execCommand("italic", false, null);
    },
    underline() {
      document.execCommand("underline", false, null);
    },
    backspace() {
      document.execCommand("delete", false, null);
    },
    getThisBook(context, payload) {

      axios.get(`api/books/${payload}`)

        .then(res => {
          this.payload = res.data;
          context.commit("oneBook");

        })
    },
  },
  mutations: {
    booksGet(state, payload) {
      state.books = this.payload;
    },
    dialog(state) {
      console.log(state.dialog)
      state.dialog = false
      console.log(state.dialog)

    },

    oneBook(state, payload) {
      //  console.log(this.payload) wyświetla poprawnie
      state.bookOne = this.payload
      // console.log(state.bookOne.id)
      router.push(`/editbook/${state.bookOne.id}`)

    },


  }
})


