import { useContext } from "react";
import { JsonContext } from "/src/home_page/jsx/Contexts/FooterJson.jsx";

export function ServsAndLegalTerms() {
  const data = useContext(JsonContext)["servs-and-legal-terms"];

  return (
    <div>
      <section>
        <div>
          <img src="./src/media/footer/ea-violet.png" alt="ea-logo" />
        </div>
        <div>
          <div>
            <div>
              {data.servs.map((link) => {
                return <Serv key={link} link={link} />;
              })}
            </div>
            <div>
              <ButtonSelector items={data.prices} />
              <ButtonSelector items={data.langs} />
            </div>
          </div>
          <div>
            <div>Terminos legales + copyright</div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Serv({ link }) {
  return (
    <>
      <span>{link}</span>
    </>
  );
}

function ButtonSelector({ items }) {
  return (
    <div>
      <button>
        <div>{items.title}</div>
        <div></div>
      </button>
      <div>
        {items.content.map((item, index) => {
          return <div key={index}>Hi</div>;
        })}
      </div>
    </div>
  );
}
