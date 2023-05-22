interface InputProps {
  name: string;
  type: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  val: string | number;
}

export const Input = ({ name, type, onChangeHandler, val }: InputProps) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="uppercase">{name}</h3>
      <input value={val} onChange={onChangeHandler} type={type} className="w-[150px] rounded-sm border border-blue"></input>
    </div>
  );
};
