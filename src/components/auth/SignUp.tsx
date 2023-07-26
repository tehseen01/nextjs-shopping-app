"use client";

import React from "react";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { SignUpFormData, signUpSchema } from "@/lib/validation/signUp";
import { Label } from "@radix-ui/react-label";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setAuthStatus, setUser } from "@/redux/slice/userSlice";

const SignUp = () => {
  const { toast } = useToast();
  const router = useRouter();

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    try {
      const { data: userData } = await axios.get(`/api/user`, {
        params: { email: data.email },
      });

      if (userData.user !== null) {
        return toast({
          title: "This email already in use",
          description: "Please login or try different email !",
          variant: "destructive",
        });
      }

      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(res.user, {
        displayName: data.name,
      });

      const { data: userPostData } = await axios.post("/api/user", {
        email: res.user.email,
        name: res.user.displayName,
        avatar: res.user.photoURL,
      });

      dispatch(setAuthStatus(true));
      dispatch(setUser(userPostData.user));
      console.log(userPostData);
      reset();

      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const isFormError = Object.entries(errors).length === 0;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            {...register("name")}
            id="name"
            type="text"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            {...register("email")}
            id="email"
            type="email"
            placeholder="m@example.com"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="mt-4">
          <Button
            className="w-full"
            type="submit"
            disabled={!isFormError || isSubmitting || !isDirty}
          >
            {isSubmitting ? "Loading..." : "Create account"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
