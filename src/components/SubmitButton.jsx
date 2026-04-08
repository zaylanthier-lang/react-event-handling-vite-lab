// Code SubmitButton Component Here

function SubmitButton() {
  return (
    <button
      onMouseEnter={() => console.log("Mouse Entering")}
      onMouseLeave={() => console.log("Mouse Exiting")}
    >
      Submit Password
    </button>
  );
}

export default SubmitButton;