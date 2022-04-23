import { Post } from "@prisma/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Input from "../../components/Input";
import SkillInput from "../../components/SkillInput";

type Props = {};

const PostJob = (props: Props) => {
  const router = useRouter();
  const [requiredSkills, setRequiredSkills] = useState<string[]>([]);
  const [recommendedSkills, setRecommendedSkills] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>();

  const onSubmit = handleSubmit(async (data) => {
    const newPost = { ...data, requiredSkills, recommendedSkills };

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    if (response.ok) {
      router.push("/");
    } else {
      console.log(response.json());
    }
  });

  console.log({ errors });
  return (
    <Container>
      <Card>
        <h2 className="text-2xl font-bold mb-4">Post A Job</h2>
        <form className="p-0 m-0" onSubmit={onSubmit}>
          <Input
            register={{ ...register("company", { required: true }) }}
            label="Company*"
            error={errors?.company}
          />
          <Input
            register={{ ...register("name", { required: true }) }}
            label="Name*"
            error={errors?.name}
          />
          <Input
            register={{
              ...register("email", {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              }),
            }}
            label="Email*"
            error={errors?.email}
          />
          <Input
            register={{ ...register("title", { required: true }) }}
            label="Job title*"
            error={errors?.title}
          />
          <Input
            register={{ ...register("description", { required: true }) }}
            label="Description*"
            type="textarea"
            error={errors?.description}
          />
          <Input
            register={{ ...register("url", { required: true }) }}
            label="Link for applying*"
            error={errors?.url}
          />
          <Input register={{ ...register("deadline") }} label="Deadline" />
          <SkillInput
            skills={requiredSkills}
            setSkills={setRequiredSkills}
            label="Required skills"
            bgColor="bg-emerald-500"
          />
          <SkillInput
            skills={recommendedSkills}
            setSkills={setRecommendedSkills}
            label="Recommended skills"
          />
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
