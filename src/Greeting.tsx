interface Props {
  myName: string;
  myColor: string;
  myAge: number;
}
export default function Greeting({ myName, myColor, myAge }: Props) {
  return (
    <p>
      My name is {myName} and my Color is {myColor} and my age is {myAge}
    </p>
  );
}
