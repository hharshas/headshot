import { FormikErrorStyle, InputStyle, LabelStyle, LinePosition, PlaceholderPosition, PlaceholderStyle, WrapperFormikError } from "./style";
import { ChangeEvent, useRef } from "react";
import gsap from "gsap";
import React, { useEffect } from "react";
import  {tlError}  from "./TlError";

function SingleInput({
  handleError,
  errorMessage,
  formikHandleChange,
  formikValue,
  inputName,
  placeholder,
  type
}) {
  const errorRef = useRef(null);
  const line = useRef(null);
  const component = useRef(null);
  let q = gsap.utils.selector(component);

  useEffect(() => {
    //Error popup
    tlError.fromTo(
      errorRef.current,
      { right: -30, opacity: 0 },
      { right: 0, opacity: 1, duration: 0.5 }
    );
  }, [handleError]);

  const onMouseLeave = () => {
    const inputSelector = q("input");

    inputSelector.forEach((input) => {
      if (input.value.length === 0) {
        gsap.fromTo(
          line.current,
          { width: "100%", height: 3, opacity: 1, duration: 0.5 },
          { width: "100%", height: 1, opacity: 0.5 }
        );
        gsap.fromTo(
          q(".placeholderStyle"),
          { top: 0, left: 10 },
          { top: 18, left: 18 }
        );
      }
    });
  };

  const onMouseEnter = () => {
    const inputSelector = q("input");
    inputSelector.forEach((input) => {
      if (input.value.length === 0) {
        gsap.fromTo(
          line.current,
          { width: 0, height: 0, opacity: 0.5 },
          { width: "100%", height: 3, opacity: 1, duration: 0.5 }
        );
        gsap.fromTo(
          q(".placeholderStyle"),
          { top: 18, left: 18 },
          { top: 0, left: 10 }
        );
      }
    });
  };

  const handleFocusAnimations = () => {
    const inputSelector = q("input");
    inputSelector.forEach((input) => {
      if (input.value.length >= 1) return;
      else {
        gsap.fromTo(
          line.current,
          { width: 0, height: 0, opacity: 0.5 },
          { width: "100%", height: 3, opacity: 1, duration: 0.5 }
        );
        gsap.to(q(".placeholderStyle"), { top: 0, left: 10 });
      }
    });
  };

  const handleBlur = () => {
    const inputSelector = q("input");
    inputSelector.forEach((input) => {
      if (input.value.length >= 1) {
        gsap.to(line.current, {
          width: "100%",
          height: 3,
          opacity: 1,
          duration: 0.5
        });
      } else {
        gsap.to(line.current, {
          width: "100%",
          height: 1,
          opacity: 0.5,
          duration: 0.5
        });

        gsap.to(q(".placeholderStyle"), { top: 18, left: 18 });
      }
    });
  };

  return (
    <LabelStyle
      htmlFor={inputName}
      ref={component}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <InputStyle
        id={inputName}
        name={inputName}
        type={type}
        onChange={formikHandleChange}
        value={formikValue}
        onFocus={handleFocusAnimations}
        onBlur={handleBlur}
      />
      <LinePosition ref={line}>
        <PlaceholderPosition className={"placeholderStyle"}>
          <PlaceholderStyle>{placeholder}</PlaceholderStyle>
        </PlaceholderPosition>
      </LinePosition>
      {handleError ? (
        <WrapperFormikError ref={errorRef}>
          <FormikErrorStyle>{errorMessage}</FormikErrorStyle>
        </WrapperFormikError>
      ) : null}
    </LabelStyle>
  );
}

export const MemoSingleInput = React.memo(SingleInput);
