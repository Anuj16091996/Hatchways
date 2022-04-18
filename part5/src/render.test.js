import { screen, render } from "@testing-library/react";
import Part5 from "../src/part_five";
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const jsonwebtoken = require("jsonwebtoken");

test("Auth Test", () => {
  render(<Part5 />);
  const aboutTitleElement = screen.getByText(/about cookbook/i);
  console.debug(aboutTitleElement);
  //   const testToken = "test";
  //   const testSecret = "RatingAppSecret";
  //   // It will genrate auth in string type
  //   const result = jsonwebtoken.sign(testToken, testSecret);
  //   // console.debug(result);
  //   expect(result).toBe(
  //     "eyJhbGciOiJIUzI1NiJ9.dGVzdA.5jMOJ_xZp4FrEQDAFZJ8m0w_6LaLb8ZExF3IkO3GInQ"
  //   );
});
