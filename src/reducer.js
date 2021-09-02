export const initialState = {
  memes: [
    {
      name: "sanctum007",
      img: "https://i.imgflip.com/5ldeyb.jpg",
      avatar:
        "https://i.pinimg.com/736x/ef/de/78/efde78cc09aeece4b344c689b6e84ead.jpg",
      caption: "CPOP",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MEME":
      return {
        ...state,
        memes: [...state.memes, action.meme],
      };

    default:
      return state;
  }
};

export default reducer;
