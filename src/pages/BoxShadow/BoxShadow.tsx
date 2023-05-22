import React from "react";
import { Input } from "components/Input";
import { Preview } from "components/Preview";
import { CopyCode } from "components/CopyCode";
import { useLocalStorage } from "usehooks-ts";

export const BoxShadow = () => {
  const [offsetX, setOffsetX] = React.useState<number | string>(0);
  const [offsetY, setOffsetY] = React.useState<number | string>(0);
  const [blur, setBlur] = React.useState<number | string>(0);
  const [color, setColor] = React.useState<number | string>("black");
  const [newProfileName, setNewProfileName] = React.useState<string>("");
  const [profiles, setProfiles]: any = useLocalStorage("box-shadow", {});

  const handleSaveProfile = () => {
    if (Object.keys(profiles).length >= 5) {
      alert("You exceeded 5 saved profiles");
    } else {
      const temp: { [key: string]: any } = {};
      temp[newProfileName] = [offsetX, offsetY, blur, color];
      setProfiles((prev: any) => ({ ...prev, ...temp }));
    }
  };

  const handleSwitchProfile = (x: number, y: number, blur: number, color: string) => {
    setOffsetX(x);
    setOffsetY(y);
    setBlur(blur);
    setColor(color);
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
        <Input val={offsetX} name="Offset X" type="number" onChangeHandler={(e) => setOffsetX(e.target.value)} />
        <Input val={offsetY} name="Offset Y" type="number" onChangeHandler={(e) => setOffsetY(e.target.value)} />
        <Input val={blur} name="Blur" type="number" onChangeHandler={(e) => setBlur(e.target.value)} />
        <Input val={color} name="Color" type="text" onChangeHandler={(e) => setColor(e.target.value)} />
      </div>
      <Preview styles={{ boxShadow: `${offsetX}px ${offsetY}px ${blur}px ${color}` }} />
      <CopyCode code={`box-shadow: ${offsetX}px ${offsetY}px ${blur}px ${color}`} />
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
