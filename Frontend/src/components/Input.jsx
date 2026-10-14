export default function Input({
  label,
  type,
  name,
  value,
  onChange,
  ...props
}) {
  //  what is spread & rest opp..
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
