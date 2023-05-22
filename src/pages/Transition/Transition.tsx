import React from "react";
import { Input } from "components/Input";
import { Preview } from "components/Preview";
import { CopyCode } from "components/CopyCode";
import { useLocalStorage } from "usehooks-ts";

export const Transition = () => {
  const [property, setProperty] = React.useState<number | string>("all");
  const [duration, setDuration] = React.useState<number | string>(2);
  const [func, setFunc] = React.useState<number | string>("ease");
  const [newProfileName, setNewProfileName] = React.useState<string>("");
  const [profiles, setProfiles]: any = useLocalStorage("transition", {});

  const handleSaveProfile = () => {
    if (Object.keys(profiles).length >= 5) {
      alert("You exceeded 5 saved profiles");
    } else {
      const temp: { [key: string]: any } = {};
      temp[newProfileName] = [property, duration, func];
      setProfiles((prev: any) => ({ ...prev, ...temp }));
    }
  };

  const handleSwitchProfile = (x: string, y: number, z: string) => {
    setProperty(x);
    setDuration(y);
    setFunc(z);
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
        <label htmlFor="property">Property:</label>
        <select name="property" id="property" onChange={(e) => setProperty(e.target.value)}>
          <option value="all">all</option>
          <option value="background">background</option>
          <option value="color">color</option>
          <option value="height">height</option>
          <option value="width">width</option>
          <option value="outline">outline</option>
        </select>
        <Input val={duration} name="duration" type="number" onChangeHandler={(e) => setDuration(e.target.value)} />
        <label htmlFor="function">Function:</label>
        <select name="function" id="function" onChange={(e) => setFunc(e.target.value)}>
          <option value="ease">ease</option>
          <option value="linear">linear</option>
          <option value="ease-in">ease-in</option>
          <option value="ease-out">ease-out</option>
          <option value="ease-in-out">ease-in-out</option>
        </select>
      </div>
      <Preview styles={{ transition: `${property} ${duration}s ${func}`, backgroundColor: "red" }} />
      <CopyCode code={`transition: ${property} ${duration}s ${func}`} />
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
