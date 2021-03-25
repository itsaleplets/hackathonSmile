const FORM_INPUT = 'FORM_INPUT';

export const travelerAction = (input) => async (dispatch) => {
  try {
    console.log(input);
    dispatch({ type: FORM_INPUT, payload: input });
  } catch (err) {
    dispatch({ type: 'FAIL' });
  }
}