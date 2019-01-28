<template>
  <div>
    <v-form ref="form" lazy-validation>
      <v-text-field v-model="bookAdd.title" label="Tytuł" required style="display: none"></v-text-field>
      <v-text-field v-model="bookAdd.author" label="Autor" required style="display: none"></v-text-field>
      <v-text-field v-model="bookAdd.description" label="Opis" required style="display: none"></v-text-field>
    </v-form>
    <v-container>
      <v-layout row wrap justify-space-around>
        <v-flex xs12 sm5>
          <!--             add author start                                 -->
          <v-card>
            <v-card-text class="pt-4 mb-2 hightCard" @input="handleAuthor($event)">
              <div class="font-weight-light grey--text title mb-2">Autor:</div>
              <div
                contenteditable="true"
                class="title font-weight-light orange--text mb-2"
                style="word-wrap: break-word"
              >{{contenteditableAuthor}}</div>
            </v-card-text>
            <v-btn small color="primary" class="white--text" fab @click="bold()">
              <i class="fas fa-bold"></i>
            </v-btn>
            <v-btn small color="primary" class="white--text" fab @click="italic()">
              <i class="fas fa-italic"></i>
            </v-btn>
            <v-btn small color="primary" class="white--text" fab @click="underline()">
              <i class="fas fa-underline"></i>
            </v-btn>
            <v-btn small color="primary" class="white--text" fab @click="backspace()">
              <i class="fas fa-backspace"></i>
            </v-btn>
          </v-card>
        </v-flex>

        <!--             edit author end                                 -->
        <!--             edit title start                                 -->
        <v-flex xs12 sm6>
          <v-card>
            <v-card-text class="pt-4 mb-2 hightCard" @input="handleTitle($event)">
              <div class="font-weight-light grey--text title mb-2">Tytuł Ksiązki</div>
              <div
                contenteditable="true"
                class="title font-weight-light orange--text mb-2"
                style="word-wrap: break-word"
              >Tytuł Ksiązki</div>
            </v-card-text>
            <v-btn small color="primary" class="white--text" fab @click="bold()">
              <i class="fas fa-bold"></i>
            </v-btn>
            <v-btn small color="primary" class="white--text" fab @click="italic()">
              <i class="fas fa-italic"></i>
            </v-btn>
            <v-btn small color="primary" class="white--text" fab @click="underline()">
              <i class="fas fa-underline"></i>
            </v-btn>
            <v-btn small color="primary" class="white--text" fab @click="backspace()">
              <i class="fas fa-backspace"></i>
            </v-btn>
          </v-card>
        </v-flex>
        <!--             edit title end                                 -->
        <!--             edit description start
        -->
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-text small class="pt-4 mb-2 descriptionText" @input="handleDescription($event)">
              <div class="font-weight-light grey--text title mb-2">Opis</div>
              <div
                contenteditable="true"
                class="title font-weight-light orange--text mb-2"
                style="word-wrap: break-word font-size: 12px"
              >Opis Ksiązki</div>
            </v-card-text>
            <v-btn small color="primary" class="white--text" fab @click="bold()">
              <i class="fas fa-bold"></i>
            </v-btn>
            <v-btn small color="primary" class="white--text" fab @click="italic()">
              <i class="fas fa-italic"></i>
            </v-btn>
            <v-btn small color="primary" class="white--text" fab @click="underline()">
              <i class="fas fa-underline"></i>
            </v-btn>
            <v-btn small color="primary" class="white--text" fab @click="backspace()">
              <i class="fas fa-backspace"></i>
            </v-btn>
          </v-card>
        </v-flex>
      </v-layout>
      <!--             edit description end                                 -->
      <v-container>
        <v-layout row wrap justify-space-around>
          <v-flex xs12 sm4>
            <v-card>
              <v-card-text small class="pt-4 mb-2">
                <div class="font-weight-light grey--text title mb-2">Ocena Ksiązki</div>
                <v-rating v-model="bookAdd.rating "></v-rating>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card>
              <v-card-text small class="pt-4 mb-2">
                <div class="font-weight-light grey--text title mb-2">Gatunek ksiązki</div>
                <v-select :items="valueTypeBook" v-model="bookAdd.typeBook"></v-select>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <div class="text-xs-center"></div>
    </v-container>
    <button class="btn btn-success" @click=" addbook(bookAdd)">Dodaj</button>

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
        author: "Autor Ksiązki",
        description: "Opis Ksiązki",
        title: "Tytuł Ksiązki",
        rating: this.rating,
        snackbar: false,
        typeBook: this.typeBook,
        dialog: true
      },
      contenteditableAuthor: "Autor Ksiązki",

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
  mounted() {},
  methods: {
    snackbarMetod() {
      this.snackbar = false;
      this.$router.push("/books");
    },
    ...mapActions(["bold", "italic", "underline", "backspace", "addbook"]),
    handleAuthor(e) {
      this.bookAdd.author = e.target.innerHTML;
    },
    handleDescription(e) {
      this.bookAdd.description = e.target.innerHTML;
    },
    handleTitle(e) {
      this.bookAdd.title = e.target.innerHTML;
    }
  }
};
</script>


<style scoped>
.hightCard {
  min-height: 150px;
}
.descriptionText {
  min-height: 300px;
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

