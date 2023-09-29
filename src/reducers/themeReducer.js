// themeReducer.js
const initialState = {
    isDark: false,
  };
  
  export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return {
          ...state,
          isDark: !state.isDark,
        };
      default:
        return state;
    }
  };