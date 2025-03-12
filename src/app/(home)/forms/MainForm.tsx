'use client'; 
import { Button, FileInput, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { useState } from 'react';

const MainForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [uploading, setUploading] = useState(false);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      setMessage('请选择一个文件。');
      return;
    }
    setUploading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`查询成功: ${data.filename}`);
      } else {
        setMessage('查询失败。');
      }
    } catch (error) {
      setMessage('查询出错。');
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label className="text-gray-400" htmlFor="input_1" value="ID" />
          </div>
          <TextInput
            id="input_1"
            type="text"
            sizing="md"
            placeholder="0000"
            className="form-control form-rounded-xl"
            required
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label className="text-gray-400" htmlFor="input_2" value="IDS" />
          </div>
          <TextInput
            id="input_2"
            type="text"
            sizing="md"
            placeholder="⿰女庄"
            className="form-control form-rounded-xl"
            required
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label className="text-gray-400" htmlFor="input_3" value="RS" />
          </div>
          <TextInput
            id="input_3"
            type="text"
            sizing="md"
            placeholder="38.6"
            className="form-control form-rounded-xl"
            required
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
            onChange={handleFileChange}
          />
        </div>
        <div className="mt-4 pt-10">
          <Button color={"primary"} className="w-full bg-primary text-white rounded-xl" type="submit">
          {uploading ? 'Searching...' : 'Search Glyph'}
          </Button>
        </div>
       
      </form>
      {message && <p className="mt-4 text-gray-700">{message}</p>}
    </>
  );
};

export default MainForm;
