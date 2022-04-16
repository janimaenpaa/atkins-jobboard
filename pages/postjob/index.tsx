import { Post } from "@prisma/client";
import React from "react";
import { useForm } from "react-hook-form";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Input from "../../components/Input";

type Props = {};

const PostJob = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>();
  const onSubmit = handleSubmit((data) => console.log(data));
  console.log({ errors });
  return (
    <Container>
      <Card>
        <h2 className="text-2xl font-bold mb-4">Post A Job</h2>
        <form className="p-0 m-0" onSubmit={onSubmit}>
          <Input register={{ ...register("company") }} label="Company" />
          <Input register={{ ...register("name") }} label="Name" />
          <Input register={{ ...register("email") }} label="Email" />
          <Input register={{ ...register("title") }} label="Job title" />
          <Input
            register={{ ...register("description") }}
            label="Description"
            type="textarea"
          />
          <Input register={{ ...register("url") }} label="Link for applying" />
          <Input register={{ ...register("deadline") }} label="Deadline" />
          <button
            className="w-full bg-sky-500 p-2 text-white rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </Card>
    </Container>
  );
};

export default PostJob;
