import { useForm } from "react-hook-form";

type FormValues = {
  fname: string;
  lname: string;
  age: number;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      fname: "",
      lname: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  console.log("errors", errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("fname", {
            required: {
              value: true,
              message: "This field is required",
            },
          })}
          placeholder="First Name"
        />
        <input
          {...register("lname", {
            maxLength: {
              value: 5,
              message: "Max lenght is 5",
            },
          })}
          placeholder="Last Name"
        />
        <input type="number" {...register("age", { valueAsNumber: true })} />
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
