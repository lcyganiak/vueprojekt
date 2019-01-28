<template >
  <div>
    <input
      type="text"
      class="form-control"
      style="display: none"
      v-model="bookEditor.author"
      placeholder="Autor"
    >
    <input
      type="text"
      style="display: none"
      class="form-control"
      v-model="bookEditor.title"
      placeholder="Tytuł"
    >
    <input
      type="text"
      style="display: none"
      class="form-control"
      v-model="bookEditor.description"
      placeholder="Opis"
    >

    <v-container>
      <v-layout row wrap justify-space-around>
        <v-flex xs12 sm5>
          <!--             edit author start                                 -->
          <v-card>
            <v-card-text class="pt-4 mb-2 hightCard" @input="handleAuthor($event)">
              <div class="font-weight-light grey--text title mb-2">Autor:</div>
              <div
                contenteditable="true"
                class="title font-weight-light orange--text mb-2"
                style="word-wrap: break-word"
                v-html="bookEditor.contenteditableAuthor"
              ></div>

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
            </v-card-text>
          </v-card>
        </v-flex>

        <!--             edit author end                                 -->
        <v-flex xs12 sm6>
          <!--             edit title start                                 -->
          <v-card>
            <v-card-text class="pt-4 mb-2 hightCard" @input="handleTitle($event)">
              <div class="font-weight-light grey--text title mb-2">Tytuł Ksiązki</div>
              <div
                contenteditable="true"
                class="title font-weight-light orange--text mb-2"
                style="word-wrap: break-word"
                v-html="bookEditor.contenteditableTitle"
              ></div>

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
            </v-card-text>
          </v-card>
          <!--             edit title end                                 -->
        </v-flex>
        <!--             edit description start
        -->
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-text small class="pt-4 mb-2" @input="handleDescription($event)">
              <div class="font-weight-light grey--text title mb-2">Opis</div>
              <div
                contenteditable="true"
                class="title font-weight-light orange--text mb-2"
                style="word-wrap: break-word font-size: 12px"
                v-html="bookEditor.contenteditableDescription"
              ></div>

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
            </v-card-text>
          </v-card>
        </v-flex>
        <!--             edit description end                                 -->
      </v-layout>
      <div class="text-xs-center">
        <v-rating v-model="bookEditor.rating"></v-rating>
      </div>
    </v-container>
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
        id: this.$store.state.bookOne.id,
        author: this.$store.state.bookOne.author,
        description: this.$store.state.bookOne.description,
        title: this.$store.state.bookOne.title,
        rating: +this.$store.state.bookOne.rating,
        contenteditableDescription: this.$store.state.bookOne.description,
        contenteditableTitle: this.$store.state.bookOne.title,
        contenteditableAuthor: this.$store.state.bookOne.author
      }
    };
  },
  computed: {},

  watch: {},

  methods: {
    ...mapActions(["bold", "italic", "underline", "backspace", "editBook"]),

    handleDescription(e) {
      this.bookEditor.description = e.target.innerHTML;
    },
    handleTitle(e) {
      this.bookEditor.title = e.target.innerHTML;
    },
    handleAuthor(e) {
      this.bookEditor.author = e.target.innerHTML;
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
.hightCard {
  min-height: 200px;
}
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

