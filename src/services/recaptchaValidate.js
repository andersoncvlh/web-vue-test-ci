import axios from "axios";

export default {
  validate(params) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://localhost:9092/api/v1/recaptcha/validate?responseCaptcha=${params.Response}`
        )
        .then((response) => {
          if (response.data.hasErrors) {
            reject(response.data.message);
          } else {
            resolve(response.data);
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-prototype-builtins
          if (error.response.data.hasOwnProperty("hasErrors")) {
            reject(error.response.data.message);
          } else {
            reject(error.message);
          }
        });
    });
  },
};
