import { Result } from "antd";
import type { NextPage } from "next";
import React from "react";

const NotFound: NextPage = () => {
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
    />
  );
};

export default NotFound;
