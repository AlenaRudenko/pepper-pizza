import "./../pages/reg-page/styles.css";

interface IProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
}

export const InputComponent = ({
  onChange,
  value,
  type,
  placeholder,
}: IProps) => {
  return (
    <div>
      <input
        onChange={onChange}
        value={value}
        type={type ? type : "text"}
        placeholder={placeholder}
        className={"default__input"}
      />
    </div>
  );
};
