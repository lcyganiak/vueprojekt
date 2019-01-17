import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

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
    bookOne: []
  },
  actions: {
    books(context, payload) {
      axios.get("api/books").then(result => {
        this.payload = result.data;
        context.commit('booksGet');
      });
    },
    delteBook(context, payload) {
      axios.delete(`api/book/${payload}`).then(res => {

        store.dispatch("books");
      });

    }


  },
  mutations: {
    booksGet(state, payload) {
      state.books = this.payload;
      console.log(state.books)
    },
    oneBook(state, payload) {
      state.bookOne = this.payload
    }
  }
})


