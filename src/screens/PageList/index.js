import React from "react";
import { Link } from "react-router-dom";
import styles from "./PageList.module.sass";

const PageList = () => {
  return (
    <div className={styles.page} style={{ fontSize: 16, fontWeight: 500 }}>
      <p style={{ marginBottom: 5 }}>
        <Link to="/">Home</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/new-process">new-process</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/process">process</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/reports">Reports</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/settings">profile</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/sign-in">sign-in</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/otp">otp</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/test">test</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/process-start">process-start</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/test-instruction">test-instruction</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/start-form">test-form</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/test-timeout">test-timeout</Link>
      </p>
      <p style={{ marginBottom: 5 }}>
        <Link to="/process-done">test-done</Link>
      </p>
    </div>
  );
};

export default PageList;
