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
      {/* 
       question no.2 
      */}
      <h2> Why are you using firebase?</h2>
      <p>
        Firebase is a set of tools offered by Google to build excellent scalable
        applications in the cloud. It is a powerful service that helps in
        building applications quickly without reinventing the components or
        modules. Services like analytics, authentication, databases,
        configuration, file storage, push messaging are provided by firebase
        thereby making it easy for the developers to focus on the user
        experience of the application.
      </p>
      {/* 
       question no.3 
      */}
      <h2>What other options do you have to implement authentication?</h2>
      <ul>
        <li>
          Password-based authentication. Passwords are the most common methods
          of authentication.
        </li>
        <li>Multi-factor authentication</li>
        <li>Certificate-based authentication.</li>
        <li>Biometric authentication. </li>
        <li>Token-based authentication.</li>
      </ul>
      {/* 
         question no.4 
      */}
      <h2>
        What other services does firebase provide other than authentication
      </h2>
      <p>
        There are many services which Firebase provides, Most useful of them are:
      </p>
      <ul>
        <li>Cloud Firestore</li>
        <li>Cloud Functions</li>
        <li>Authentication</li>
        <li>Hosting</li>
        <li>Cloud Storage</li>
        <li>Google Analytics</li>
        <li>Predictions</li>
        <li>Cloud Messaging</li>
        <li>Dynamic Links</li>
        <li>Remote Config</li>
      </ul>
    </div>
  );
};

export default Blog;
