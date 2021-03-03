export const state = () => ({
  
            datesPostsList: [{title: '15/02'}],
})

export const mutations = {
    add(state, text) {
      state.datesPostsList.push({
        text
      })
    }
}