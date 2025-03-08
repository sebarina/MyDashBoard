import { Button, FileInput, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React from "react";

const MainForm = () => {
  return (
    <>
      <form>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label className="text-gray-400" htmlFor="input_1" value="请输入信息1111" />
          </div>
          <TextInput
            id="input_1"
            type="text"
            sizing="md"
            className="form-control form-rounded-xl"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label className="text-gray-400" htmlFor="input_2" value="请输入信息22222" />
          </div>
          <TextInput
            id="input_2"
            type="text"
            sizing="md"
            className="form-control form-rounded-xl"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label className="text-gray-400" htmlFor="userfile" value="请选择一个文件进行上传" />
          </div>
          <FileInput
            id="userfile"
            sizing="md"
            className="form-control form-rounded-xl"
          />
        </div>
        <div className="mt-4 pt-10">
          <Button color={"primary"} href="/" as={Link} className="w-full bg-primary text-white rounded-xl">
            Submit
          </Button>
        </div>
       
      </form>
    </>
  );
};

export default MainForm;
