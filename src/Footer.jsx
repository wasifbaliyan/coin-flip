import React from "react";

export default function Footer() {
  return (
    <div style={{ margin: "8rem 0 0 0" }}>
      <small>
        &copy;{new Date().getFullYear()} -{" "}
        <a href="https://wasifbaliyan.com">wasifbaliyan</a>
      </small>
    </div>
  );
}
