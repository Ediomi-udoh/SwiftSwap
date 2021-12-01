import ExternalLinkIcon from "../svg/ExternalLinkIcon";

const SubmitTxView = ({ txId }) => {
  return (
    <div className="link-data-container">
      <div className="submit-msg">{"Transaction id:"}</div>

      <a
        className="btn btn--swap-complete btn--truncated"
        href={"https://testnet.algoexplorer.io/tx/" + txId}
        target="_blank"
        rel="noreferrer"
      >
        {txId}
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.66675 7.33337L14.1334 1.8667" />
          <path d="M14.6666 4.53325V1.33325H11.4666" />
          <path d="M7.33325 1.33325H5.99992C2.66659 1.33325 1.33325 2.66659 1.33325 5.99992V9.99992C1.33325 13.3333 2.66659 14.6666 5.99992 14.6666H9.99992C13.3333 14.6666 14.6666 13.3333 14.6666 9.99992V8.66659" />
        </svg>
      </a>
    </div>
  );
};

export default SubmitTxView;
