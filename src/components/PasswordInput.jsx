// Code PasswordInput Component Here

function PasswordInput() {
  return (
    <input
      type="password"
      onChange={() => console.log("Entering password...")}
    />
  );
}

export default PasswordInput;