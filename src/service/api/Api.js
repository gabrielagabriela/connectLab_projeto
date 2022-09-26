// import { func } from "prop-types";

export function saveNewUser(formData)  {
  return fetch("https://connectlab.onrender.com/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.email,
      password: formData.password,
      fullName: formData.fullName,
      photoUrl: formData.photoUrl,
      phone: formData.phone,
      userAddress: {
        zipCode: formData.zipCode,
        street: formData.street,
        number: formData.number,
        neighborhood: formData.neighborhood,
        city: formData.city,
        state: formData.state,
        complement: formData.complement,
      },
    }),
  });
};


export function loginIntoFetch(email, password) {
  return fetch('https://connectlab.onrender.com/auth/login' , {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password}),
  });
}; 



export function getUserFetch(token, id) {
  return  fetch('https://connectlab.onrender.com/users/' +id , {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token
    },
  });
};



export function seeUserProfile(id, token) {
  return {
    url: 'https://connectlab.onrender.com/users/' +id,
    more: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    } 
  }
}



export function getDevice(token) {
  return {
    url: "https://connectlab.onrender.com/devices",
    more: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}



export function userAllDevices2(id, token){
  return {
    url: "https://connectlab.onrender.com/userDevices/user/" +id,
    more: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      }
    }
  }
}



export function getLocalFetch(token) {
  return fetch ("https://connectlab.onrender.com/locals", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    }
  } )
}



export function saveDeviceUser(token, body){ 
return {
  url:'https://connectlab.onrender.com/userDevices',
  more: {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  },
}
}



export function isOnFetch(item, token) {
  return fetch("https://connectlab.onrender.com/userDevices/" +item, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      is_on: false,
    })
  })
}


export function getUserDevice (item, token) {
  return {     
  url: "https://connectlab.onrender.com/userDevices/" +item,
  more: {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    }
  }
  }
} 



export function deleteDevice (item, token) {
  return {
    url: "https://connectlab.onrender.com/userDevices/" +item,
    more: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      }
    }
  }
}



export function getZipCode(code) {
  return {
    url: `https://viacep.com.br/ws/${code}/json`
  }
}




export function editProfile (id, token, body) {
  return {
    url: 'https://connectlab.onrender.com/users/' + id,
    more: {
      method : 'PUT',
      headers : {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  }
}


