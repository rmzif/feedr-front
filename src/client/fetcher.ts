import { BASE_URL } from "@/constants/constants";

const extractBody = (res) => {
    if(res.ok) {
        return res.json();
    } else {
        return res.text().then((text) => {
            console.log("Error", text);
            let errMessage
            try {
                const err = JSON.parse(text);
                errMessage = err.message;
            } catch (error) {

            }
        })
    }
};

export const fetcher = async (
    url,
    body,
    method = 'GET',
    isFormData = false
  ) => {
    const toFormData = (data) => {
      const formData = new FormData();
      for (const name in data) {
        formData.append(name, data[name]);
      }
      return formData;
    };
  
    return fetch(`http://localhost:3001${url}`, {
      method,
      headers: !isFormData
        ? {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        : {},
      body: isFormData ? toFormData(body) : JSON.stringify(body),
    }).then((res) => {
      return extractBody(res);
    });
  };
