<template >
  <div class="col-sm-6 col-md-12 marginTop">
    <input type="text" class="form-control" v-model="bookEditor.author" placeholder="Autor">
    <input type="text" class="form-control" v-model="bookEditor.title" placeholder="Tytuł">
    <input
      type="text"
      class="form-control"
      v-model="bookEditor.description"
      placeholder="Opis"
      style="display: none"
    >
    <div class="text-xs-center">
      <v-rating v-model="bookEditor.rating"></v-rating>
    </div>

    <div class="contenteditableSec" @input="handle($event)" @blur="handleTwo">
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

      <div
        contenteditable="true"
        class="contenteditable"
        id="contenteditable"
        v-html="bookEditor.contenteditable"
      ></div>
    </div>
    <button class="btn btn-success" @click="editBook(bookEditor)">Dodaj</button>
    <app-delete></app-delete>
    <app-edit></app-edit>
  </div>
</template>
<script>
import ButtonDelete from "../button/ButtonDelete";
import EditButton from "../button/EditButton";
import { mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      bookEditor: {
        author: this.$store.state.bookOne.author,
        description: this.$store.state.bookOne.description,
        title: this.$store.state.bookOne.title,
        rating: +this.$store.state.bookOne.rating,
        contenteditable: this.$store.state.bookOne.description,
        id: this.$store.state.bookOne.id
      }
    };
  },
  computed: {},

  watch: {},

  methods: {
    ...mapActions([
      "editBook",
      "bold",
      "italic",
      "underline",
      "backspace",
      "delteBook"
    ]),
    handle(e) {
      // this.description = e.target.innerHTML;
      this.bookEditor.description = e.target.innerHTML;
      // console.log(this.description);
      // console.log(" 0" + this.bookEditor.description);
    },
    handleTwo() {
      // this.description = e.target.innerHTML;
      this.bookEditor.description = e.target.innerHTML;
    }

    // update: function(event) {
    //   console.log(event.target.innerHTML);
    // }
  },
  components: {
    appDelete: ButtonDelete,
    appEdit: EditButton
  }
};
</script>


<style scoped>
.marginTop {
  margin-top: 20px;
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
</style>

