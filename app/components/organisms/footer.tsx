"use client";
import "@/app/styles/footer.css";
function Footer() {
  return (
    <div className="footer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill=""
        className="bi bi-arrow-up fill-white! bg-amber-400"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
        />
      </svg>
      <h2>Copyright © 2024. All rights reserved.</h2>
    </div>
  );
}

export default Footer;
