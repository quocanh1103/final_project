const initialState = {
	mangDonHangChoDuyet: [],
};

export const donHangReducer = (state = initialState, action) => {
	switch (action.type) {
		case "":
			return { ...state };
		default:
			return state;
	}
};
