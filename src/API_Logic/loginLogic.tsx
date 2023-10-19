// Logic đăng nhập Và API
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface User {
  name: string;
  id: number;
  email?: string;
}

let user1: User = {
  name: "Nguyen Ngoc Son",
  id: 123,
};

let handleLog = () => {};

export default { handleLog };
