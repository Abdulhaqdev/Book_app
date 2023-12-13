const getFormValues = (form) => {
  const values = {};
  const formElement = document.querySelector(`.${form}`);

  const formData = new FormData(formElement);

  for (let [key, value] of formData) {
    Object.assign(values, { [key]: value });
  }

  return values;
};

export default getFormValues;
