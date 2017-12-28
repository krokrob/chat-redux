import { FETCH_MESSAGES } from '../actions/index';
import { CREATE_MESSAGE } from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages.map((message) => {
        message.createdAt = message.created_at;
        return message;
      });
    case CREATE_MESSAGE:
      let messages = Array.from(state);
      let message = {
        author: action.payload.author,
        content: action.payload.content,
        createdAt: action.payload.created_at
      };
      messages.push(message);
      return messages;
    default:
      return state;
  }
}
