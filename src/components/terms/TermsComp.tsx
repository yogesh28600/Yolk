import "./TermsComp.css";
import Terms from "../../types/Terms";
interface Props {
  terms: Terms[];
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const TermsComp = ({ terms, closeModal }: Props) => {
  return (
    <div className="modal">
      <div className="title">
        <h1>Terms of Service</h1>
      </div>
      <div className="context">
        {terms.map(({ Header, context }) => {
          return (
            <>
              <h4>{Header}</h4>
              <p>{context}</p>
            </>
          );
        })}
      </div>
      <div className="footer">
        <button
          className="btn"
          onClick={() => {
            closeModal(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TermsComp;
