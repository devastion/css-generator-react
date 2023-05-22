import React from "react";
import { Input } from "components/Input";
import { Preview } from "components/Preview";
import { CopyCode } from "components/CopyCode";
import { useLocalStorage } from "usehooks-ts";

export const BorderRadius = () => {
  const [top, setTop] = React.useState<number | string>(0);
  const [right, setRight] = React.useState<number | string>(0);
  const [bottom, setBottom] = React.useState<number | string>(0);
  const [left, setLeft] = React.useState<number | string>(0);
  const [newProfileName, setNewProfileName] = React.useState<string>("");
  const [profiles, setProfiles]: any = useLocalStorage("border-radius", {});

  const handleSaveProfile = () => {
    if (Object.keys(profiles).length >= 5) {
      alert("You exceeded 5 saved profiles");
    } else {
      const temp: { [key: string]: any } = {};
      temp[newProfileName] = [top, right, bottom, left];
      setProfiles((prev: any) => ({ ...prev, ...temp }));
    }
  };

  const handleSwitchProfile = (top: number, right: number, bottom: number, left: number) => {
    setTop(top);
    setRight(right);
    setBottom(bottom);
    setLeft(left);
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
        <Input val={top} name="top" type="number" onChangeHandler={(e) => setTop(e.target.value)} />
        <Input val={right} name="right" type="number" onChangeHandler={(e) => setRight(e.target.value)} />
        <Input val={bottom} name="bottom" type="number" onChangeHandler={(e) => setBottom(e.target.value)} />
        <Input val={left} name="left" type="number" onChangeHandler={(e) => setLeft(e.target.value)} />
      </div>
      <Preview styles={{ borderRadius: `${top}px ${right}px ${bottom}px ${left}px` }} />
      <CopyCode code={`border-radius: ${top}px ${right}px ${bottom}px ${left}px`} />
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
