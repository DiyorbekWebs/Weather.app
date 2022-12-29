import { Container, Input } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { fetchWeather } from ".";
import Card, { Card1 } from "../Card/Card";
export const Main = () => {
  const [value, setValue] = React.useState({});
  const [text, setText] = React.useState("");
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(text);
      setValue(data);
      setText();
      console.log(data);
    }
  };
  return (
    <Container>
      <Stack p="50px" direction={"column"} alignItems="center" gap={"30px"}>
        <Input
          placeholder="search"
          sx={{ width: {
            sm:'100%',
            lg:'571px'
          },fontSize:{
            sm:'42px',
            lg:'32px'

          } }}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={search}
        />
        {value.main && (
          <Card1
            img={`https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`}
            name={value.name}
            country={value.sys.country}
            deg={Math.round(value.main.temp)}
            description={value.weather[0].description}
          />
        )}
      </Stack>
    </Container>
  );
};
