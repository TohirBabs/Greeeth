import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import ReactInputVerificationCode from "react-input-verification-code";
import { POST } from "../../../utils/request";

export const Verify = () => {
  const [cookies, setCookie] = useCookies();
  const [code, setCode] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const verifyCode = async () => {
    setIsLoading(true);

    try {
      const body = JSON.stringify({
        email: "babstohir@gmail.com",
        otp: code,
      });
      console.log(body);

      const response = await POST("/accounts/activate/", body);

      if (response.ok) {
        const result = await response.json();
        setCookie(`key`, result.key, {
          path: "/",
        });
        setCookie(`email`, result.email, {
          path: "/",
        });
        navigate("/dashboard");
        console.log("result is: ", JSON.stringify(result));
      }

      //   response.json().then((text) => {
      //     console.log(text);
      //   });
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(code);
  return (
    <div class="flex items-center justify-center h-screen bg-lightgreen ">
      <div class="bg-white rounded-2xl border shadow-xl sm:p-10 p-5 max-w-lg">
        <div class="flex flex-col items-center space-y-4">
          <h1 class="font-bold text-2xl text-gray-700 text-center">
            Verify your account
          </h1>
          <p class="text-base text-gray-500 text-center w-5/6">
            We sent you the six digit code at{" "}
            <span className="lgreen font-bold ">{cookies.email}</span>
            <br /> Enter the code below to confirm your email address
          </p>
          <div className="custom-styles">
            <ReactInputVerificationCode
              placeholder="*"
              onChange={setCode}
              length={6}
              onCompleted={console.log}
            />
          </div>

          <button
            onClick={() => {
              verifyCode();
            }}
            class="bg-lgreen text-white rounded-md font-semibold px-4 py-3 w-full"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};