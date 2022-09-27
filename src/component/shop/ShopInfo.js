import React from "react";
const ShopInfo = () => {
  return (
    <section className="shop-info">
      <div className="container">
        <div className="row shop-info-alignemnt">
          <div className="col shop-info-sub">
            <div className="info-icon">
              <svg
                width="64"
                height="64"
                fill="rgb(71, 70, 70)"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 4.5V6h14.25v11.25H9.633C9.299 15.96 8.139 15 6.75 15s-2.549.96-2.883 2.25H3V13.5H1.5v5.25h2.367C4.201 20.04 5.361 21 6.75 21s2.549-.96 2.883-2.25h6.234c.334 1.29 1.494 2.25 2.883 2.25s2.549-.96 2.883-2.25H24v-6.117l-.047-.117-1.5-4.5-.164-.516H15.75v-3H0Zm.75 3V9H7.5V7.5H.75Zm15 1.5h5.46l1.29 3.844v4.406h-.867C21.299 15.96 20.139 15 18.75 15s-2.549.96-2.883 2.25h-.117V9ZM1.5 10.5V12H6v-1.5H1.5Zm5.25 6c.838 0 1.5.662 1.5 1.5s-.662 1.5-1.5 1.5-1.5-.662-1.5-1.5.662-1.5 1.5-1.5Zm12 0c.838 0 1.5.662 1.5 1.5s-.662 1.5-1.5 1.5-1.5-.662-1.5-1.5.662-1.5 1.5-1.5Z"></path>
              </svg>
            </div>
            <div className="info-heading">
              <h5 className="info-heading-sub">Free Shipping</h5>
              <p>Across India</p>
            </div>
          </div>
          <div className="col shop-info-sub">
            <div className="info-icon">
              <svg
                width="64"
                height="64"
                fill="rgb(71, 70, 70)"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.875 2.25A2.625 2.625 0 0 0 8.25 4.875c0 2.625 4.5 4.875 4.5 4.875s4.5-2.25 4.5-4.875a2.625 2.625 0 0 0-2.625-2.625c-.736 0-1.399.305-1.875.792a2.613 2.613 0 0 0-1.875-.792Zm0 1.5c.303 0 .588.12.803.34l.4.41h1.344l.4-.41c.215-.22.5-.34.803-.34.62 0 1.125.505 1.125 1.125 0 .946-1.58 2.307-3 3.161-1.421-.855-3-2.215-3-3.161 0-.62.505-1.125 1.125-1.125Zm3.54 6.734-1.228.861 1.957 2.792-2.702 1.87-1.907-.987 2.025-1.019.008-.006.008-.004a1.88 1.88 0 0 0 .85-2.135v-.001a1.886 1.886 0 0 0-2.32-1.28h-.001l-5.334 1.487-3.53 2.425 1.421 5.79 3.784-1.366 5.36 2.774 8.902-6.162-.853-1.233-8.16 5.65-5.14-2.664L4.72 18.3l-.775-3.162 2.47-1.7 5.102-1.422h.003a.364.364 0 0 1 .464.257.37.37 0 0 1-.168.423L8.549 14.34 7.236 15l5.32 2.755 4.682-3.243-2.824-4.028Z"></path>
              </svg>
            </div>

            <div className="info-heading">
              <h5 className="info-heading-sub">Made In India Products</h5>
              <p>#Vocalforlocal</p>
            </div>
          </div>
          <div className="col shop-info-sub">
            <div className="info-icon">
              <svg
                width="64"
                height="64"
                fill="rgb(71, 70, 70)"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 3.75A2.262 2.262 0 0 0 6.75 6c0 .264.056.513.14.75H3v4.5h.75V21h16.5v-9.75H21v-4.5h-3.89c.084-.237.14-.486.14-.75A2.262 2.262 0 0 0 15 3.75c-1.313 0-2.203.996-2.79 1.828-.078.111-.14.22-.21.328-.07-.108-.132-.217-.21-.328C11.202 4.746 10.312 3.75 9 3.75Zm0 1.5c.469 0 1.078.504 1.547 1.172.114.164.097.173.187.328H9A.737.737 0 0 1 8.25 6c0-.425.325-.75.75-.75Zm6 0c.425 0 .75.325.75.75s-.325.75-.75.75h-1.734c.09-.155.073-.164.187-.328.469-.668 1.078-1.172 1.547-1.172Zm-10.5 3h15v1.5h-6.75V9h-1.5v.75H4.5v-1.5Zm.75 3h13.5v8.25h-6V12h-1.5v7.5h-6v-8.25Z"></path>
              </svg>
            </div>
            <div className="info-heading">
              <h5 className="info-heading-sub">Priority Delivery</h5>
              <p>Same Day Processing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShopInfo;
