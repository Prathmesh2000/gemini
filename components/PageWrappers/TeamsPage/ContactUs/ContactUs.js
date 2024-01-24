import React, { useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import ReCAPTCHA from "react-google-recaptcha";
import { isValidEmail, postApi } from "../../../../lib/api";

export default function index({ contact_us }) {
  const [state, setState] = React.useState(null);
  const [dynamic, setDynamic] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const _reCaptchaRef = useRef(null);

  const resetState = () => {
    let newState = {
      Fullname: { type: "text", value: "" },
      Email: { type: "text", value: "" },
      // country_code: { type: "text", },
      Mobile: { type: "text", value: "" },
      terms: { type: "boolean", value: false },
      token: { type: "text", value: null },
    };
    let dynamic_fields = (contact_us.dynamicFields || [])
      .filter((f) => f.display)
      .map((f) => {
        return {
          value: "",
          type: f.__component,
          placeholder: f.placeholder,
          options: (f.Values || "")
            .split(",")
            .map((o) => o.trim())
            .filter((o) => o),
        };
      });
    dynamic_fields.map((f) => (newState[f.placeholder] = f));
    setDynamic(dynamic_fields);
    setErrors({});
    setState(newState);
    _reCaptchaRef && _reCaptchaRef.current && _reCaptchaRef.current.reset();
  };

  useEffect(() => {
    resetState();
  }, []);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: {
        ...state[event.target.name],
        value: event.target.value,
      },
    });
  };

  const handleTerms = (e) => {
    setState({
      ...state,
      terms: {
        ...state.terms,
        value: e.target.checked,
      },
    });
    if (errors.terms) setErrors({ ...errors, terms: undefined });
  };
  const handleToken = (token) => {
    setState({ ...state, token: { ...state.token, value: token } });
    if (errors.token) setErrors({ ...errors, token: undefined });
  };

  const validator = () => {
    let newErrors = {};
    let Fullname = state.Fullname.value.trim(),
      Email = state.Email.value.trim(),
      Mobile = state.Mobile.value.trim(),
      terms = state.terms.value,
      token = state.token.value;
    if (!Fullname || Fullname.length < 3)
      newErrors.Fullname = { message: "Name should have min 4 characters" };
    if (!Email || Email.length < 3 || !isValidEmail(Email))
      newErrors.Email = { message: "Please enter a valid email" };
    if (!Mobile || Mobile.length < 6 || isNaN(Mobile))
      newErrors.Mobile = { message: "Please enter a valid Mobile Number" };

    if (!terms)
      newErrors.terms = { message: "Please confirm terms and conditions" };
    if (!token) newErrors.token = { message: "Recaptcha is missing" };
    setErrors(newErrors);
    return Object.keys(newErrors).length == 0;
  };

  const submit = (e) => {
    if (!validator()) return false;
    let body = {
      data: {
        Fullname: state.Fullname.value,
        Mobile: state.Mobile.value,
        Email: state.Email.value,
        textinputs: [],
        dropdowns: [],
      },
      token: state.token.value,
      operation: "contact-us-form",
    };
    (dynamic || []).map((f) => {
      if (f.type == "contact-us.text-input") {
        body.data.textinputs.push({
          placeholder: f.placeholder,
          value: state[f.placeholder].value,
        });
      } else if (f.type == "contact-us.drop-down") {
        body.data.dropdowns.push({
          placeholder: f.placeholder,
          Values: state[f.placeholder].value,
        });
      }
    });
    setLoading(true);
    postApi(body)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        resetState();
      })
      .catch((e) => {
        setLoading(false);
      });

    // fetch("http://localhost:4200/signup", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ token: state.token }),
    // })
  };

  const Input = (name, value, placeholder = "", is_multi = false) => {
    return (
      <TextField
        error={!!errors[name]}
        // helperText={errors[name] && errors[name].message}
        value={value}
        onChange={handleChange}
        label={placeholder}
        name={name}
        id="standard-size-normal"
        variant="standard"
        fullWidth
        multiline={is_multi}
        minRows={is_multi ? 2 : ""}
      />
    );
  };
  if (!state) return;
  return (
    <div className={"contact-us-form"}>
      <h4 className="contact-us-form-header">{contact_us.Title}</h4>
      <span className="contact-us-form-sub-header">
        {contact_us.Description}
      </span>
      <div className="contact-form-input-group">
        {Input("Fullname", state.Fullname.value, "Enter Full Name*")}
      </div>
      <div className="contact-form-row-group">
        <div className="contact-form-half-row">
          <div className="contact-form-input-group">
            {Input("Email", state.Email.value, "Email ID:")}
          </div>
        </div>
        <div className="contact-form-half-row">
          <div className="contact-form-input-group">
            {/* TODO: Mobile country_code*/}
            {Input("Mobile", state.Mobile.value, "Mobile Number*")}
          </div>
        </div>
      </div>
      {(dynamic || []).map((dynamic_field) => {
        if (dynamic_field.type == "contact-us.text-input")
          return (
            <div className="contact-form-input-group">
              {Input(
                dynamic_field.placeholder,
                state[dynamic_field.placeholder].value,
                dynamic_field.placeholder,
                true
              )}
            </div>
          );
        if (dynamic_field.type == "contact-us.drop-down")
          return (
            <div className="contact-form-input-group">
              <TextField
                id="outlined-select-currency"
                select
                label={dynamic_field.placeholder}
                value={state[dynamic_field.placeholder].value}
                onChange={handleChange}
                defaultValue={state[dynamic_field.placeholder].value}
                name={dynamic_field.placeholder}
                variant="standard"
                fullWidth
              >
                {(dynamic_field.options || []).map((o, i) => (
                  <MenuItem
                    key={dynamic_field.placeholder + "option " + i}
                    value={o}
                  >
                    {o}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          );
      })}

      <div className="contact-form-input-group">
        <div className="contact-form-checkbox">
          <div className="checkbox">
            <Checkbox
              className={errors.terms ? "terms_error_class" : ""}
              checked={state.terms.value}
              onChange={handleTerms}
            />
          </div>
          <div className="contact-form-terms">
            <span>
              I have read and accept the{" "}
              <a href={contact_us.termsAndPolicyLink}>Teams of Services</a> &{" "}
              <a href={contact_us.privacyPolicyLink}>Privacy Policy*</a>
            </span>
          </div>
        </div>
      </div>
      <ReCAPTCHA
        style={{ display: "inline-block" }}
        theme="light"
        ref={_reCaptchaRef}
        sitekey={process.env.RECHAPTCHA_SITE_KEY}
        onChange={handleToken}
      />
      {errors.token && (
        <span className="contact-us-form-error">{errors.token.message}</span>
      )}
      <div className="contact-form-input-group">
        <span
          className={`contact-us-submit ${
            loading && "contact-us-disabled-btn"
          } `}
          onClick={submit}
        >
          {contact_us.Button.name}
        </span>
      </div>
    </div>
  );
}
