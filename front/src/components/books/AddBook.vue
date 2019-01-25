<template>
  <div class="col-sm-6 col-md-12 addBook">
    <v-form ref="form" lazy-validation>
      <v-text-field v-model="bookAdd.title" label="Tytuł" required></v-text-field>
      <v-text-field v-model="bookAdd.author" label="Autor" required></v-text-field>
      <v-text-field v-model="bookAdd.description" :counter="1000" label="Opis" required></v-text-field>

      <v-layout wrap align-center>
        <v-flex xs12 sm12 d-flex>
          <v-select :items="valueTypeBook" v-model="bookAdd.typeBook" label="Gatunek Ksiązki"></v-select>
        </v-flex>
        <div></div>
      </v-layout>
    </v-form>

    <div class="text-xs-center">
      <v-rating v-model="bookAdd.rating"></v-rating>
    </div>

    <button class="btn btn-success" @click=" addbook(bookAdd)">Dodaj</button>

    <!-- <div class="contenteditableSec">
      <h2 class="h2 text-center">Opis książki</h2>
      <ul style="list-style-type: none">
        <button class="btn btn-primary bold" @click="bold()">
          <i class="fas fa-bold"></i>
        </button>
        <button class="btn btn-primary italic" @click="italic()">
          <i class="fas fa-italic"></i>
        </button>
        <button class="btn btn-primary" @click="underline()">
          <i class="fas fa-underline"></i>
        </button>

        <button class="btn btn-primary" @click="backspace()">
          <i class="fas fa-backspace"></i>
        </button>
      </ul>

      <div contenteditable="true" class="contenteditable">Tekst</div>
    </div>-->
    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{text}}
      <v-btn color="pink" flat @click="snackbarMetod">Close</v-btn>
    </v-snackbar>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      bookAdd: {
        author: this.author,
        description: this.description,
        title: this.title,
        rating: this.rating,
        snackbar: false,
        typeBook: this.typeBook,
        dialog: true
      },
      // author: "",
      // title: "",
      // description: "",
      // typeBook: "",
      // rating: 0,
      valueTypeBook: ["historyczna", "sci-fi", "edukacyjna"],
      snackbar: false,
      y: "top",
      x: null,
      mode: "",
      timeout: 6000,
      text: "Gratulacje dodałeś książkę. "
    };
  },

  watch: {},
  mounted() {
    this.contenteditable();
  },
  methods: {
    snackbarMetod() {
      this.snackbar = false;
      this.$router.push("/books");
    },
    ...mapActions(["bold", "italic", "underline", "backspace", "addbook"]),

    contenteditable() {}
  }
};
</script>


<style scoped>
.addBook {
  margin-top: 30px;
}
.form-control {
  box-shadow: 5px 5px 10px;
  margin-bottom: 4%;
  border-top: 1px solid;
  background-color: whitesmoke;
}
.contenteditableSec {
  box-shadow: 5px 5px 10px;
  width: auto;
  min-height: 16rem;
  margin-bottom: 4%;
}
.contenteditable {
  border-top: 1px solid;
}

button.btn {
  margin: 10px;
}
</style>

