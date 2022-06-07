import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import routes from "../routes";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FatLink } from "../components/shared";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import FormError from "../components/auth/FormError";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  line-height: 25px;
`;

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $name: String!
    $location: String!
    $password: String!
  ) {
    createAccount(
      username: $username
      email: $email
      name: $name
      location: $location
      password: $password
    ) {
      ok
      error
    }
  }
`;

function SignUp() {
  const navigate = useNavigate();
  const onCompleted = (data) => {
    const { username, password } = getValues();
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return;
    }
    navigate(routes.home, {
      state: { message: "Account created. Please log in.", username, password },
    });
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: {
        ...data,
      },
    });
  };
  return (
    <AuthLayout>
      <PageTitle title="Sign up" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faCoffee} size="3x" />
          <Subtitle>
            Sign up to see photos and videos from Nomad Coffee.
          </Subtitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register("username", { required: "Username is required." })}
            type="text"
            placeholder="Username"
          />
          <FormError message={errors?.username?.message} />

          <Input
            {...register("name", { required: "Name is required." })}
            type="text"
            placeholder="Name"
          />
          <FormError message={errors?.name?.message} />

          <Input
            {...register("email", { required: "Email is required." })}
            type="text"
            placeholder="Email"
          />
          <FormError message={errors?.email?.message} />

          <Input
            {...register("location", { required: "Location is required." })}
            type="text"
            placeholder="Location"
          />
          <FormError message={errors?.location?.message} />

          <Input
            {...register("password", { required: "Password is required." })}
            type="password"
            placeholder="Password"
          />
          <FormError message={errors?.password?.message} />

          <Button
            type="submit"
            value={loading ? "loading..." : "Sign up"}
            disabled={!isValid || loading}
          />
        </form>
      </FormBox>
      <BottomBox
        cta="Have an account?"
        linkText="Log in"
        link={routes.home}
      ></BottomBox>
    </AuthLayout>
  );
}
export default SignUp;
