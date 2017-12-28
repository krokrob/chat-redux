// TODO: add and export your own actions
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';

export function fetchMessages(channel) {
  const promise = fetch(`http://localhost:3000/${channel}/messages`)
    .then(response => response.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
  }
}

export function createMessage(channel, author, content) {
  const url = `http://localhost:3000/${channel}/messages`;
  const body = { author: author, content: content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  }

}

export function selectChannel(channel) {

  return {
    type: SELECT_CHANNEL,
    payload: channel
  }
}
