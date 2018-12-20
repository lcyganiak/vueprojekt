import Api from './service'

export default {
  // eslint-disable-next-line space-before-function-paren
  getbooks(book) {
    return Api().get('books', book)
  }
}
