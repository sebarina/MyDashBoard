import React from "react";
import { Button, Checkbox, Label, Select, TextInput,FileInput } from "flowbite-react";
import Link from "next/link";
import MainForm from "./forms/MainForm";

const page = () => {
  return (
    <>
      <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
        <div className="flex h-full justify-center items-center px-4">
          <div className="rounded-xl shadow-md bg-white dark:bg-darkgray p-6 w-full md:w-96 border-none">
            <div className="flex flex-col gap-2 p-0 w-full">

              <h4 className="card-title mb-3">Please fill in following information</h4>
              <MainForm />
              <div className="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-center">
                <p>Have problem?</p>
                <Link href="/" className="text-primary text-sm font-medium">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
