import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";
import AuthLayout from "../components/auth/AuthLayout";
import PageTitle from "../components/PageTitle";
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";
import SubmitBox from "../components/auth/SubmitBox";
import { useParams } from "react-router-dom";

function EditCoffeeShop() {
  const { id } = useParams;
  console.log();
  return (
    <AuthLayout>
      <PageTitle title="Coffee Shops" />
      <SubmitBox>
        <form>
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Latitude" />
          <Input type="text" placeholder="Longitude" />
          <Input type="file" placeholder="Photos" />
          <Input type="text" placeholder="Categories" />
          <Button type="submit" value="Edit Coffee Shops" />
        </form>
      </SubmitBox>
    </AuthLayout>
  );
}

export default EditCoffeeShop;
