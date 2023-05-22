import React from "react";
import { Input } from "components/Input";
import { Preview } from "components/Preview";
import { CopyCode } from "components/CopyCode";
import { useLocalStorage } from "usehooks-ts";

export const RGBA = () => {
  const [red, setRed] = React.useState<number | string>(255);
  const [green, setGreen] = React.useState<number | string>(55);
  const [blue, setBlue] = React.useState<number | string>(15);
  const [alpha, setAlpha] = React.useState<number | string>(1);
  const [newProfileName, setNewProfileName] = React.useState<string>("");
  const [profiles, setProfiles]: any = useLocalStorage("rgba", {});

  const handleSaveProfile = () => {
    if (Object.keys(profiles).length >= 5) {
      alert("You exceeded 5 saved profiles");
    } else {
      const temp: { [key: string]: any } = {};
      temp[newProfileName] = [red, green, blue, alpha];
      setProfiles((prev: any) => ({ ...prev, ...temp }));
    }
  };

  const handleSwitchProfile = (x: number, y: number, blur: number, color: string) => {
    setRed(x);
    setGreen(y);
    setBlue(blur);
    setAlpha(color);
  };

  const handleRemoveProfile = (profile: string) => {
    const temp = profiles;
    delete temp[profile];
    setProfiles(temp);
  };

  return (
    <div className="p-4">
      <h2 className="py-4">Inputs:</h2>
      <div className="flex flex-row flex-wrap justify-between gap-4">
        <Input val={red} name="red" type="number" onChangeHandler={(e) => setRed(e.target.value)} />
        <Input val={green} name="green" type="number" onChangeHandler={(e) => setGreen(e.target.value)} />
        <Input val={blue} name="blue" type="number" onChangeHandler={(e) => setBlue(e.target.value)} />
        <Input val={alpha} name="alpha" type="number" onChangeHandler={(e) => setAlpha(e.target.value)} />
      </div>
      <Preview styles={{ backgroundColor: `rgba(${red},${green},${blue},${alpha})` }} />
      <CopyCode code={`background-color: rgba(${red},${green},${blue},${alpha})`} />
      <div className="mt-5">
        <div className="flex w-[150px] flex-col">
          <input type="text" className="border p-1" placeholder="Name" onChange={(e) => setNewProfileName(e.target.value)} />
          <button onClick={handleSaveProfile} type="button" className="cursor-pointer">
            Save
          </button>
        </div>
        <div className="mt-5 flex flex-row gap-5">
          {Object.keys(profiles).map((value, index) => {
            return (
              <div key={index} className="flex flex-col">
                <button onClick={() => handleSwitchProfile(profiles[value][0], profiles[value][1], profiles[value][2], profiles[value][3])} type="button">
                  {value}
                </button>
                <button type="button" onClick={() => handleRemoveProfile(value)}>
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
