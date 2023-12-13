import api from "../../services/index";
import { API_ENDPOINTS } from "../../services/ApiEnponds";
import { useDispatch } from "react-redux";
import { setSignedInSuccess } from "../../store/auth/sessionslice";
import { setUser } from "../../store/auth/userSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  const signUp = async (value) => {
    try {
      const resp = await api.post(API_ENDPOINTS.REGISTER, value);
      dispatch(setSignedInSuccess(resp.data.tokens.access));
      dispatch(setUser(resp.data.user));
      console.log(resp);
      return {
        success: true,
        message: "",
      };
    } catch (err) {
      return {
        success: false,
        message: JSON.stringify(err.response.data),
      };
    }
  };

  const signIn = async (value) => {
    try {
      const resp = await api.post(API_ENDPOINTS.LOGIN, value);
      console.log(resp);
      dispatch(setSignedInSuccess(resp.data.tokens.access));
      dispatch(
        setUser(
          resp.data.user || {
            first_name: "user",
            last_name: "last_name",
            phone_name: null,
            email: null,
          }
        )
      );
      return {
        success: true,
        message: "",
      };
    } catch (err) {
      return {
        success: false,
        message: JSON.stringify(err.response.data),
      };
    }
  };

  const signOut = async () => {};

  return { signIn, signOut, signUp };
};

export default useAuth;
