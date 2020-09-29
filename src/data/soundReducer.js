export const soundInitialState = {
    audio: null,
    playing: false,
    volume: 0.2,
};

const soundReducer = (state, action) => {
    console.log(state.volume)
    switch (action.type) {
        case 'SET_AUDIO':
            return {
                ...state,
                audio: action.audio
            };
        case 'SET_PLAYING':
            console.log(soundInitialState);

            if(!action.playing) {
                if(state.audio) {
                    state.audio.pause();
                }
            } else {
                if(state.audio) {
                    state.audio.play();
                }
            }
            return {
                ...state,
                playing: action.playing
            };
        case 'SET_VOLUME':

            if(state.audio) {
                state.audio.volume = action.volume;
            }
            return {
                ...state,
                volume: action.volume,
            };
        default:
            return state;
    }
};

export default soundReducer;