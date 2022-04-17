import React from "react";

const Blog = () => {
  return (
    <div className="container my-4">
      <h2>Difference between authorization and authentication?</h2>
      <h4>Authentication</h4>
      <ul>
        <li>Authentication verifies who the user is.</li>
        <li>
          Authentication works through passwords, one-time pins, biometric
          information, and other information provided or entered by the user.
        </li>
        <li>
          Authentication is the first step of a good identity and access
          management process.
        </li>
        <li>
          Authentication is visible to and partially changeable by the user.
        </li>
        <li>
          Example: By verifying their identity, employees can gain access to an
          HR application that includes their personal pay information, vacation
          time, and 401K data.
        </li>
      </ul>
      <h4>Authorization</h4>
      <ul>
        <li>Authorization determines what resources a user can access.</li>
        <li>Authorization determines what resources a user can access.</li>
        <li>Authorization always takes place after authentication.</li>
        <li>Authorization isn’t visible to or changeable by the user.</li>
        <li>
          Example: Once their level of access is authorized, employees and HR
          managers can access different levels of data based on the permissions
          set by the organization.
        </li>
      </ul>
    </div>
  );
};

export default Blog;
