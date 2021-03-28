const FORM_INPUT = 'FORM_INPUT';

const initialState = {
  form: []
};

const travelerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let { form } = state
  switch (type) {
    case FORM_INPUT:
      form = [...form, {[payload.name]: payload.value} ];
      return {
        ...state,
        form,
      }
    case 'FAIL':
      return {
        ...state,
      }
    default:
      return {
        ...state,
      }
  }
}

export default travelerReducer;
