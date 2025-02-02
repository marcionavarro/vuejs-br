import { reactive } from "vue";

const state = reactive({
  currrentUser: {}
})

export default state;

export function cleanCurrentUser() {
  state.currrentUser = {}
}

export function setCurrentUser (user) {
  state.currrentUser = user
}

export function setApiKey(apiKey) {
  const currrentUser = {...state.currrentUser, apiKey}
  state.currrentUser = currrentUser
}
