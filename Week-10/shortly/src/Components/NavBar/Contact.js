import React from "react";

export const Contact = (props) => {
  const { email } = props;
  return (
    <div className="inputContainer">
      <h1>Contact</h1>
      <p>
        We can catch up at{" "}
        <a
          href={`mailto${email}?subject='Can we work on ..'&cc=admin@d2maketing.in`}
        >
          mail link
        </a>
      </p>
    </div>
  );
};
