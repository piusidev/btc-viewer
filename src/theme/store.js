const store = {
  state: {
    theme: 'dark'
  },
  changeTheme() {
    this.state.theme == 'dark' ? this.state.theme = 'light' : this.state.theme = 'dark'
  }
}

export default store