import React from "react";
import Card from "./components/Card";
import { Bookmark } from "lucide-react";

const App = () => {
  const jobOpening = [
    {
      img: "https://imgs.search.brave.com/MwXX0qPWFbXSEEi7_ZQujbJg_Wh320vXA_JYslWVczY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzMvQW1h/em9uLUxvZ28tVHJh/bnNwYXJlbnQtUE5H/LXByZXZpZXcud2Vi/cA",
      name: "Amazon",
      days: "5 days ago",
      designation: "Senior UI/UX Designer",
      time: "Part-Time",
      position: "Senior Level",
      salary: "120/hr",
      city: "Mumbai,India",
    },
    {
      img: "https://imgs.search.brave.com/AskwR2RL8usjpi2FId5uAlgs3-atuUfOjduRjgsKYIU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8z/Ny8zOC9nb29nbGUt/bG9nby12ZWN0b3It/NTgzMzM3MzguanBn",
      name: "Google",
      days: "30 days ago",
      designation: "Graphic Designer",
      time: "Part-Time",
      position: "Flexible Schedule",
      salary: "150-220k",
      city: "Kochi,India",
    },
    {
      img: "https://imgs.search.brave.com/wP4knZf7zG83-pLmsVpbyo3Y9xLrvgpUpErPB-VjL7g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMzUzNi8zNTM2/Njg1LnBuZw",
      name: "Dribble",
      days: "18 days ago",
      designation: "Senior Motion Designer",
      time: "Contract",
      position: "Remote",
      salary: "85/hr",
      city: "Chennai,India",
    },
    {
      img: "https://imgs.search.brave.com/X-QNwL4Al8KeaXdRPzXwJEf4k_efCDrApsLuLNve5Q8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWZpZ21hLWljb24t/c3ZnLWRvd25sb2Fk/LXBuZy0xOTEyMDMw/LnBuZz9mPXdlYnAm/dz0xMjg",
      name: "Figma",
      days: "5 days ago",
      designation: "UX Designer",
      time: "Full-Time",
      position: "In Office",
      salary: "200-250k",
      city: "Bangalore,India",
    },
    {
      img: "https://imgs.search.brave.com/S4RCYGnUuCzn0eBmRRBNX7QyAyjyw4gbT6VV06AIq1E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlcml2ZXIuYXNp/YS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wMS9wbmdrZXku/Y29tLWFpcmJuYi1s/b2dvLXBuZy02MDU5/NjcucG5n",
      name: "Airbnb",
      days: "5 days ago",
      designation: "Junior UI/UX Designer",
      time: "Contract",
      position: "Remote",
      salary: "100/hr",
      city: "Delhi,India",
    },
    {
      img: "https://imgs.search.brave.com/lT_Ag__ozM8AWQp_KF6h4-j7KBPlRhXHfyuWpVS-poA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YxL2Fj/LzQ4L2YxYWM0ODNi/NmViN2QyMzM5NmNm/YTlhNWIxNWJmYjAy/LmpwZw",
      name: "Apple",
      days: "5 days ago",
      designation: "Graphic Designer",
      time: "Full-Time",
      position: "Flexible Schedule",
      salary: "85-120k",
      city: "Kerala,India",
    },
  ];

  return (
    <div className="parent">
      {jobOpening.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              brandLogo={elem.img}
              name={elem.name}
              days={elem.days}
              designation={elem.designation}
              time={elem.time}
              position={elem.position}
              salary={elem.salary}
              city={elem.city}
            />
          </div>  
        );
      })}
    </div>
  );
};

export default App;
