<template>
  <div class="col-sm-6 col-md-12 addBook">
    <input type="text" class="form-control" v-model="author" placeholder="Autor">
    <input type="text" class="form-control" v-model="title" placeholder="Tytuł">
    <input type="text" class="form-control" v-model="description" placeholder="Opis">
    <legend>Rodzaj Ksiązki</legend>
    <select class="form-control form-control-lg" v-model="typeBook">
      <option
        v-for="valType in valueTypeBook"
        v-bind:key="valType.valueType "
        :value="valType.valueType"
      >{{valType.descriptionType}}</option>
    </select>

    <div class="contenteditableSec">
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
    </div>
    <button class="btn btn-success" @click=" addbook()">Dodaj</button>
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

export default {
  data() {
    return {
      author: "",
      title: "",
      description: "",
      typeBook: "",
      valueTypeBook: [
        { descriptionType: "Powieści Historyczna", valueType: "historyk" },
        { descriptionType: "Powieści Sci-Fi", valueType: "sciFi" },
        { descriptionType: "Edukacyjna", valueType: "educational" },
        { descriptionType: "Powieści dla Dzieci", valueType: "childrenNovel" }
      ],
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
    addbook() {
      axios
        .post("api/addbook", {
          title: this.title,
          author: this.author,
          description: this.description,
          typeBook: this.typeBook
        })
        .then(
          res => {
            this.title = "";
            this.author = "";
            this.description = "";
            this.description = "";

            this.snackbar = true;
          },
          err => {
            console.log(err);
          }
        );
    },

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

