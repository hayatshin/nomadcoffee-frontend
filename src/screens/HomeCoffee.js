import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import AuthLayout from "../components/auth/AuthLayout";
import PageTitle from "../components/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/auth/Button";
import Input from "../components/auth/Input";
import { useForm } from "react-hook-form";
import FormError from "../components/auth/FormError";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
import SubmitBox from "../components/auth/SubmitBox";
import ClickButton from "../components/auth/ClickButton";

const SEE_COFFEE_SHOPS = gql`
  query seeCoffeeShops($keyword: String!, $page: Int!) {
    seeCoffeeShops(keyword: $keyword, page: $page) {
      id
      name
      latitude
      longitude
      user {
        username
      }
    }
  }
`;

const IconBox = styled.div`
  margin-bottom: 20px;
`;

const SClickButton = styled.button`
  margin-top: 20px;
  padding: 0.5rem 1rem;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 450px;
  border: none;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
`;

function HomeCoffee() {
  const navigate = useNavigate();
  const { loading, data, fetchMore, error } = useQuery(SEE_COFFEE_SHOPS);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  const onSubmitValid = async (data) => {
    if (loading) {
      return;
    }
    const coffeelist = await fetchMore({
      variables: {
        keyword: data?.coffee_shop,
        page: 1,
      },
    });
    navigate(routes.coffeeShopList, {
      state: { coffeeShopData: coffeelist?.data?.seeCoffeeShops },
    });
  };
  const AddShopBtn = () => {
    navigate(routes.add);
  };
  return (
    <AuthLayout>
      <PageTitle title="Coffee Shops" />
      <SubmitBox>
        <IconBox>
          <FontAwesomeIcon icon={faCoffee} size="3x" />
        </IconBox>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register("coffee_shop", {
              required: "Type Coffee Shop Name",
            })}
            type="text"
            placeholder="Type Coffee Shop Name"
          />
          <FormError message={errors?.coffee_shop?.message} />
          <Button type="submit" value="Search for Coffee Shops" />
        </form>
      </SubmitBox>
      <SClickButton onClick={AddShopBtn}>Add Coffee Shop</SClickButton>
    </AuthLayout>
  );
}

export default HomeCoffee;
