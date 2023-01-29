import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


const index = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [person, setPerson] = useState([]);

  const contactPerson = () => {
    const check = {
      firstName: firstName.trim().length === 0,
      lastName: lastName.trim().length === 0,
      email: email.trim().length === 0,
    };

    if (check.firstName || check.lastName || check.email) {
      toast.error("Iltimos ma'lumotlaringizni kiriting ", {
        position: "top-right",
        autoClose: 500,
      });
    } else {
      const newPerson = {
        firstName: firstName,
        lastName: lastName,
        email: email,
      };
      setPerson([...person, newPerson]);
      setLastName("");
      setFirstName("");
      setEmail("");
      toast.success(
        "Ma'lumotlaringiz yuborildi , tez orada adminlarimiz aloqaga chiqishadi",
        {
          position: "top-right",
          autoClose: 1000,
        }
      );
    }
  };

  return (
    <>
      <section id="contact">
        <ToastContainer />
        <div className="container">
          <form
            action="#"
            onSubmit={() => {
              contactPerson();
              console.log(123);
            }}
          >
            <label htmlFor="firstName">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Ismingizni kiriting"
                type="text"
                id="firstName"
                required
              />
            </label>
            <label htmlFor="lastName">
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Familiyangizni kiriting"
                type="text"
                id="lastName"
                required
              />
            </label>
            <label htmlFor="email">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email pochtangizni kiriting"
                type="email"
                id="email"
                required
              />
            </label>

            <button type="submit">Ma'lumotlarni jo'natish</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default index;
