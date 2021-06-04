import { useState } from "react";
import PropTypes from "prop-types";

function BasicNameForm(props) {
  var [name, setName] = useState(props.defaultValue || "");
  var handleChange = (event) => setName(event.target.value);
  var handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(name);
  };

  return (
    <>
    <br />
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <br />
    </>
  );
}

BasicNameForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BasicNameForm;
