import "./App.css";

function App() {
  return (
    <>
      <address id="address">
        The Indian Museum <br />
        27, Jawaharlal Nehru Rd, Fire Brigade Head Quarter, New Market Area,{" "}
        <br />
        Dharmatala, Taltala, Kolkata, West Bengal 700016
      </address>

      <div className="responsive-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5670437705558!2d88.34854651025319!3d22.55788577941676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771160347adf%3A0x9fd70619f94d0bac!2sIndian%20Museum!5e0!3m2!1sen!2sin!4v1710622622342!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default App;
