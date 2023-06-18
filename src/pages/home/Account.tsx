import React, { useState } from 'react';
import { Button } from "@gear-js/ui";


function Account() {
  const [isInVenue, setIsInVenue] = useState(false);

  const toggleInVenue = () => {
    console.log("jiajsosjdsdj")
    setIsInVenue(prevState => !prevState);

    const url = "your-api-endpoint"; // Reemplaza con tu endpoint de API real

    if (isInVenue) {
      // Realiza una solicitud GET
      fetch(url)
        .then(response => response.json())
        .then(data => {
          // Procesa los datos de la respuesta
          console.log(data);
        })
        .catch(error => {
          // Maneja el error
          console.error(error);
        });
    } else {
      // Realiza una solicitud POST
      fetch(url, {
        method: "POST",
        body: JSON.stringify({}), // Reemplaza con los datos de la solicitud si es necesario
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          // Procesa los datos de la respuesta
          console.log(data);
        })
        .catch(error => {
          // Maneja el error
          console.error(error);
        });
    }
  };

  const toggleNoVenue = () => {
    console.log("jiajsosjdsdj")
    setIsInVenue(prevState => !prevState);

    const url = "your-api-endpoint"; // Reemplaza con tu endpoint de API real

    if (isInVenue) {
      // Realiza una solicitud GET
      fetch(url)
        .then(response => response.json())
        .then(data => {
          // Procesa los datos de la respuesta
          console.log(data);
        })
        .catch(error => {
          // Maneja el error
          console.error(error);
        });
    } else {
      // Realiza una solicitud POST
      fetch(url, {
        method: "POST",
        body: JSON.stringify({}), // Reemplaza con los datos de la solicitud si es necesario
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          // Procesa los datos de la respuesta
          console.log(data);
        })
        .catch(error => {
          // Maneja el error
          console.error(error);
        });
    }
  };

  return (
    <div>
      <Button text="In-venue function" onClick={toggleInVenue} />
      <Button text="No-venue function" onClick={toggleNoVenue} />
    </div>
  );
}

export { Account }