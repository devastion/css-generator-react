import React from "react";
import { Input } from "components/Input";
import { Preview } from "components/Preview";
import { CopyCode } from "components/CopyCode";
import { useLocalStorage } from "usehooks-ts";

export const Outline = () => {
  const [color, setColor] = React.useState<number | string>("black");
  const [style, setStyle] = React.useState<number | string>("dashed");
  const [width, setWidth] = React.useState<number | string>(0);
  const [newProfileName, setNewProfileName] = React.useState<string>("");
  const [profiles, setProfiles]: any = useLocalStorage("outline", {});

  const handleSaveProfile = () => {
    if (Object.keys(profiles).length >= 5) {
      alert("You exceeded 5 saved profiles");
    } else {
      const temp: { [key: string]: any } = {};
      temp[newProfileName] = [color, style, width];
      setProfiles((prev: any) => ({ ...prev, ...temp }));
    }
  };

  const handleSwitchProfile = (x: string, y: string, z: number) => {
    setColor(x);
    setStyle(y);
    setWidth(z);
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
        <Input val={color} name="color" type="string" onChangeHandler={(e) => setColor(e.target.value)} />
        <label htmlFor="style">style:</label>
        <select name="style" id="style" onChange={(e) => setStyle(e.target.value)}>
          <option value="dashed">dashed</option>
          <option value="dotted">dotted</option>
          <option value="solid">solid</option>
          <option value="groove">groove</option>
        </select>
        <Input val={width} name="width" type="number" onChangeHandler={(e) => setWidth(e.target.value)} />
      </div>
      <Preview styles={{ outline: `${color} ${style} ${width}px` }} />
      <CopyCode code={`outline: ${color} ${style} ${width}px`} />
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
                <button onClick={() => handleSwitchProfile(profiles[value][0], profiles[value][1], profiles[value][2])} type="button">
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
