<template>
  <div class="col-sm-6 col-md-12">
    <input type="text" class="form-control" v-model="author" placeholder="Autor">
    <input type="text" class="form-control" v-model="title" placeholder="Tytuł">
    <input type="text" class="form-control" v-model="description" placeholder="Opis">

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
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      author: "",
      title: "",
      description: ""
    };
  },

  watch: {},
  mounted() {
    this.contenteditable();
  },
  methods: {
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
          description: this.description
        })
        .then(
          res => {
            console.log("Dodana");
            this.title = "";
            this.author = "";
            this.description = "";
          },
          err => {
            console.log(err);
          }
        );
    },

    contenteditable() {
      let a = document.getElementsByClassName("contenteditable");
      let b = a.innerHTML;

      console.log(document.getElementsByClassName("contenteditable"));
      console.log(b);
    }
  }
};
</script>


<style scoped>
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

