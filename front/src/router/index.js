import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Books from '@/components/books/Books'
import Book from '@/components/books/Book'
import AddBook from '@/components/books/AddBook'
import EditBook from '@/components/books/EditBook'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/addbook',
      name: 'AddBook',
      component: AddBook
    },
    {
      path: '/editbook/:id',
      name: 'EditBook',
      component: EditBook
    },

  ]
})
